const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')


jokeBtn.addEventListener('click' , generateJoke)


generateJoke()

// using the async and await code 

async function generateJoke(){
    const config = {
        headers : {
            'Accept': 'application/json'
        }
    }
    const res= await fetch('https://icanhazdadjoke.com' , config)
    const data = await res.json();
    //here the joke keyword from responce json data inside a key name is joke 
    jokeEl.innerHTML =data.joke
}


//using .then code

// function generateJoke(){
//     const config = {
//         headers : {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com' , config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     });
// }