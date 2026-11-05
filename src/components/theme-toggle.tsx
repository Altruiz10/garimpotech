"use client";
import {useEffect,useState} from "react";
import {Moon,Sun} from "lucide-react";

export function ThemeToggle(){
  const [dark,setDark]=useState<boolean|undefined>(undefined);
  useEffect(()=>{setDark(document.documentElement.dataset.theme==="dark")},[]);
  function toggle(){
    const next=document.documentElement.dataset.theme==="dark"?"light":"dark";
    document.documentElement.dataset.theme=next;
    try{localStorage.setItem("theme",next)}catch{}
    setDark(next==="dark");
  }
  return <button type="button" onClick={toggle} aria-label="Modo escuro" aria-pressed={dark} title="Alternar tema claro/escuro" className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-ink/5">
    <Moon size={21} className="theme-icon-moon" aria-hidden/>
    <Sun size={21} className="theme-icon-sun text-gold-ink" aria-hidden/>
  </button>
}
