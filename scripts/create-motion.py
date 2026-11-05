from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
root=Path(__file__).resolve().parents[1]
font='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
f=ImageFont.truetype(font,24);small=ImageFont.truetype(font,16);title=ImageFont.truetype(font,35)
bg='#f1eaf7';ink='#30223f';violet='#6631a0';muted='#63566d'
for name,labels,heading in [('pedido-en-orden',['Recibir','Asignar','Dar seguimiento'],'Cada pedido, con su próximo paso.'),('mejora-continua',['Entender','Implementar','Mejorar'],'Una mejora a la vez.')]:
 frames=[]
 for n in range(48):
  im=Image.new('RGB',(960,380),bg);d=ImageDraw.Draw(im)
  d.text((40,30),'Criollo Labs',fill=violet,font=small)
  d.text((40,76),heading,fill=ink,font=title)
  d.line((100,205,850,205),fill='#c8bdd3',width=3)
  progress=min(1,n/36);d.line((100,205,100+750*progress,205),fill=violet,width=4)
  for i,label in enumerate(labels):
   x=100+375*i;active=progress>=i/2
   d.ellipse((x-11,194,x+11,216),fill=violet if active else bg,outline=violet,width=2)
   box=d.textbbox((0,0),label,font=f);d.text((x-(box[2]-box[0])/2,240),label,font=f,fill=ink)
  d.text((40,330),'Secuencia ilustrativa · Criollo Labs',fill=muted,font=small)
  frames.append(im)
 frames[0].save(root/f'public/motion/{name}.gif',save_all=True,append_images=frames[1:],duration=90,loop=0,optimize=True)
 frames[-1].save(root/f'public/motion/{name}.png')
 print(name)
