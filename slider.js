const body = document.body

const slides = document.querySelectorAll('.slide')

const leftBtn = document.getElementById('left')

const rightBtn = document.getElementById('right')

let activeSlide = 0;


rightBtn.addEventListener('click',()=>{
    activeSlide++
//if active slide is more than the size of the element then we set it to the first element 

    if(activeSlide > slides.length - 1){
        activeSlide =0
    }
    setBgBody()
    setActivieSlide()
})


leftBtn.addEventListener('click',()=>{
    activeSlide--
    
    //if active slide size is less than zero  of the element then we set it to the last element 
    
    if(activeSlide < 0){
        activeSlide =slides.length - 1
    }
    setBgBody()
    setActivieSlide()
})






setBgBody()



function setBgBody(){
    // here we setting the active slide image as the background image to body below code 

    body.style.backgroundImage = slides[activeSlide].style.backgroundImage

}

function setActivieSlide(){
    slides.forEach((slide) =>{
        slide.classList.remove('active')
    
    slides[activeSlide].classList.add('active')
    })
}