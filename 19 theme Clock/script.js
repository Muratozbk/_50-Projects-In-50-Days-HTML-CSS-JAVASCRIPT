const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle');

const days = ["Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday", "Sunday"];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    // console.log(seconds, hoursForClock)

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;

    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${minute < 10 ? `0${minute}` : minute} ${ampm}`

    dateEl.innerHTML = `${days[day - 1]}, ${months[month]
        } <span class="circle">${date}</span> `
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) /
        (in_max - in_min) + out_min
}
//   loadText.style.opacity = scale(load, 0, 100, 1, 0)

setInterval(setTime, 1000)


// const html = document.querySelector('html')
// toggle.addEventListener('click', () => {
//     html.classList.toggle('dark')
//     if (html.classList.contains('dark')) toggle.innerText = 'Light mode'
//     else toggle.innerText = 'Dark mode'
// })

// function setTime() {
//     const time = new Date();
//     const hour = time.getHours() % 12;
//     const year = time.getFullYear();
//     const day = time.getDay();
//     const date = time.getDate()
//     const month = time.getMonth()
//     const minute = time.getMinutes()
//     const second = time.getSeconds()
//     console.log(day)

//     hourEl.style.transform = `translate(-50%, -100%) rotate(${360 * hour / 12}deg)`
//     minuteEl.style.transform = `translate(-50%, -100%) rotate(${360 * minute / 60}deg)`
//     secondEl.style.transform = `translate(-50%, -100%) rotate(${360 * second / 60}deg)`

//     timeEl.innerHTML = `${hour}:${minute < 10 ? '0' + minute : minute}`
//     dateEl.innerHTML = `${days[day - 1]} , ${months[month]} <span class="circle">${date}</span>`
// }
// setInterval(setTime, 1000)