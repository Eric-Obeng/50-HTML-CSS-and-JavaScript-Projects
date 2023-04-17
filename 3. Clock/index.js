const hourDiv = document.querySelector('.hour')
const minuteDiv = document.querySelector('.minute')
const secondDiv = document.querySelector('.second')

function updateClock() {
    const currentDate = new Date()
    setTimeout(updateClock, 1000)
    const hour = currentDate.getHours()
    const minute = currentDate.getMinutes()
    const second = currentDate.getSeconds()
    const hourDeg = (hour / 12) * 360
    hourDiv.style.transform = `rotate(${hourDeg}deg)`
    const minuteDeg = (minute / 60) * 360
    minuteDiv.style.transform = `rotate(${minuteDeg}deg)`
    const secondDeg = (second / 60) * 360
    secondDiv.style.transform = `rotate(${secondDeg}deg)`
}

updateClock()