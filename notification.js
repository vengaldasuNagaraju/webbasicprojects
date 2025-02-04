const button = document.getElementById('button')

const toasts = document.getElementById('toasts')

const messages = ['message one' , 'Message Two' ,'Message Three' ,'Message Four']

const types =['info' , 'success' , 'error']

button.addEventListener('click' ,()=> createNotification())

function createNotification(message = null ,type = null){
    //here we are creating a div 
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type :getRandomType())
    //this is for getting randome message 
    notif.innerText = message ? message : getRandomMessage() 
    //we are adding the data into the toasts container
    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove()
    }, 3000);
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType(){
    return types[Math.floor(Math.random() * types.length)]
}