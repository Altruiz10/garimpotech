"use client";
import {useEffect,useState} from "react";
import {usePathname} from "next/navigation";
import {Download,Share,X} from "lucide-react";

type InstallEvent=Event&{prompt:()=>Promise<void>;userChoice:Promise<{outcome:"accepted"|"dismissed"}>};
const DISMISS_KEY="install-prompt-dismissed";
const PAGES_KEY="install-prompt-pages";
const RETURNING_KEY="install-prompt-returning";
/** Páginas vistas na visita antes de oferecer a instalação a quem chega pela primeira vez. */
const MIN_PAGES=2;

function isStandalone(){
  return window.matchMedia("(display-mode: standalone)").matches||(navigator as Navigator&{standalone?:boolean}).standalone===true;
}
function isIos(){
  const ua=navigator.userAgent;
  return /iphone|ipad|ipod/i.test(ua)||(ua.includes("Macintosh")&&navigator.maxTouchPoints>1);
}
function dismissedThisVisit(){
  try{return sessionStorage.getItem(DISMISS_KEY)==="1"}catch{return false}
}
/** Quem já veio antes vê o aviso logo; quem chega pela primeira vez, depois de ver MIN_PAGES páginas. */
function readEngagement(){
  try{
    const firstPageOfVisit=sessionStorage.getItem(PAGES_KEY)===null;
    const returning=firstPageOfVisit?localStorage.getItem(RETURNING_KEY)==="1":sessionStorage.getItem(RETURNING_KEY)==="1";
    if(firstPageOfVisit){
      sessionStorage.setItem(RETURNING_KEY,returning?"1":"0");
      localStorage.setItem(RETURNING_KEY,"1");
    }
    return {returning};
  }catch{return {returning:false}}
}
function countPage(){
  try{
    const n=Number(sessionStorage.getItem(PAGES_KEY)??"0")+1;
    sessionStorage.setItem(PAGES_KEY,String(n));
    return n;
  }catch{return 1}
}

/** Registra o service worker e, a cada visita, oferece instalar o app a quem demonstrou interesse. */
export function InstallPrompt(){
  const [deferred,setDeferred]=useState<InstallEvent|null>(null);
  const [ios,setIos]=useState(false);
  const [visible,setVisible]=useState(false);
  const [engaged,setEngaged]=useState(false);
  const pathname=usePathname();

  // Conta cada página vista na visita (inclui navegação interna sem recarregar).
  useEffect(()=>{
    const {returning}=readEngagement();
    const pages=countPage();
    if(returning||pages>=MIN_PAGES)setEngaged(true);
  },[pathname]);

  useEffect(()=>{
    if("serviceWorker" in navigator&&process.env.NODE_ENV==="production"){
      navigator.serviceWorker.register("/sw.js").catch(()=>{});
    }
    if(isStandalone()||dismissedThisVisit())return;

    let timer:ReturnType<typeof setTimeout>|undefined;
    const show=()=>{timer=setTimeout(()=>setVisible(true),1500)};
    const onPrompt=(e:Event)=>{e.preventDefault();setDeferred(e as InstallEvent);show()};
    const onInstalled=()=>{setVisible(false);setDeferred(null)};

    window.addEventListener("beforeinstallprompt",onPrompt);
    window.addEventListener("appinstalled",onInstalled);
    if(isIos()){setIos(true);show()}
    return()=>{
      window.removeEventListener("beforeinstallprompt",onPrompt);
      window.removeEventListener("appinstalled",onInstalled);
      if(timer)clearTimeout(timer);
    };
  },[]);

  function dismiss(){
    setVisible(false);
    try{sessionStorage.setItem(DISMISS_KEY,"1")}catch{}
  }
  async function install(){
    if(!deferred)return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    setVisible(false);
  }

  if(!visible||!engaged||(!deferred&&!ios))return null;
  return <section role="dialog" aria-label="Instalar o aplicativo" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-md rounded-xl border border-line bg-surface p-4 shadow-2xl">
    <button type="button" onClick={dismiss} aria-label="Fechar" className="absolute right-1.5 top-1.5 flex h-11 w-11 items-center justify-center rounded-lg text-muted hover:bg-ink/5"><X size={20} aria-hidden/></button>
    <div className="flex items-start gap-3 pr-9">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold text-on-gold"><Download size={22} aria-hidden/></span>
      <div className="min-w-0">
        <p className="font-extrabold leading-tight">Instale o Garimpo Tech</p>
        {deferred
          ?<p className="mt-1 text-sm leading-6 text-muted">Acesso rápido pela tela inicial, direto no seu aparelho, sem ocupar espaço.</p>
          :<p className="mt-1 text-sm leading-6 text-muted">Toque em <Share size={15} className="inline -translate-y-px" aria-label="Compartilhar"/> e depois em <strong className="text-ink">Adicionar à Tela de Início</strong>.</p>}
      </div>
    </div>
    <div className="mt-4 flex gap-2">
      {deferred&&<button type="button" onClick={install} className="min-h-11 flex-1 rounded-md bg-gold px-4 text-sm font-bold text-on-gold hover:bg-gold-hover">Instalar</button>}
      <button type="button" onClick={dismiss} className={`min-h-11 rounded-md border border-line px-4 text-sm font-bold hover:bg-ink/5 ${deferred?"":"flex-1"}`}>{deferred?"Agora não":"Entendi"}</button>
    </div>
  </section>
}
