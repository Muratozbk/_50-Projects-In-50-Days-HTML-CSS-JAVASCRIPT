const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button');

const leftSlide = document.querySelector('.left-slide')
const rightSlide = document.querySelector('.right-slide')

let transform = 0;
let transLeft = -300;

upBtn.addEventListener('click', () => {
    transform += 100
    transLeft -= 100;
    if (transform > 0) { transform = -300 }
    if (transLeft < -300) { transLeft = 0 }
    rightSlide.style.transform = `translateY(${transform}%)`
    leftSlide.style.transform = `translateY(${transLeft}%)`
    console.log(transLeft)
})

downBtn.addEventListener('click', () => {
    transform -= 100
    transLeft += 100;
    if (transform < -300) { transform = 0 }
    if (transLeft > 0) { transLeft = -300 }
    rightSlide.style.transform = `translateY(${transform}%)`
    leftSlide.style.transform = `translateY(${transLeft}%)`
    console.log(transLeft)
})

