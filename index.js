//Scores

let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")

//set score count
let scoreHomeCount = 0
let scoreGuestCount = 0


//Timer

let startBtn = document.getElementById("start")
let pauseBtn = document.getElementById("pause")

let display = document.getElementById("timer")

startBtn.addEventListener('click', function start(){
    console.log('start')
    let minute = 15
    let sec = 59

        setInterval(function time() {
            document.getElementById("timer").innerHTML = `${minute}:${sec}`;
            sec--;
            if (sec == 00) {
            minute --;
            sec = 60;
            if (minute == 0) {
                minute = 5;
            }
            }
        }, 1000);   

})

pauseBtn.addEventListener('click', function pause(){
    console.log('pause')
})




//Home 

let homeOneBtn = document.getElementById("home-addOne")
let homeTwoBtn = document.getElementById("home-addTwo")
let homeThreeBtn = document.getElementById("home-addThree")

homeOneBtn.addEventListener('click', function homeOne(){
    console.log('home + one')
    scoreHomeCount += 1
    homeScore.textContent = scoreHomeCount
    checkWinningTeam ()
})

homeTwoBtn.addEventListener('click', function homeTwo(){
    console.log('home + two')
    scoreHomeCount += 2
    homeScore.textContent = scoreHomeCount
    checkWinningTeam ()
})

homeThreeBtn.addEventListener('click', function homeThree(){
    console.log('home + three')
    scoreHomeCount += 3
    homeScore.textContent = scoreHomeCount
    checkWinningTeam ()
})




//Guest

let guestOneBtn = document.getElementById("guest-addOne")
let guestTwoBtn = document.getElementById("guest-addTwo")
let guestThreeBtn = document.getElementById("guest-addThree")


guestOneBtn.addEventListener('click', function guestOne(){
    console.log('guest + one')
    scoreGuestCount += 1
    guestScore.textContent = scoreGuestCount
    checkWinningTeam ()
})

guestTwoBtn.addEventListener('click', function guestTwo(){
    console.log('guest + two')
    scoreGuestCount += 2
    guestScore.textContent = scoreGuestCount
    checkWinningTeam ()
})

guestThreeBtn.addEventListener('click', function guestThree(){
    console.log('guest + three')
    scoreGuestCount += 3
    guestScore.textContent = scoreGuestCount
    checkWinningTeam ()
})


//Reset
let resetBtn = document.getElementById("reset")

resetBtn.addEventListener('click', function reset(){
    console.log('reset')
    scoreHomeCount = 0
    scoreGuestCount = 0
    homeScore.textContent = scoreHomeCount
    guestScore.textContent = scoreGuestCount
})

//handle whos winning

function checkWinningTeam (){
    if(scoreHomeCount > scoreGuestCount){
        homeScore.style.border = "2px solid green"
        guestScore.style.border = "2px solid red"
    } else if(scoreHomeCount < scoreGuestCount) {
        guestScore.style.border = "2px solid green"
        homeScore.style.border = "2px solid red"
    } else {
        guestScore.style.border = "2px solid blue"
        homeScore.style.border = "2px solid blue"
    }
}

