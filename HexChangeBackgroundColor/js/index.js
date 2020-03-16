// Init var
let body = document.getElementsByTagName('body')[0];
let btn   = document.getElementById('changeColor')  

// Add event 
btn.addEventListener('click', changeColor);

/*
* @param {String} takes one string of hexvalue
* @return  {String}  base 16 rep of number
*/
function  keepTwo(str) {
   if(str.length > 6){
    let  finalStr =  str.substr(0,6);
    return finalStr;
   }
   return str;
}

/*
* @param {Number} takes a numeric input
* @return  {String}  base 16 rep of number
*/
function toHex(num)  {
  return Math.abs(num).toString(16);
}

/*
* @param {Number} takes a numeric input
* @return  None
*/
function changeColor() {
   let  argOne    =  toHex(Math.floor(Math.random()  * 1000) + 1);
   let argTwo     =  toHex(Math.floor(Math.random()  * 1000) + 1);
   let argThree  =  toHex(Math.floor(Math.random()  * 1000) + 1);

   let finalHex =   '#'+keepTwo( `${argOne}${argTwo}${argTwo}`);
   
   body.style.backgroundColor = finalHex;
}