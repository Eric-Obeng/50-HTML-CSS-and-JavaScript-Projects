const hourSpan = document.getElementById("hour")
const minuteSpan = document.getElementById("minutes")
const secondsSpan = document.getElementById("seconds")
const ampmSpan = document.getElementById("ampm")

function updateClock () {
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()
    let ampm = 'AM'

    if (hour > 12) {
        hour = hour - 12
        ampm = 'PM'
    }

    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second


    hourSpan.innerText = hour
    minuteSpan.innerText = minute
    secondsSpan.innerText = second
    ampmSpan.innerText = ampm
    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock()
