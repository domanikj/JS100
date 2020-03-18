(function() {

  // Added event for click to subtract one
  document.querySelector('.prevBtn').addEventListener('click', () => {
    let count = document.getElementById('counter');
  
      count.textContent = parseInt(count.textContent) - 1;
  });
  
    // Added event for click to add  one
  document.querySelector('.nextBtn').addEventListener('click', () => {
    let count = document.getElementById('counter');
  
    count.textContent = parseInt(count.textContent) + 1;
  
  });
})
