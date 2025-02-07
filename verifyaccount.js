
const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code , idx) => {
    code.addEventListener('keydown' , (e) =>{
        
        //we take the values from 0 to 9 and use setimeout because whrn we increase the idx it was starting from the second one to overcome that we settimout to certain time to stay over then if we enter he backspace then idx will decrease 
        // and in idf condition we are setting the idx values to space because when are getting back we are seeting that value to null 
         
        if(e.key >= 0 && e.key <= 9){
            codes[idx].value = ''
            setTimeout(() => {
                codes[idx + 1].focus()
            }, 10);
        }
        else if(e.key === 'Backspace'){
            setTimeout(() => {
                codes[idx-1].focus()
            }, 10);
        }
    })    
});