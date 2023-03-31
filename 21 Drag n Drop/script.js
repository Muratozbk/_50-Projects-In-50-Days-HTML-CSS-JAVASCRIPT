// fill hold hovered empty

const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    // this.classList.add('hold')
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 1)
    console.log('drag start')
}
function dragEnd() {
    this.className = 'fill'
    console.log('dragEnd')
}
function dragOver(e) {
    e.preventDefault()
    // console.log('dragOver')
}
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
    console.log('dragEnter')
}
function dragLeave() {
    console.log('dragLeave')
    this.className = 'empty'
}
function dragDrop() {
    this.className = 'empty';
    this.append(fill)
    console.log('drag Drop')
}


