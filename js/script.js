const btn = document.querySelector('.btn');
const wheel = document.querySelector('.box .wheel');
const img = document.querySelector('.box .img');
let deg = Math.ceil(Math.random()*5000);
var audio = document.querySelector('.myAudio');


btn.onclick = () =>{
    wheel.style.transform = 'rotate('+ deg +'deg)';
    wheel.style.transition = '10s';
    img.style.opacity = '1';
    img.style.height = '30%';
    img.style.transition = "3s ease";
    audio.play();
    deg += Math.ceil(Math.random()*5000);
}

img.style.opacity = '0';