class Movie {
  #rating = "";

  constructor(moviename, movieurl) {
    this.name = moviename,
    this.url = movieurl
  }

  get movieRating() {
    return this.#rating;
  }

  set movieRating(value) {
    this.#rating = value;
    return this.#rating;
  }

  clog() {
    console.log(this.name    + this.id)
  }
}

//##########################

class Cart {
  #movies = [];

  appendMovie(movie) {
    this.#movies.push(movie);
  }
 
  deleteMovie(movieid) {
    this.#movies.filter(mov => this.movieid.id != movieid);
  }   

  get movieElem() {
     return this.#movies;
  }

  
}

//############################
class App {
 static initCart(movie) {
    
  }

  static clearInput() {
    inputName.value = "";
    inputImg.value = "";
    inputRating.value = "";
  }

  static createMovie(mname, mimg,mrating) {
    countId++;
  
    let movie = new Movie(mname, mimg);
  
    movie.id = countId;
    movie.movieRating = mrating;
   
    return movie;
  }  
} 
  //###########################

// Init var to dom element nodes
let form = document.getElementById('myform');
let appDiv = document.getElementById('app');
let inputName = document.getElementById('name');
let inputImg     = document.getElementById('img');
let inputRating = document.getElementById('rating');

let countId = 1;
let ul = document.createElement('ul');

// Set attribute for ul
ul.setAttribute("id", "movie-list")
ul.setAttribute('class','visible');

// Appending ul 
appDiv.append(ul);

// init obj
let _cart = new Cart()

// Form submit event
form.addEventListener('submit', (event) => {

  // Prevent defualt action
  event.preventDefault();

 let li = document.createElement('li');
 let  name       =   inputName.value;
 let  img          =   inputImg.value;
 let  inputR      =   inputRating.value;  
  
let creMovie =   App.createMovie(name, img, inputR);
 
 _cart.appendMovie(creMovie);
 

 for (let i = 0; i < _cart.movieElem.length; i++) {
     
  li.innerHTML = ` <div class="card" style="width: 50%; margin-left: 300px;" >
  <h1> Title </h1>
  <h3>${_cart.movieElem[i].name} </h3>
  <h1> Url </h1>
 <h3>  ${_cart.movieElem[i].url} <h3>
  <h1> Rating </h1>
  <h3>  ${_cart.movieElem[i].movieRating} <h3>
  <button class="delete"> Delete </button>

  </div>` 
ul.append(li);
   }
 App.clearInput();

let deletebtn = document.querySelectorAll('.delete');
for (let index = 0; index < deletebtn.length; index++) {
  // deletebtn[index].addEventListener('click', _cart.deleteMovie(_cart.movieElem.id).bind(_cart)    );
  deletebtn[index].addEventListener('click', _cart.movieElem.clog.bind);

}


})