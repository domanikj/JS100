// Grad body & button element
let bdy = document.getElementsByTagName('body')[0];


let btn = document.getElementById('onChange')

btn.addEventListener('click', changeColor);

function changeColor() {
 let r = Math.floor(Math.random() * 255 + 1);
 let g = Math.floor(Math.random() * 255 + 1);
 let b = Math.floor(Math.random() * 255 + 1); 

 bdy.style.backgroundColor = `rgb(${r.toString()},${g.toString()},${b.toString()})`;
}