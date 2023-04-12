const dayDiv = document.getElementById("day")
const hourDiv = document.getElementById("hour")
const minuteDiv = document.getElementById("minutes")
const secondDiv = document.getElementById("seconds")


const newYearTime = new Date("Jan 1, 2024 00:00:00:00").getTime()

updateCountdown()

function updateCountdown() {
    const now = new Date().getTime()
    const gap = newYearTime - now
    
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const d = Math.floor(gap / day)
    const h = Math.floor((gap % day) / hour)
    const m = Math.floor((gap % hour) / minute)
    const s = Math.floor((gap % minute) / second)
    

    dayDiv.innerText = d;
    hourDiv.innerText = h
    minuteDiv.innerText = m
    secondDiv.innerText = s
    

    setTimeout(updateCountdown, 1000)
}
