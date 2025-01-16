// Defining text characters for the empty and full hearts for you to use later.
let selectedHeart;

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const like = document.getElementsByClassName('like')
const likeGlyph = document.getElementsByClassName('like-glyph')

const errorDiv = document.getElementById('modal')
  errorDiv.className = 'hidden'
const errorMessage = errorDiv.querySelector('h2')



// Your JavaScript code goes here!
document.addEventListener('click', function (e) {
  selectedHeart = e.target
const selectedHeartTextContent= selectedHeart.textContent
if(selectedHeartTextContent === EMPTY_HEART) {
  selectedHeart.textContent = FULL_HEART
  selectedHeart.className = 'activated-heart'
} else {
  selectedHeart.textContent = EMPTY_HEART
  selectedHeart.className = ''
}
})



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
