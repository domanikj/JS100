// Function to run as soon as  stacks reaches it 
(function (){{ 

  // Quotes obj
  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
  ];

// Event
refreshQuote.addEventListener('click', newQuote);

/*
* Function to refresh card with new author and quote
* param {None}
* return {None}
*/
function newQuote() {
  let rand = Math.floor((Math.random() * quotes.length )) ;
  let changeAuthor  = document.getElementById('author');
  let changeQuote   = document.getElementsByClassName('card-text')[0];
  let  refreshQuote   = document.getElementsByClassName('card-link')[0];


  changeAuthor.textContent = quotes[rand].author;
  changeQuote.textContent= quotes[rand].quote;
}
}})();
