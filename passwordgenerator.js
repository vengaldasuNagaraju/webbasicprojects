const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const randomFunc ={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
}


generateEl.addEventListener('click' , () =>{
    //
    const length = +lengthEl.value
    const haslower = lowercaseEl.checked
    const hasupper = uppercaseEl.checked
    const hasnumber = numbersEl.checked
    const hassymbol = symbolsEl.checked

    resultEl.innerHTML = generatePassword(haslower , hasupper , hasnumber , hassymbol , length)

})


function generatePassword(lower ,upper , number ,symbol ,length){
let generatedPassword =''
//typecount will  return the number of types included 
const typesCount = lower + upper + number + symbol 

//the below one only filter the true result one it doesnt give the false one 

const typesArr =[{lower} , {upper} , {number} ,{symbol}].
filter(item => Object.values(item)[0])

if(typesCount === 0){
    return ''
}

for(let i=0 ; i<length ; i+=typesCount){
    typesArr.forEach(type =>{
        //indide tyhe funcname the lower and upper willl be exist by using the object.keys function 
        const funcName = Object.keys(type)[0]
        //console.log(funcName)
        generatedPassword +=randomFunc[funcName]()
    })

}

const finalpassword = generatedPassword.slice(0,length)

return finalpassword


// console.log(typesCount)
// console.log(typesArr)
 
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}


function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}











// console.log(getRandomSymbol())

// console.log(getRandomNumber())

// console.log(getRandomUpper())

// console.log(getRandomLower())
