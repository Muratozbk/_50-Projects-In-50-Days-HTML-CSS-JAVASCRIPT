const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button');

const leftSlide = document.querySelector('.left-slide')
const rightSlide = document.querySelector('.right-slide')
const slideContainer = document.querySelector('.slider-container')
const slidesLength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = slideContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }

    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}


// const upBtn = document.querySelector('.up-button')
// const downBtn = document.querySelector('.down-button');

// const leftSlide = document.querySelector('.left-slide')
// const rightSlide = document.querySelector('.right-slide')

// let transform = 0;
// let transLeft = -300;

// upBtn.addEventListener('click', () => {
//     transform += 100
//     transLeft -= 100;
//     if (transform > 0) { transform = -300 }
//     if (transLeft < -300) { transLeft = 0 }
//     rightSlide.style.transform = `translateY(${transform}%)`
//     leftSlide.style.transform = `translateY(${transLeft}%)`
//     console.log(transLeft)
// })

// downBtn.addEventListener('click', () => {
//     transform -= 100
//     transLeft += 100;
//     if (transform < -300) { transform = 0 }
//     if (transLeft > 0) { transLeft = -300 }
//     rightSlide.style.transform = `translateY(${transform}%)`
//     leftSlide.style.transform = `translateY(${transLeft}%)`
//     console.log(transLeft)
// })

