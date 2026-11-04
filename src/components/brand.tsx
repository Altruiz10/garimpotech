import {Gem} from "lucide-react";
import Link from "next/link";

export function Brand({light=false}:{light?:boolean}){
  return <Link href="/" aria-label="Garimpo Tech — início" className="inline-flex items-center gap-2.5">
    <span className="rounded-md bg-gold p-2 text-ink"><Gem size={22} aria-hidden/></span>
    <span className={`font-display text-2xl font-extrabold tracking-tight ${light?"text-white":"text-ink"}`}>garimpo<span className={light?"text-gold":"text-gold-ink"}>tech</span></span>
  </Link>
}
