
const resetBtn = document.getElementById('reset')
const playBtn = document.getElementById('play')
const timerEl = document.getElementById('timer')
const root = document.querySelector(':root')

const totalSeconds = 60;
let playing = false ;
let currentSeconds= totalSeconds;
timerEl.innerText = formatTime(totalSeconds);

//run the run() function every second

const timeInterval = setInterval(run , 1000);


//event listners here we are adding the play class and color to it
//also selecting the i and giving the classes for play and pauses based on click
playBtn.addEventListener('click' , ()=>{
    playing = !playing
    playBtn.classList.toggle('play')
    playBtn.classList.toggle('bg-green-500')

    const playIcon = playBtn.querySelector('i')
    playIcon.classList.toggle('fa-play')
    playIcon.classList.toggle('fa-pause')
})

resetBtn.addEventListener('click' , resetAll)

/*this function to decrease the time by seconds and if time is less than the 0 then 
we again set to 1 min and we are adding it to the timer and 
we are changing the css property by using javascript by setproperty below  */
function run(){
    if(playing){
        currentSeconds -= 1;
        if(currentSeconds <= 0){
            clearInterval(timeInterval)
            resetAll()
        }
        timerEl.innerText = formatTime(currentSeconds);
        root.style.setProperty('--degrees' , calcDeg())
    }

}

//to caluculate the degress 

function calcDeg(){
    return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}


//reset timer function we are making the playing to pause 
//we are removing the play button  and removing the backgroound color of greean and also selecting the i tag and removing the pause class 
//for reset to default mode we add the play icon  then we are making the totalseconds to the current seconds 
// we are passing the that seconds to the timer and we are chnaging the css degrees to 0 to inital one 

function resetAll(){
    playing = false;

    playBtn.classList.remove('play')
    playBtn.classList.remove('bg-green-500')
    const playIcon = playBtn.querySelector('i')
    playIcon.classList.remove('fa-pause')
    playIcon.classList.add('fa-play')
    currentSeconds =totalSeconds;
    timerEl.innerText = formatTime(totalSeconds);
    root.style.setProperty('--degrees' , '0deg')
}


//format time
//we use the padstart to display the time as we need to display
function formatTime(seconds){
    const minutes = Math.floor(seconds / 60) ;
    const newseconds = seconds % 60;

    return `${minutes.toString().padStart(2,'0')}:${newseconds
        .toString().padStart(2,'0')}`
}

