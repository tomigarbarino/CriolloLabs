import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const P = {lav:'#f2eaf8', plum:'#261231', purple:'#6b2cb8', orange:'#ee7733', white:'#fff', muted:'#725e7e', line:'#e6d9ee', green:'#24865a'};
const clamp = {extrapolateLeft:'clamp' as const, extrapolateRight:'clamp' as const};
const smooth = Easing.bezier(.16,1,.3,1);
const appear = (f:number, at:number, span=14) => interpolate(f,[at,at+span],[0,1],{...clamp,easing:smooth});
const slideX = (f:number, at:number, span:number, from:number, to=0) => interpolate(f,[at,at+span],[from,to],{...clamp,easing:smooth});

const Label = ({children,style={}}:any) => <div style={{fontSize:24,fontWeight:750,letterSpacing:1.3,textTransform:'uppercase' as const,color:P.muted,...style}}>{children}</div>;

export const CriolloAd: React.FC = () => {
  const f=useCurrentFrame(); const {width,height}=useVideoConfig();
  const scale=width/1080; const vertical=height>1600;
  // All content scales from one authored 9:16 layout; feed crop reflows the vertical stack.
  const rowY=vertical?1000:720;
  const messageY=vertical?365:300;
  const rowTop=rowY+22+27+18+58;
  const slots=[{x:0,w:162},{x:162,w:370},{x:532,w:125},{x:657,w:235}];
  const data=[{v:'Ana',source:'Ana',startX:228},{v:'Caja de alfajores',source:'cajas de alfajores',startX:528},{v:'2',source:'2',startX:328},{v:'Mañana',source:'mañana',startX:738}];
  const ends=[120,150,180,210];
  const cta=appear(f,390,9);
  return <AbsoluteFill style={{backgroundColor:P.lav,color:P.plum,fontFamily:'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:0,transform:`scale(${scale})`,transformOrigin:'top left',width:1080,height}}>
      {/* Ambient brand marks are static texture; all meaningful UI elements animate independently. */}
      <div style={{position:'absolute',top:67,left:74,fontSize:24,fontWeight:800,letterSpacing:'.08em'}}>CRIOLLO <span style={{color:P.purple}}>LABS</span></div>
      <div style={{position:'absolute',top:66,right:74,background:'#fff9',border:`1px solid ${P.line}`,borderRadius:30,padding:'12px 20px',fontSize:20,fontWeight:700,color:P.muted}}>Ejemplo ilustrativo</div>
      <div style={{position:'absolute',left:75,top:vertical?143:115,width:930}}>
        <div style={{fontSize:vertical?58:50,fontWeight:800,lineHeight:1.08,letterSpacing:-2}}>¿Copiás cada pedido<br/>a una planilla?</div>
        <div style={{marginTop:18,fontSize:27,color:P.muted}}>Del mensaje a una fila, campo por campo.</div>
      </div>
      {/* Incoming message card */}
      <div style={{position:'absolute',left:72,top:messageY,width:936,height:vertical?335:300,background:P.white,borderRadius:30,padding:30,boxSizing:'border-box',boxShadow:'0 18px 42px #26123112',opacity:appear(f,0,14),translate:`0 ${interpolate(f,[0,14],[26,0],{...clamp,easing:smooth})}px`}}>
        <div style={{display:'flex',alignItems:'center',gap:15,marginBottom:22}}>
          <div style={{width:48,height:48,borderRadius:16,background:'#f7e8dc',display:'grid',placeItems:'center',fontSize:21,fontWeight:800,color:P.orange}}>WA</div>
          <div><div style={{fontSize:23,fontWeight:750}}>Pedido recibido</div><div style={{fontSize:18,color:P.muted,marginTop:3}}>mensaje de ejemplo</div></div>
          <div style={{marginLeft:'auto',fontSize:18,color:P.muted}}>10:42</div>
        </div>
        <div style={{background:'#f7f3fa',borderRadius:22,padding:'22px 24px',fontSize:36,lineHeight:1.32,maxWidth:820}}>
          Hola, soy <b style={{background:f>=120?'#f4d6c2':'transparent',borderRadius:8,padding:'1px 4px'}}>Ana</b>. Quiero <b style={{background:f>=180?'#f4d6c2':'transparent',borderRadius:8,padding:'1px 4px'}}>2</b> <b style={{background:f>=150?'#f4d6c2':'transparent',borderRadius:8,padding:'1px 4px'}}>cajas de alfajores</b> para <b style={{background:f>=210?'#f4d6c2':'transparent',borderRadius:8,padding:'1px 4px'}}>mañana</b>.
        </div>
        <div style={{position:'absolute',bottom:16,right:26,fontSize:17,color:P.muted}}>Simulación · sin integración activa</div>
      </div>
      {/* Sheet stays in place from hook through result; each value is its own moving element. */}
      <div style={{position:'absolute',left:72,top:rowY,width:936,height:330,background:'#fff',borderRadius:28,boxShadow:'0 18px 42px #26123112',padding:22,boxSizing:'border-box'}}>
        <div style={{display:'flex',alignItems:'center',marginBottom:18}}><div style={{fontSize:22,fontWeight:800}}>Pedidos</div><div style={{marginLeft:'auto',fontSize:18,color:P.muted}}>Hoja 1</div></div>
        <div style={{display:'flex',height:58,background:'#f7f3fa',borderRadius:'12px 12px 0 0',alignItems:'center',borderBottom:`1px solid ${P.line}`}}>
          {['Cliente','Producto','Cant.','Entrega'].map((t,i)=><div key={t} style={{width:slots[i].w,paddingLeft:18,boxSizing:'border-box',fontSize:24,fontWeight:750,color:P.muted}}>{t}</div>)}
        </div>
        <div style={{position:'relative',height:88,display:'flex',alignItems:'center',borderBottom:`1px solid ${P.line}`,background:f>=240?'#f5fbf7':'#fff'}}>
          {slots.map((s,i)=><div key={i} style={{width:s.w,height:'100%',borderRight:i<3?`1px solid ${P.line}`:'none'}}/>)}
          {data.map((d,i)=>{
            const start=120+i*30; const p=interpolate(f,[start,start+27],[0,1],{...clamp,easing:smooth});
            const x=interpolate(p,[0,1],[d.startX,slots[i].x+slots[i].w/2],{...clamp});
            const y=interpolate(p,[0,1],[messageY+165-rowTop,22],{...clamp});
            const opacity=interpolate(f,[start,start+8,start+31],[0,1,1],{...clamp});
            return <div key={i} style={{position:'absolute',left:x- (i===1?150:i===3?80:40),top:y,width:i===1?300:i===3?160:80,height:44,display:'grid',placeItems:'center',fontSize:i===1?28:30,fontWeight:750,whiteSpace:'nowrap',color:P.plum,background:p>.05?'#fff':P.orange,borderRadius:12,opacity,boxShadow:p<.98?'0 6px 16px #26123118':'none'}}>{d.v}</div>;
          })}
        </div>
        <div style={{position:'absolute',bottom:19,left:23,fontSize:17,color:P.muted}}>Campos del pedido</div>
        <div style={{position:'absolute',right:22,bottom:17,padding:'8px 14px',borderRadius:20,background:'#e5f4eb',color:P.green,fontSize:17,fontWeight:800,opacity:appear(f,300,12)}}>✓ Cargado</div>
      </div>
      {/* Short prompt during the actual transfer, above the sheet, not a full-screen slate. */}
      <div style={{position:'absolute',left:75,top:vertical?910:650,fontSize:26,fontWeight:750,color:P.purple,opacity:appear(f,90,12)-appear(f,310,12)}}>Del chat a la planilla</div>
      <div style={{position:'absolute',left:75,top:vertical?1360:1055,width:930,opacity:appear(f,300,14)-appear(f,385,5)}}>
        <div style={{display:'flex',alignItems:'center',gap:15,fontSize:25,fontWeight:800}}><span style={{width:12,height:12,borderRadius:20,background:P.orange,display:'inline-block'}}/>Un proceso pensado para tu negocio</div>
        <div style={{fontSize:23,color:P.muted,marginTop:14}}>Alcance definido con vos · implementación cotizada aparte</div>
      </div>
      {/* CTA enters at 13s and stays legible for the final five seconds. */}
      <div style={{position:'absolute',left:72,top:vertical?1440:1100,width:936,height:vertical?270:190,background:P.plum,borderRadius:30,padding:vertical?'30px 36px':'24px 34px',boxSizing:'border-box',opacity:cta,translate:`0 ${interpolate(f,[390,402],[20,0],{...clamp,easing:smooth})}px`,boxShadow:'0 22px 45px #26123126'}}>
        <div style={{fontSize:20,color:'#d8c5e4',fontWeight:700,letterSpacing:1}}>CRIOLLO LABS</div>
        <div style={{fontSize:vertical?49:43,fontWeight:850,color:'#fff',letterSpacing:-1,marginTop:vertical?12:4}}>Contanos tu proceso</div>
        <div style={{fontSize:vertical?28:26,color:'#e4d6ec',marginTop:vertical?10:4}}>Charla de 20 min sin cargo · implementación aparte</div>
      </div>
      <div style={{position:'absolute',bottom:vertical?48:35,left:75,fontSize:17,color:P.muted}}>Software a medida · ejemplo con datos ficticios</div>
      {/* CTA light lift; no global canvas zoom or dissolve. */}
      <div style={{position:'absolute',right:79,bottom:vertical?48:35,width:11,height:11,borderRadius:'50%',background:P.orange,opacity:appear(f,390,10)}} />
    </div>
  </AbsoluteFill>;
};
