const date = new Date

const fullDate = `Published ${date.getDay() === 0? 1: date.getDay()} August ${date.getFullYear()}`
console.log(fullDate)

const statusDates = document.querySelector(".status_dates .dates")
statusDates.innerHTML = fullDate