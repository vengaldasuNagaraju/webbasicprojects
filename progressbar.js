const progress = document.getElementById('progress');
const prev =document.getElementById('prev');
const next=document.getElementById('next');
const circles=document.querySelectorAll('.circle');

let currentActive =1;
next.addEventListener('click' , ()=>{
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    // console.log(currentActive);
   update()
})

prev.addEventListener('click' , ()=>{
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    // console.log(currentActive);
    update()
})

function update(){
    circles.forEach((circle , idx)=>{
        // here if index is less than the curentactive then it will go to active state the index is start at the 0 position
        
        if(idx < currentActive){
            circle.classList.add('active');
            console.log("index value "+idx);
            console.log(currentActive);
        }
        else{
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active')
    
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1){
        prev.disabled = true;

    }
    else if(currentActive === circles.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}