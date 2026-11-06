import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

type Props = {mode: 'square' | 'landscape'};

const C = {lav:'#f2eaf8', plum:'#261231', purple:'#6b2cb8', orange:'#ee7733', muted:'#725e7e', line:'#e6d9ee', green:'#24865a'};
const clamp = {extrapolateLeft:'clamp' as const, extrapolateRight:'clamp' as const};
const ease = Easing.bezier(.16,1,.3,1);
const appear = (frame:number, start:number, duration=14) => interpolate(frame,[start,start+duration],[0,1],{...clamp,easing:ease});

const order = [
  {value:'Ana', col:0, fromSquare:[345,415], fromLandscape:[430,478]},
  {value:'Caja de alfajores', col:1, fromSquare:[290,468], fromLandscape:[330,532]},
  {value:'2', col:2, fromSquare:[170,468], fromLandscape:[180,532]},
  {value:'Mañana', col:3, fromSquare:[210,520], fromLandscape:[610,532]},
];

export const AdaptiveAd: React.FC<Props> = ({mode}) => {
  const frame=useCurrentFrame();
  const {width,height}=useVideoConfig();
  const square=mode==='square';

  const layout = square ? {
    margin:50, brandY:42, hookY:108, cardY:250, cardH:390, msgX:50, msgW:450, sheetX:535, sheetW:495,
    ctaY:790, ctaH:205, footerY:1035, msgFont:29, fieldFont:23,
    cols:[90,180,80,101], headers:['Cliente','Producto','Cant.','Entrega'],
    source:order.map(o=>o.fromSquare),
  } : {
    margin:80, brandY:42, hookY:104, cardY:270, cardH:470, msgX:80, msgW:700, sheetX:850, sheetW:990,
    ctaY:805, ctaH:205, footerY:1038, msgFont:36, fieldFont:29,
    cols:[190,390,160,200], headers:['Cliente','Producto','Cantidad','Entrega'],
    source:order.map(o=>o.fromLandscape),
  };
  const pad=square?18:24;
  const headerH=square?48:62;
  const headerTop=layout.cardY+pad+38;
  const rowTop=headerTop+headerH;
  const colStarts=layout.cols.reduce<number[]>((acc,w,i)=>{acc.push(i===0?0:acc[i-1]+layout.cols[i-1]);return acc;},[]);

  return <AbsoluteFill style={{background:C.lav,color:C.plum,fontFamily:'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:0,width,height}}>
      <div style={{position:'absolute',top:layout.brandY,left:layout.margin,fontSize:square?22:25,fontWeight:850,letterSpacing:'.08em'}}>CRIOLLO <span style={{color:C.purple}}>LABS</span></div>
      <div style={{position:'absolute',top:layout.brandY-6,right:layout.margin,padding:'10px 17px',background:'#fff9',border:`1px solid ${C.line}`,borderRadius:30,fontSize:square?17:19,fontWeight:700,color:C.muted}}>Ejemplo ilustrativo</div>
      <div style={{position:'absolute',left:layout.margin,top:layout.hookY,fontSize:square?48:56,lineHeight:1.04,fontWeight:850,letterSpacing:-1.8}}>¿Copiás cada pedido a una planilla?</div>
      <div style={{position:'absolute',left:layout.margin,top:layout.hookY+(square?60:66),fontSize:square?22:25,color:C.muted}}>Del mensaje a una fila, campo por campo.</div>

      {/* Message card, placed alongside the sheet in both aspect ratios. */}
      <div style={{position:'absolute',left:layout.msgX,top:layout.cardY,width:layout.msgW,height:layout.cardH,background:'#fff',borderRadius:26,padding:square?22:30,boxSizing:'border-box',boxShadow:'0 16px 38px #26123112',opacity:appear(frame,0),translate:`0 ${interpolate(frame,[0,14],[20,0],{...clamp,easing:ease})}px`}}>
        <div style={{display:'flex',alignItems:'center',gap:13,marginBottom:square?22:28}}>
          <div style={{width:44,height:44,borderRadius:15,background:'#f7e8dc',display:'grid',placeItems:'center',fontWeight:850,color:C.orange,fontSize:19}}>WA</div>
          <div><div style={{fontSize:square?19:22,fontWeight:800}}>Pedido recibido</div><div style={{fontSize:square?15:17,color:C.muted}}>mensaje de ejemplo</div></div>
          <div style={{marginLeft:'auto',fontSize:16,color:C.muted}}>10:42</div>
        </div>
        <div style={{background:'#f7f3fa',borderRadius:20,padding:square?'21px 20px':'28px 26px',fontSize:layout.msgFont,lineHeight:1.37}}>
          {square ? <>Hola, soy <b style={{background:frame>=120?'#f4d6c2':'transparent',borderRadius:7}}>Ana</b>. Quiero<br/><b style={{background:frame>=180?'#f4d6c2':'transparent',borderRadius:7}}>2</b> <b style={{background:frame>=150?'#f4d6c2':'transparent',borderRadius:7}}>cajas de alfajores</b><br/>para <b style={{background:frame>=210?'#f4d6c2':'transparent',borderRadius:7}}>mañana</b>.</> : <>Hola, soy <b style={{background:frame>=120?'#f4d6c2':'transparent',borderRadius:7}}>Ana</b>. Quiero<br/><b style={{background:frame>=180?'#f4d6c2':'transparent',borderRadius:7}}>2</b> <b style={{background:frame>=150?'#f4d6c2':'transparent',borderRadius:7}}>cajas de alfajores</b><br/>para <b style={{background:frame>=210?'#f4d6c2':'transparent',borderRadius:7}}>mañana</b>.</>}
        </div>
        <div style={{position:'absolute',left:square?22:30,bottom:19,fontSize:square?14:16,color:C.muted}}>Simulación · sin integración activa</div>
      </div>

      {/* Structured destination stays in view beside the message. */}
      <div style={{position:'absolute',left:layout.sheetX,top:layout.cardY,width:layout.sheetW,height:layout.cardH,background:'#fff',borderRadius:26,padding:pad,boxSizing:'border-box',boxShadow:'0 16px 38px #26123112'}}>
        <div style={{position:'absolute',top:pad,left:pad,right:pad,height:35,display:'flex',alignItems:'center'}}><div style={{fontSize:square?19:22,fontWeight:800}}>Pedidos</div><div style={{marginLeft:'auto',fontSize:16,color:C.muted}}>Hoja 1</div></div>
        <div style={{position:'absolute',top:pad+38,left:pad,right:pad,height:headerH,display:'flex',alignItems:'center',background:'#f7f3fa',borderBottom:`1px solid ${C.line}`}}>
          {layout.headers.map((label,i)=><div key={label} style={{width:layout.cols[i],paddingLeft:square?7:13,boxSizing:'border-box',fontSize:square?15:19,fontWeight:750,color:C.muted}}>{label}</div>)}
        </div>
        <div style={{position:'absolute',top:pad+38+headerH,left:pad,right:pad,height:square?78:100,display:'flex',alignItems:'center',borderBottom:`1px solid ${C.line}`,background:frame>=240?'#f5fbf7':'#fff'}}>
          {layout.cols.map((w,i)=><div key={i} style={{width:w,height:'100%',borderRight:i<3?`1px solid ${C.line}`:'none'}}/>)}
        </div>
        <div style={{position:'absolute',left:pad,bottom:15,fontSize:square?14:16,color:C.muted}}>Campos del pedido</div>
        <div style={{position:'absolute',right:pad,bottom:12,padding:'7px 11px',borderRadius:18,background:'#e5f4eb',color:C.green,fontSize:square?14:16,fontWeight:800,opacity:appear(frame,300,12)}}>✓ Cargado</div>
      </div>

      {/* Each extracted value travels on its own path from the message to its table cell. */}
      {order.map((item,i)=>{
        const start=120+i*30;
        const p=interpolate(frame,[start,start+27],[0,1],{...clamp,easing:ease});
        const [sourceX,sourceY]=layout.source[i];
        const targetX=layout.sheetX+pad+colStarts[item.col]+layout.cols[item.col]/2;
        const targetY=rowTop+(square?39:50);
        const x=interpolate(p,[0,1],[sourceX,targetX],{...clamp});
        const y=interpolate(p,[0,1],[sourceY,targetY],{...clamp});
        const opacity=interpolate(frame,[start,start+8,start+31],[0,1,1],{...clamp});
        const widths=square?[76,160,58,104]:[96,242,88,132];
        return <div key={item.value} style={{position:'absolute',left:x-widths[i]/2,top:y-(square?22:25),width:widths[i],height:square?44:50,display:'grid',placeItems:'center',fontSize:square?(i===1?16:18):22,fontWeight:780,whiteSpace:'nowrap',color:C.plum,background:p>.05?'#fff':C.orange,borderRadius:11,opacity,boxShadow:p<.98?'0 6px 16px #26123118':'none'}}>{item.value}</div>;
      })}

      <div style={{position:'absolute',left:layout.margin,top:layout.ctaY,width:width-layout.margin*2,height:layout.ctaH,background:C.plum,borderRadius:27,padding:square?'24px 30px':'27px 36px',boxSizing:'border-box',opacity:appear(frame,390,9),translate:`0 ${interpolate(frame,[390,402],[18,0],{...clamp,easing:ease})}px`,boxShadow:'0 18px 40px #26123120'}}>
        <div style={{fontSize:square?16:19,color:'#d8c5e4',fontWeight:750,letterSpacing:1}}>CRIOLLO LABS</div>
        <div style={{fontSize:square?42:50,fontWeight:850,color:'#fff',letterSpacing:-1,marginTop:square?2:4}}>Contanos tu proceso</div>
        <div style={{fontSize:square?21:26,color:'#e4d6ec',marginTop:square?1:4}}>Charla de 20 min sin cargo · implementación aparte</div>
      </div>
      <div style={{position:'absolute',left:layout.margin,top:layout.footerY,fontSize:square?14:16,color:C.muted}}>Software a medida · ejemplo con datos ficticios</div>
    </div>
  </AbsoluteFill>;
};
