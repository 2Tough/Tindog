// Create the Dog class here

class Dog {
    constructor(data) {
            Object.assign(this, data)
    }
    
    getDogHtml() {
       const { name, avatar, age, bio } = this
       const badge = getLikeOrNope()
        return `
                <div id="profile" class="main-body">
                    <div class="text">${bio}</div>
                    <div class="teddy">${name}, ${age}</div>
                    <div class="profile-pic">
                    <img class="profile-image" src="${avatar}">
                </div>`
    }
    
    getLikeOrNope() {
        if(this.hasBeenSwiped && this.hasBeenLiked == false) {
            return ''
        } else if(this.hasBeenLiked) {
            return `<div class="badge" id='badge-sign'>
                     <img class='badges' src='images/badge-like.png'>   
                    </div>`
        }{}
            return `<div class="badge" id='badge-sign'>
                     <img class='badges' src='images/badge-nope.png'>   
                    </div>`
        
    }
    

}


export default Dog