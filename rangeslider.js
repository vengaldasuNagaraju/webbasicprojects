const range = document.getElementById('range')

range.addEventListener('input' , (e) =>{
    //hear we are getting the value 
    const value = +e.target.value
    // console.log(value)

    //we are taking the next sibling element and add to the innerhtml of label 

    const label = e.target.nextElementSibling
    
    const range_width = getComputedStyle(e.target).
    getPropertyValue('width')
    
    const label_width = getComputedStyle(label).
    getPropertyValue('width')

    // console.log(range_width , label_width)
    
    //by using this we are getting the number for width and label 
    const num_width = +range_width.substring(0 , range_width.length -2)

    //console.log(num_width)
    
    const num_label_width = +label_width.substring(0,label_width.length - 2)
    
    //console.log(num_label_width)

    const max = +e.target.max
    const min = +e.target.min


    //console.log(min , max)

    const left = value * (num_width / max) - num_label_width / 2 + scale(value , min , max ,10 ,-10)

    label.style.left = `${left}px`



    label.innerHTML = value



})

const scale = (num, inMin, inMax, outMin, outMax) => {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}