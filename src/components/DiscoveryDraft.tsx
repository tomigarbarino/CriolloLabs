'use client'
import {useState} from 'react'
const questions=[
 ['empresa','¿Qué hace tu empresa?','Contanos el rubro y qué producto o servicio ofrece.'],
 ['proceso','¿Qué tarea te gustaría mejorar?','Elegí una tarea concreta que se repita.'],
 ['frecuencia','¿Con qué frecuencia ocurre y quién participa?','Por ejemplo: todos los días, entre ventas y administración.'],
 ['herramientas','¿Cómo la resuelven hoy?','Planillas, mensajes, un sistema de gestión u otras herramientas.'],
 ['resultado','¿Cómo sabrías que mejoró?','Menos tiempo, menos errores, mejor seguimiento u otro resultado.'],
 ['contacto','¿Dónde podemos contactarte?','Dejanos tu nombre y un email o teléfono de trabajo.'],
]
export default function DiscoveryDraft(){
 const [step,setStep]=useState(0),[answers,setAnswers]=useState<Record<string,string>>({}),[consent,setConsent]=useState(false)
 const q=questions[step]
 return <main className="wrap section" style={{maxWidth:800}}>
 <a className="text-link" href="/es">Volver a Criollo Labs</a>
 <h1 style={{fontSize:48,marginTop:35}}>Contanos qué está trabando tu operación.</h1>
 <p>Diagnóstico guiado. No compartas contraseñas, datos de clientes ni información confidencial.</p>
 <p role="status">Vista previa: las respuestas quedan en esta pantalla y todavía no se envían ni guardan.</p>
 {q?<form onSubmit={e=>{e.preventDefault();setStep(s=>s+1)}}>
 <p>Paso {step+1} de {questions.length}</p>
 <h2 style={{fontSize:30}}><label htmlFor="answer">{q[1]}</label></h2>
 <p id="hint">{q[2]}</p>
 <textarea id="answer" aria-describedby="hint" value={answers[q[0]]||''} onChange={e=>setAnswers(a=>({...a,[q[0]]:e.target.value}))} required maxLength={1500} rows={5} style={{width:'100%',padding:16,border:'1px solid #867395',borderRadius:12,color:'#30223f',background:'#fff',font:'inherit'}}/>
 <div className="hero-actions">{step>0&&<button type="button" className="text-link" onClick={()=>setStep(s=>s-1)}>Anterior</button>}<button className="button" type="submit">{step===5?'Revisar resumen':'Continuar'}</button></div>
 </form>:<section><h2>Esto entendimos de tu operación</h2><dl>{questions.map(([key,label])=><div key={key} style={{marginBottom:24}}><dt><strong>{label}</strong></dt><dd style={{whiteSpace:'pre-wrap'}}>{answers[key]}</dd></div>)}</dl>
 <label><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)}/> Autorizo a Criollo Labs a guardar estas respuestas y contactarme por esta consulta.</label>
 <p>El guardado está pendiente de habilitación. No se enviaron tus datos.</p>
 <button className="text-link" onClick={()=>setStep(0)}>Editar respuestas</button>
 </section>}
 </main>
}
