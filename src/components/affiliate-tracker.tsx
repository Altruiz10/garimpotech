"use client";
import {useEffect} from "react";
import {track} from "@vercel/analytics";

/**
 * Conta cliques em links de afiliado marcados com data-affiliate.
 * Um único ouvinte na página: os componentes dos links continuam sendo do servidor.
 */
export function AffiliateTracker(){
  useEffect(()=>{
    function onClick(e:MouseEvent){
      const link=(e.target as Element|null)?.closest?.("a[data-affiliate]");
      if(!(link instanceof HTMLAnchorElement))return;
      const d=link.dataset;
      track("Clique afiliado",{
        produto:d.affiliate??"",
        posicao:d.position??"",
        elemento:d.placement??"",
        loja:d.store??"",
        pagina:location.pathname,
      });
    }
    document.addEventListener("click",onClick,{capture:true});
    document.addEventListener("auxclick",onClick,{capture:true});
    return()=>{
      document.removeEventListener("click",onClick,{capture:true});
      document.removeEventListener("auxclick",onClick,{capture:true});
    };
  },[]);
  return null;
}
