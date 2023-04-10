const dayDiv = document.getElementById("day")
const hourDiv = document.getElementById("hour")
const minuteDiv = document.getElementById("minutes")
const secondDiv = document.getElementById("seconds")
const millisecondDiv = document.getElementById("milliseconds")

const newYearDate = new Date("Jan 1, 2024 00:00:00:00").getTime()

updateCountdown()

function updateCountdown() {
    const now = new Date().getTime()
    console.log(now)
}