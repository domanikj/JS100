(function() {

 // Grabbing 
 let form = document.getElementsByTagName('form')[0];
 let inputSearch = document.getElementById('search-item')

  let filterArray = [   '../img/cake-1.jpeg',  '../img/cake-2.jpeg',  '../img/cake-3.jpeg',
  '../img/cupcake-1.jpeg','../img/cupcake-2.jpeg','../img/cupcake-3.jpeg',
  '../img/doughnut-1.jpeg', '../img/doughnut-2.jpeg','../img/doughnut-3.jpeg'
  
  ]

  inputSearch.addEventListener('keypress', (event) => {g
    filterArray.filter(elem => elem.includes(event.code));
     console.log(filterArray.length);


  })


form.addEventListener('submit', (event) => {
  event.preventDefault();


  
 // let dataFilter = document.querySelectorAll('.filter-btn')

 // 
  
  console.log("onloaddd");
  });







})();
