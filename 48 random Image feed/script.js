const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/featured/'
let rows = 5;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(img)
}

console.log(getRandomSize())
function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()} `
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}


//select box ,change row 10 ,20

const rowNum = document.getElementById('rowNum')

rowNum.addEventListener('input', (e) => {
    rows = +e.target.value

    console.log(+e.target.value)
    console.log(rows)
    container.innerHTML = '';

    for (let i = 0; i < rows * 3; i++) {
        const img = document.createElement('img')
        img.src = `${unsplashURL}${getRandomSize()}`;
        container.appendChild(img)
    }

    console.log(getRandomSize())
    function getRandomSize() {
        return `${getRandomNr()}x${getRandomNr()} `
    }

    function getRandomNr() {
        return Math.floor(Math.random() * 10) + 300
    }
})

