// Defining text characters for the empty and full hearts for you to use later.
let selectedHeart;
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

const errorDiv = document.getElementById('modal');
errorDiv.classList.add('hidden');
const errorMessage = errorDiv.querySelector('h2');

document.addEventListener('click', function(e) {
  const heart = e.target.closest('.like-glyph'); 
  if (heart) {
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART;
      heart.classList.add('activated-heart');
   
    } else {
      heart.textContent = EMPTY_HEART;
      heart.classList.remove('activated-heart');
      
    }
  }
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
