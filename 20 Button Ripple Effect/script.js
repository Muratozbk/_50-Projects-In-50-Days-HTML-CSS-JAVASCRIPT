const buttons = document.querySelectorAll('.ripple')

// buttons.forEach(button => {
//     button.addEventListener('click', function (e) {
//         const x = e.clientX;
//         const y = e.clientY;

//         const buttonTop = e.target.offsetTop
//         const buttonLeft = e.target.offsetLeft

//         const xInside = x - buttonLeft
//         const yInside = y - buttonTop;
//         // console.log(y, x)
//         console.log(xInside, yInside)

//         const circle = document.createElement('span')
//         circle.classList.add('circle');
//         circle.style = `top:${yInside}px; left:${xInside}px`

//         this.appendChild(circle) //arrow fonskiyonda this çalışmaz

//         setTimeout(() => circle.remove(), 1000) // for clean dom
//     })
// })

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX;
        const buttonLeft = e.target.offsetLeft;
        const xInside = x - buttonLeft;
        const y = e.clientY;
        const buttonTop = e.target.offsetTop;
        const yInside = y - buttonTop
        console.log(yInside)

        const circle = document.createElement('span')
        circle.classList.add('circle');
        circle.style = `top:${yInside}px; left:${xInside}px `;
        this.appendChild(circle)
    })
})