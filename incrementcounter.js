const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    //we are defalutly adding the numbrs to the class by using the innertext
    counter.innerText ='0';

    //in functon by using the + operator we converting the string type to number type
    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        //here we are  taking the starting default value 

        const increment = target / 200

        if(c < target){
            counter.innerText =`${Math.ceil(c + increment)}` 
            setTimeout(updateCounter, 1);
        }
        else{
            counter.innerText =target
        }
    }
    updateCounter()
})