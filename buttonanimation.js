const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
    button.addEventListener('click',function (e){
        //here we ate taking the x and y coordinates 
        //e.clientX and e.clientY give the X and Y coordinates of the mouse pointer relative to the viewport 
        const x = e.clientX
        const y = e.clientY

        //e position of the element relative to its offset parent
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // mouse position inside the button.
        //xInside tells how far from the left edge of the button the user clicked.
        //yInside tells how far from the top edge of the button the user clicked.

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
        
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left  = xInside + 'px'
        
        this.appendChild(circle)

        setTimeout(() => circle.remove() , 500)
    })
})