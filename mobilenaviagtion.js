const contents = document.querySelectorAll('.content')

const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item , idx) => {
item.addEventListener('click',()=>{
    hideAllContents()
    hideAllItems()

    //we are adding the show and active classes 

    item.classList.add('active')
    //accessing the each element from the contents and adding the show class
    contents[idx].classList.add('show')


    })    
});

//here we are removing the classes show and active 

function hideAllContents(){
    contents.forEach(content =>content.classList.remove('show'))
}

function hideAllItems(){
    listItems.forEach(item => item.classList.remove('active'))
}



