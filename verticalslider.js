const sliderContainer = document.querySelector('.slider-container')
const sliderRight = document.querySelector('.right-slide')
const sliderLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slideslength = sliderRight.querySelectorAll('div').length

console.log(slideslength)

let activeSlideIndex = 0 

// making length to decrease 1

sliderLeft.style.top =`-${(slideslength - 1) * 100}vh`

upButton.addEventListener('click' ,()=> changeSlide('up'))
downButton.addEventListener('click',()=> changeSlide('down'))

const changeSlide = (direction)=>{
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slideslength -1){
            activeSlideIndex=0
        }
    }
    else if( direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex=slideslength - 1
        }
    }
    sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}