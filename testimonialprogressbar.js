const testimonial_container = document.querySelector('.testimonial-container')

const testimonial = document.querySelector('.testimonial')

const userImage = document.querySelector('.user-image')

const username = document.querySelector('.username')

const role = document.querySelector('.role')

const testimonialsarray =[
    {
        name:'sasha Ho',
        position:'Accountant',
        photo:'https:randomuser.me/api/portraits/men/97.jpg',
        text:'this guy is top notch designer amd frontr end developer He communicates well, works fast and produces quality work. we have been luucky to work with him!',
    },
    {
        name:'Emma Williams',
        position:'Marketing Manager',
        photo:'https:randomuser.me/api/portraits/women/46.jpg',
        text:'A highly skilled developer with an eye for design! The work was delivered quickly and exceeded expectations. Highly recommend!',
    },
    {
        name: 'Liam Carter',
        position: 'Software Engineer',
        photo: 'https:randomuser.me/api/portraits/men/32.jpg',
        text: 'Incredible attention to detail and a deep understanding of front-end development. Working together has been an absolute pleasure!',
    },
    {
        name: 'Sophia Brown',
        position: 'Project Manager',
        photo: 'https:randomuser.me/api/portraits/women/28.jpg',
        text: 'A true professional! Communication was seamless, and the quality of work was outstanding. Looking forward to future collaborations!',
    },
    {
        name: 'Oliver Green',
        position: 'UI/UX Designer',
        photo: 'https:randomuser.me/api/portraits/men/56.jpg',
        text: 'One of the best developers I have worked with. Delivers on time, solves problems efficiently, and has a great sense of design!',
    },
    {
        name: 'Ava Johnson',
        position: 'Entrepreneur',
        photo: 'https:randomuser.me/api/portraits/women/65.jpg',
        text: 'Top-notch service! Creative, reliable, and always delivers exceptional results. Would definitely work together again!',
    },
]

let idx = 2

function updateTestimonial(){
    const {name , position , photo , text } = testimonialsarray[idx]
    testimonial.innerHTML =text
    userImage.src =photo
    username.innerHTML =name
    role.innerHTML =position

    idx++
    if(idx > testimonialsarray.length - 1){
        idx = 0
    }
}
setInterval(() => {
    updateTestimonial()
}, 10000);