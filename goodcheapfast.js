const toggles = document.querySelectorAll('.toggle')

const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(toggle => toggle.addEventListener('change',
    (e) => doTheTrick(e.target)))

function doTheTrick(theclickedone){
    if(good.checked && cheap.checked && fast.checked){
        if(good === theclickedone){
            fast.checked =false
        }

        if(cheap === theclickedone){
            good.checked = false
        }

        if(fast === theclickedone){
            cheap.checked =false
        }
    }
}