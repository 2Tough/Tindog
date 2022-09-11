import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

const badge = document.getElementById('badge')


document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)


render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDogIndex+=1
    if(currentDogIndex == 3) {
        document.getElementById('card').innerHTML = `<div class='no-profile-text'>No more profiles. Try again later.</div>`
    } else {
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
    }
    
}

function yes() {
    currentDog.setMatchStatus(true)
    setTimeout(getNewDog, 500)
    badge.innerHTML = `<div>
                       <img class='badge-yes' src='images/badge-like.png'>
                       </div>`
    setTimeout(removeBadge, 500)
    
}

function no() {
    currentDog.setMatchStatus(false)
    setTimeout(getNewDog, 500)
    badge.innerHTML = `<div>
                       <img class='badge-nope' src='images/badge-nope.png'>
                       </div>`
    setTimeout(removeBadge, 500)
}

function removeBadge() {
    badge.innerHTML = ``
}




