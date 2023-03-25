const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

nextBtn.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    console.log(currentActive)
    update()
})

prevBtn.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    console.log(currentActive)
    update()
})

function update() {
    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add('active')
            console.log('i', i)
        }
        if (i >= currentActive) {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) *
        100 + '%';
    if (currentActive === 1) {
        prevBtn.disabled = true
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false
    }
}

