const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const names = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs =document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(() => {
    getData()
}, 1000);

function getData(){
    header.innerHTML = `<img src="image30.jpg" alt="">`
    title.innerHTML =`Lorem ipsum dolor sit amet.`
    excerpt.innerHTML =`Loribus nihil is corporis pariatur voluptatibus,
    earum cupiditate aut laudantium!`
    profile_img.innerHTML =`<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
    names.innerHTML = `John Doe`
    date.innerHTML =`oct 09 2023`  
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}
