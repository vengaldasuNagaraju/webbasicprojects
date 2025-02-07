
const fill = document.querySelector('.fill')

const empties = document.querySelectorAll('.empty')


fill.addEventListener('dragstart' , dragStart)

fill.addEventListener('dragend' ,dragEnd)


//intially we have the image in the fill as class name in div when we are hover to something we are adding the hovered as a class name and when we drop then the fill class div element will move to the inside of empty as class name div  


for(const empty of empties){
    empty.addEventListener('dragover' ,dragOver)
    empty.addEventListener('dragenter' ,dragEnter)
    empty.addEventListener('dragleave' ,dragLeave)
    empty.addEventListener('drop' ,dragDrop)
}

function dragStart(){
    this.className += ' hold'
    setTimeout(() => this.className ='invisible' , 0);
   
}

function dragEnd(){
    this.className = 'fill'
}


function dragOver(e){
    e.preventDefault()
    this.className+= ' hovered'
}


function dragEnter(e){
    e.preventDefault()
}


function dragLeave(){
    this.className ='empty'
}


function dragDrop(){
    this.className = 'empty'
    this.append(fill)
}