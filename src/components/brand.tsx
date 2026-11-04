import { Cpu } from "lucide-react";
import Link from "next/link";
export function Brand({light=false}:{light?:boolean}){return <Link href="/" aria-label="Nexora — início" className="inline-flex items-center gap-2"><span className="rounded-xl bg-blue-600 p-2 text-white"><Cpu size={22}/></span><span className={`text-2xl font-black tracking-tight ${light?"text-white":"text-slate-950"}`}>nexora<span className="text-blue-400">.</span></span></Link>}
