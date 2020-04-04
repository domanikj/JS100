class Movie {
  #rating = "";

  constructor(movieid, moviename, movieurl) {
    this.id = movieid,
    this.name = moviename,
    this.url = movieurl
  }

  get movieRating() {
    return this.#rating;
  }

  set movieRating(value) {
    this.#rating = value;
    return this.name;
  }
}

class Cart {
  #movies = [];

  constructor(movie) {
    this.movie = movie;
  }

  appendMovie(movie) {
    
    this.#movies.push(movie);
  }
 
  deleteMovie(movieid) {
    this.#movies.filter(mov => this.movie.id == movieid);
  }   
}

class App {
 static init() {

  }

  static clearInput() {
    inputName.value = "";
    inputImg.value = "";
    inputRating.value = "";
  }

  static createMovie(mname, mimg, mrating) {
    countId++;
  
    let movie = new Movie(mname, mimg, mrating);
  
    movie.id = countId;
   
    return movie;
  }

  
} 


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

// Form submit event
form.addEventListener('submit', (event) => {

  // Prevent defualt action
  event.preventDefault();

  let li = document.createElement('li');

 let  name       =   inputName.value;
 let  img          =   inputImg.value;
 let  inputR      =   inputRating.value;  
  
  let creMovie =   App.createMovie(name, img, inputR);
  console.log(creMovie);
  li.innerHTML =  '<h1> hello </h1> '
  
  ul.append(li)

App.clearInput();
});