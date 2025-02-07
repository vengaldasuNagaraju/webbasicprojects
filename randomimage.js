

const container = document.querySelector('.container')

const unsplashurl = 'https://source.unsplash.com/random/'

const rows =10

for(let i=0 ; i < rows * 3 ; i++ ){
    const img = document.createElement('img')
    img.src = `${unsplashurl}${getRandomsize()} `
    container.appendChild(img)
}

//console.log(getRandomnumber())

//console.log(getRandomsize())

function getRandomsize(){
    return `${getRandomnumber()}x${getRandomnumber()}`
}

function getRandomnumber() {
    return Math.floor(Math.random() * 10) + 300
}