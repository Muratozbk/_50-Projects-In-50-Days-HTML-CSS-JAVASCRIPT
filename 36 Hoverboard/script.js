const container = document.getElementById('container')

const allColors = document.getElementById('allColors')
const colorPicker = document.getElementById('color')

colorPicker.addEventListener('change', () => {
    const colorPicked = colorPicker.value;
    console.log(colorPicked)
    colors.push(colorPicked)
    // colors.shift()
    const square = document.createElement('div')
    square.classList.add('square')
    square.classList.add('sq22')
    square.style.backgroundColor = colorPicked
    allColors.appendChild(square)
})

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', 'rgb(91, 209, 98)']

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square)
}


function setColor(sqr) {
    const color = getRandomColor()
    sqr.style.backgroundColor = color;
    sqr.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(sqr) {
    setTimeout(() => {
        sqr.style.backgroundColor = '#2d2d2d';
        sqr.style.boxShadow = '0 0 2px #000'
    }, 300)
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}



for (let i = 0; i < colors.length; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.style.backgroundColor = colors[i]
    allColors.appendChild(square);
}


allColors.querySelectorAll('.square').forEach((sqr, idx) => {
    sqr.addEventListener('click', function (e) {
        e.target.remove()
        colors.splice(idx, 1)
    })
})





