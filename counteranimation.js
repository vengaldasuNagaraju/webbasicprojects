const nums = document.querySelectorAll('.nums span')

const counter = document.querySelector('.counter')

const finalMessage = document.querySelector('.final')

const replay = document.querySelector('#replay')

runAnimation()

function resetDom(){
    //here the hide and show will be removed and then lop through the nums and add the classlist to space after lopping then for first element he will add the in then it will  call the animation method and it will go 
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach(num =>{
        num.classList.value = ''
    })
    
    nums[0].classList.add('in')
}

function runAnimation(){
    nums.forEach((num , idx) =>{
        //here num we will get the span element and idx will represent the index of a value 

        const nextToLast = nums.length - 1

        //animatedend is an evenet in javascript 
        //we use get the name of animationname use the animationName as default
        num.addEventListener('animationend' , (e) =>{
            if(e.animationName === 'goIn' && idx !== nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
                //if animationname is goin and also idx not to last element then we are then removw in and add out
            }
            else if(e.animationName === 'goOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
                //here we check for the nextsibiling if next sibling  exist we add the in class  
            }
            else{
                //we are adding the hide and show classes 
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })

    })
}

replay.addEventListener('click' , ()=>{
    resetDom()
    runAnimation()
} )