class Movie {
  #rating = movierating

  constructor(movieid, moviename, movieurl) {
    this.id = movieid,
    this.name = moviename,
    this.url = movieurl,
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
  init() {

  }

}

let form = document.getElementById('myform');

