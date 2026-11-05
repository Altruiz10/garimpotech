import type {MetadataRoute} from "next";

export default function manifest():MetadataRoute.Manifest{
  return {
    name:"Garimpo Tech",
    short_name:"Garimpo Tech",
    description:"Guias e comparativos de tecnologia para ajudar você a escolher melhor.",
    lang:"pt-BR",
    start_url:"/",
    scope:"/",
    display:"standalone",
    background_color:"#eef1ee",
    theme_color:"#11302a",
    icons:[
      {src:"/icons/icon-192.png",sizes:"192x192",type:"image/png",purpose:"any"},
      {src:"/icons/icon-512.png",sizes:"512x512",type:"image/png",purpose:"any"},
      {src:"/icons/icon-maskable-512.png",sizes:"512x512",type:"image/png",purpose:"maskable"},
    ],
  };
}
