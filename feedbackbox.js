
const ratings = document.querySelectorAll('.rating')

const ratingsContainer = document.querySelector('.ratings-container')

const sendBtn = document.getElementById('send')

const panel = document.getElementById('panel')

let selectrating = 'Satisfied'

//here e.target.parentnode is ratingcontainer in this is the class name of rating exist then we add the active


ratingsContainer.addEventListener('click' , (e) =>{

    if(e.target.parentNode.classList.contains('rating')){
        removeActive()
        e.target.parentNode.classList.add('active')

        selectrating =e.target.nextElementSibling.innerHTML
    }

})

sendBtn.addEventListener('click' , (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!<strong>
    <br>
    <strong>Feedback:${selectrating} </strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive(){

    for(let i=0 ; i < ratings.length ; i++){

        ratings[i].classList.remove('active')
    
    }
}
