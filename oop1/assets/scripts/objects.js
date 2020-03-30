let aBtn = document.getElementById("add-movie-btn");
let sBtn = document.getElementById("search-btn");
let movieArr = []
let ul = document.getElementById('movie-list');

aBtn.addEventListener('click', () => {
  let title = document.getElementById('title').value;
  let extraInput = document.getElementById('extra-name').value;
  let extravalue = document.getElementById('extra-value').value;

  ul.classList.add('visible');
  let  movie = {
    title:  "",
    extraInput:   "ddd"
  }
  movie.title = title;


  movieArr.push(movie)
 // console.log(movie.keys())
  showList(movieArr)
});

function showList(arr) {
let li = document.createElement('li');

arr.forEach((element,index, array) => {
  li.innerHTML = `<h5> ${element.title}</h5> `
  for (let i in )
  ul.append(li)
});
  
}