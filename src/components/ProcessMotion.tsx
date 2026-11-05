'use client'
import {useEffect,useRef,useState} from 'react'
export default function ProcessMotion({name,title}:{name:string;title:string}){
 const [playing,setPlaying]=useState(false)
 const [run,setRun]=useState(0)
 const figure=useRef<HTMLElement>(null)
 useEffect(()=>{if(!playing)return;const stop=()=>setPlaying(false);const t=setTimeout(stop,4320);const hidden=()=>{if(document.hidden)stop()};document.addEventListener('visibilitychange',hidden);const ob=new IntersectionObserver(([e])=>{if(!e.isIntersecting)stop()});if(figure.current)ob.observe(figure.current);return()=>{clearTimeout(t);ob.disconnect();document.removeEventListener('visibilitychange',hidden)}},[playing,run])
 return <figure className="motion-figure" ref={figure}>
 {/* Exact process diagram; generated locally by scripts/create-motion.py. */}
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img key={run} src={`/motion/${name}.${playing?'gif':'png'}`} width="960" height="380" alt={title} loading="lazy"/>
 <figcaption><span>Ejemplo ilustrativo de cómo trabajamos.</span><button type="button" onClick={()=>{setRun(x=>x+1);setPlaying(x=>!x)}} aria-pressed={playing}>{playing?'Pausar animación':'Ver el proceso en movimiento'}</button></figcaption>
 </figure>
}
