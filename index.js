// Remember to import the data and Dog class!
import dogs from '/data.js'
import Dog from '/Dog.js'

let dogArray = [0, 1, 2]
let getDogCard = dogArray[0]
let doggoGet = new Dog(dogs[getDogCard])

const like = document.getElementById('like-btn')
const reject = document.getElementById('reject-btn')


let profile = document.getElementById('profile')



doggoGet.hasBeenSwiped = true


function getNewProfile() {
     doggoGet = new Dog(dogs[dogArray.shift()])
     doggoGet.hasBeenSwiped = true
     render()

        
}

reject.addEventListener("click", function() {
    getNewProfile()
    = true
    document.getElementById('badge-sign').innerHTML = 
        `<div class="badge" id='badge-sign'>
         <img class='badges' src='images/badge-like.png'>   
         </div>
        
        `
});

like.addEventListener("click", function() {
    getNewProfile()
});

function render() {
   
    profile.innerHTML = doggoGet.getDogHtml() 
}






