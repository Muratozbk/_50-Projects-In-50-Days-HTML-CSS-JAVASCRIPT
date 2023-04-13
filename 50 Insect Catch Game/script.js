const screens = document.querySelectorAll('.screen')
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn')
const startBtn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')

// let seconds = 0;
// let score = 0;
// let selected_insect = {}

// startBtn.addEventListener('click', () => screens[0].classList.add('up'))
// // screens[0].classList.add('up')

// chooseInsectBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const img = btn.querySelector('img');
//         const src = img.getAttribute('src')
//         const alt = img.getAttribute('alt');
//         console.log(src, alt)

//         selected_insect = { src, alt }
//         console.log(selected_insect)

//         screens[1].classList.add('up')

//         setTimeout(createInsect, 1000)
//         startGame()
//     })
// })

// function startGame() {
//     setInterval(increaseTime, 1000)
// }
// //Timer
// function increaseTime() {
//     let m = Math.floor(seconds / 60);
//     let s = seconds % 60;
//     m = m < 10 ? `0${m}` : m;
//     s = s < 10 ? `0${s}` : s;
//     timeEl.innerHTML = `Time: ${m}:${s}`
//     seconds++
// }

// // Create Insect
// function createInsect() {
//     const insect = document.createElement('div')
//     insect.classList.add('insect');
//     const { x, y } = getRandomLocation()
//     insect.style.top = `${y}px`;
//     insect.style.left = `${x}px`;

//     insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

//     insect.addEventListener('click', catchInsect)
//     game_container.appendChild(insect)
// }
// //Insect Location
// function getRandomLocation() {
//     const width = window.innerWidth
//     const height = window.innerHeight;
//     const x = Math.random() * (width - 200) + 100
//     const y = Math.random() * (height - 200) + 100
//     return { x, y }
// }
// //Catch Insect and Add Insect
// function catchInsect() {
//     increaseScore()
//     this.classList.add('caught')
//     setTimeout(() => this.remove(), 1000)

//     addInsects() // Add new Insects
// }

// function addInsects() {
//     setTimeout(createInsect, 1000)
//     setTimeout(createInsect, 1500)
// }

// function increaseScore() {
//     score++
//     if (score > 19) {
//         message.classList.add('visible') //Annoying Message
//     }
//     scoreEl.innerText = `Score: ${score}`
// }

let seconds = 0;
let score = 0;
let selected_insect = {}

startBtn.addEventListener('click', () => screens[0].classList.add('up'))
chooseInsectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.src
        const alt = img.alt
        selected_insect = { src, alt }
        console.log(selected_insect)

        screens[1].classList.add('up')
        startGame()
        setTimeout(createInsect, 1000)
    })
})

function startGame() {
    setInterval(createTime, 1000)
}

function createTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60;
    time = `${m = m < 10 ? '0' + m : m}:${s = s < 10 ? '0' + s : s}`
    seconds++
    timeEl.innerText = `Time: ${time}`
}

function createInsect() {
    const insectEl = document.createElement('div')
    insectEl.classList.add('insect')

}








// document.location.reload()

// setInterval(increaseTime, 1000)

// let sec = 0;
// let min = 0;
// function increaseTime() {
//     sec++;
//     if (sec > 59) {
//         sec = 0;
//         min++
//     }
//     const time = `Time: ${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
//     timeEl.innerText = time
// }
