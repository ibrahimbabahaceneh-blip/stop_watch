
const display = document.getElementById("display")
let timer = null
let startTime = 0
let currentTime = 0
let time = 0
let isRunning = false

console.log(now)
function start(){
    if(!isRunning){
        startTime = Date.now() - currentTime
        timer = setInterval(update, 10)
        isRunning = true
    }
}
function stop(){
    if(isRunning){
    clearInterval(timer)
    currentTime = Date.now() - startTime
    isRunning = false
    }
}
function reset(){
    clearInterval(timer)
    timer = null
    startTime = 0
    currentTime = 0
    time = 0
    isRunning = false
    display.textContent = "00:00:00:00"
}
function update(){
    currentTime = Date.now()
    time = currentTime - startTime
    let hours = Math.floor(time/(1000 * 60 * 60))
    let minutes = Math.floor( (time / (1000 * 60)) % 60)
    let secondes = Math.floor( (time / 1000) % 60)
    let millisecondes = Math.floor( time % 100)

    hours = String(hours).padStart(2, 0)
    minutes = String(minutes).padStart(2, 0)
    secondes = String(secondes).padStart(2, 0)
    millisecondes = String(millisecondes).padStart(2, 0)

    display.textContent = `${hours}:${minutes}:${secondes}:${millisecondes}`
}