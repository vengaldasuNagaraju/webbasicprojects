const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup' , (e) =>{
    createTags(e.target.value)
    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value ='';
        }, 10);

        randomSelect();
    }

})

function createTags(input){
    const tags =input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML =''

    tags.forEach(tag =>{
        //here i am creating the each span element 
        const tagEl = document.createElement('span')
        //This is a property of DOM elements that provides methods to manipulate the element's CSS classes.
        // adds the class 'tag' to the element
        tagEl.classList.add('tag')
        //This is a property that sets or gets the visible text content of an element.
        //his should be a variable containing a string. which is nothing but the loop 
        tagEl.innerText =tag

        tagsEl.appendChild(tagEl)
    })
}


function randomSelect(){
    const times =30
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag);
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100);
    }, 100);
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag =pickRandomTag()
            highlightTag(randomTag);
        }, 100);
    }, times*100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight');

}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}