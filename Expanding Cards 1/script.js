'use strict';
const panels = document.querySelectorAll('.panel');
const container = document.querySelector('.container');


panels.forEach(panel => {
    panel.addEventListener('click', function () {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => panel.classList.remove('active'))
}
// container.addEventListener('click', function (e) {
//     panels.forEach(el => {
//         el.classList.remove('active')
//     })
//     const pant = e.target.closest('.panel');
//     if (!pant) return;
//     pant.classList.add('active')
//     console.log(pant)
// })