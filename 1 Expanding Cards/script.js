'use strict';
const panels = document.querySelectorAll('.panel');
const container = document.querySelector('.container');


panels.forEach(panel => {
    panel.addEventListener('click', function () {
        removeActiveClasses()
        // panels.forEach(panel => panel.classList.remove('active'))
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => panel.classList.remove('active'))
}

// container.addEventListener('click', function (e) {
//     const pant = e.target.closest('.panel');
//     if (!pant) return;
//     panels.forEach(el => {
//         el.classList.remove('active')
//     })
//     pant.classList.add('active')
//     console.log(pant)
// })
