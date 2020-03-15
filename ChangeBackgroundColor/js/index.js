// Grad body & button element
let bdy = document.getElementsByTagName('body')[0];
let btn = document.getElementById('onChange')

// Set event on button
btn.addEventListener('click', changeColor);

/*
* To set random background color
* @return None
*/
function changeColor() {
 let r = Math.floor(Math.random() * 255 + 1);
 let g = Math.floor(Math.random() * 255 + 1);
 let b = Math.floor(Math.random() * 255 + 1); 

 // Set random background color 
 bdy.style.backgroundColor = `rgb(${r.toString()},${g.toString()},${b.toString()})`;
}