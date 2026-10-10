const gallery=document.querySelector('.nexa-gallery');
if(gallery){
 const slides=Array.from(gallery.querySelectorAll('.nexa-slide'));
 const controls=gallery.querySelector('.nexa-controls');
 const buttons=Array.from(controls.querySelectorAll('button[data-slide]'));
 const status=gallery.querySelector('.nexa-status');
 function select(index){slides.forEach((slide,i)=>{slide.hidden=i!==index});buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));status.textContent=(index+1)+' de '+slides.length+' · '+slides[index].dataset.title;}
 buttons.forEach(button=>button.addEventListener('click',()=>select(Number(button.dataset.slide))));
 select(0);controls.hidden=false;
}
