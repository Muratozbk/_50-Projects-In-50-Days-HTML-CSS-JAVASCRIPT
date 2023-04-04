const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
console.log(ctx)
const colorPicker = document.getElementById('color');
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const sizeBox = document.getElementById('size')
const clear = document.getElementById('clear')

let size = 10;
let isPressed = false;
let color = 'black'
let x;
let y;
// ctx.fillStyle = "green";
// ctx.fillRect(10, 10, 150, 100); y , x , width, length;
increase.addEventListener('click', () => {
    if (size < 30)
        size += 2;
    sizeBox.innerText = size
})
decrease.addEventListener('click', () => {
    if (size > 2) {
        size -= 2;
        sizeBox.innerHTML = size
    }
})

//Clear Canvas Context
clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, 800, 800)
})

// Color Picker.value
colorPicker.addEventListener('change', () => {
    color = colorPicker.value
    console.log(color)
})

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
    console.log(isPressed, x, y)
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
    // console.log(isPressed, x, y)
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2; //yeni başlangıç for line
        y = y2;
    }
})

//Draw Circle
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color  //'black'
    ctx.fill()
}
// Draw Line
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2; //boyutu circle ile eşitlemek için
    ctx.stroke()
}
sizeBox.innerText = size
// drawCircle(100, 200)
// drawLine(300, 500, 400, 400)
