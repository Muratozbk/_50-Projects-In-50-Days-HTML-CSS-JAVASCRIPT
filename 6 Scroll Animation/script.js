const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes()
function checkBoxes() {
    console.log(window.innerHeight)
    const trigerBottom = window.innerHeight * 4 / 5;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop)
        if (boxTop < trigerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

