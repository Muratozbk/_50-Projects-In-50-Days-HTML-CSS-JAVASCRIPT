const container = document.getElementById('container')

const allColors = document.getElementById('allColors')
const colorPicker = document.getElementById('color')

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
    square.setAttribute('data-index', i); // Add a data-index attribute to each square
}

allColors.addEventListener('click', function (e) {
    const square = e.target;
    if (square.classList.contains('square')) {
        const index = square.getAttribute('data-index'); // Get the index of the color
        square.remove(); // Remove the square from the DOM
        colors.splice(index, 1); // Remove the color from the colors array

        allColors.querySelectorAll('.square').forEach((sqr, idx) => {
            sqr.setAttribute('data-index', idx); // Update the data-index of the remaining squares
        });
    }
});

colorPicker.addEventListener('change', () => {
    const colorPicked = colorPicker.value;
    console.log(colorPicked)
    colors.push(colorPicked)
    // colors.shift()
    const square = document.createElement('div')
    square.classList.add('square')
    square.style.backgroundColor = colorPicked
    allColors.appendChild(square)
    square.setAttribute('data-index', colors.length - 1); // Add a data-index attribute to the new square
})

