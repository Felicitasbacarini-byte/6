document.documentElement.classList.add('js');
const revealItems=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');}})},{threshold:.14});
revealItems.forEach(item=>observer.observe(item));

const circuits=[
 {img:'./lusail.png',title:'LUSAIL',text:'Un circuito de alta velocidad donde la confianza y el control en curvas rápidas son fundamentales.'},
 {img:'./melbourne.png',title:'MELBOURNE',text:'Circuito técnico y desafiante donde la precisión y la constancia marcan la diferencia vuelta a vuelta.'},
 {img:'./shanghai.png',title:'SHANGAI',text:'Conocido como el templo de la velocidad, premia las frenadas precisas y el máximo rendimiento en recta.'}
];
let current=1;
const track=document.querySelector('.track');
function renderCircuits(){
 const order=[(current+2)%3,current,(current+1)%3];
 track.innerHTML=order.map((i,pos)=>`<article class="circuit ${pos===1?'active':'side'}"><img src="${circuits[i].img}" alt="${circuits[i].title}"><h3>${circuits[i].title}</h3><p>${circuits[i].text}</p><a>VER MÁS →</a></article>`).join('');
}
document.querySelector('.next').addEventListener('click',()=>{current=(current+1)%3;renderCircuits();});
document.querySelector('.prev').addEventListener('click',()=>{current=(current+2)%3;renderCircuits();});
renderCircuits();


window.addEventListener('load',()=>{
  document.querySelectorAll('.reveal').forEach((el,i)=>{
    el.style.transitionDelay = Math.min(i*0.045,.28)+'s';
  });
});

// Pilares interactivos: al hacer click, el elegido pasa al centro
const pillarGrid = document.querySelector('.pillar-grid');
const pillarCards = Array.from(document.querySelectorAll('.pillar-card'));
let centerPillar = 1;
function updatePillars(){
  pillarCards.forEach((card,i)=>{
    card.classList.remove('is-left','is-center','is-right');
    if(i === centerPillar){ card.classList.add('is-center'); }
    else if((i + 1) % 3 === centerPillar){ card.classList.add('is-left'); }
    else { card.classList.add('is-right'); }
  });
}
pillarCards.forEach((card,i)=>card.addEventListener('click',()=>{centerPillar=i;updatePillars();}));
updatePillars();
