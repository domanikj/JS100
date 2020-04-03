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

  appendMovie() {
    this.#movies.push(this.movie);
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
}

// Init var to dom element nodes
let form = document.getElementById('myform');
let appDiv = document.getElementById('app');
let inputName = document.getElementById('name');
let inputImg     = document.getElementById('img');
let inputRating = document.getElementById('rating');

let ul = document.createElement('ul');

// Set attribute for ul
ul.setAttribute("id", "movie-list")
ul.setAttribute('class','visible');

// Appending ul 
appDiv.append(ul);

// init obj
let app = new App;

// Form submit event
form.addEventListener('submit', (event) => {

  // Prevent defualt action
  event.preventDefault();

  let li = document.createElement('li')
   console.log("prev")

App.clearInput();
});