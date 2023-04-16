const prevBtn = document.getElementById('left')
const nextBtn = document.getElementById('right')
const imgContainer = document.getElementById('imgs')
const images = imgContainer.querySelectorAll('img')

let idx = 0;

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if (idx > images.length - 1) {
        idx = 0

    } else if (idx < 0) {
        idx = images.length - 1
    }
    imgContainer.style.transform = `translateX(-${500 * idx}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

nextBtn.addEventListener('click', () => {
    idx++
    resetInterval()
    changeImage(idx)
})

prevBtn.addEventListener('click', () => {
    idx--
    resetInterval()
    changeImage(idx)
})




