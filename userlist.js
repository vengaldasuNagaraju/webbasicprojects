
const result = document.getElementById('result')

const filter = document.getElementById('filter')

const listItems = []
getData()

filter.addEventListener('input' , (e) => filterData(e.target.value))

async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50')
    
    const {results} = await res.json()

    //i get total results 
    //console.log(results)
   
    //clear result 

    result.innerHTML = ''

    //finding the indivisual results

    results.forEach( user =>{
        const li = document.createElement('li')
        listItems.push(li)
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city} , ${user.location.country}
                    </p>
                </div>
                `
                result.appendChild(li)
    })
}

function filterData(searchterm){

    //initally we added the all the items into the itemslist and we
    //  are searching the element we are searching on the browser
    //  which exist on the stored listitems if exist we get the result other wise we dont get
    
    listItems.forEach(item =>{
        if(item.innerText.toLowerCase().includes(searchterm.toLowerCase())){
            item.classList.remove('hide')
        }
        else{
            item.classList.add('hide')
        }
    })
}
