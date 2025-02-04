const smallcups = document.querySelectorAll('.cup-small')

const liters = document.getElementById('liters')

const remained = document.getElementById('remained')

const percentage = document.getElementById('percentage')

updateBigcup()


smallcups.forEach((cup , idx)=>{
    cup.addEventListener('click' ,()=> highlighCups(idx))
})

function highlighCups(idx){
    if(smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    smallcups.forEach((cup,idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full')
        }
        else{
            cup.classList.remove('full')
        }
    })
    updateBigcup()
}

function updateBigcup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // console.log(fullCups)
    const totalCups = smallcups.length //8

    // console.log(totalCups)
    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }
    else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    if(fullCups === totalCups){
        remained.style.visibility ='hidden'
        remained.style.height = 0
    }
    else{
         remained.style.visibility ='visible'
         liters.innerText = `${2-(250 * fullCups / 1000)}L`
    }
}