const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note');

    note.innerHTML = ` 
    <div class="tools">
     <button class="edit"><i class="fas fa-edit"></i></button>
     <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? "hidden" : ''}"></textarea>`

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLS()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateLS()
    })

    document.body.appendChild(note)
}

function updateLS() {
    const noteText = document.querySelectorAll('textarea')
    const notes = []

    noteText.forEach(note => notes.push(note.value));

    localStorage.setItem('notes', JSON.stringify(notes))
}

function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd'
}


// const notes = JSON.parse(localStorage.getItem('notes'))
// console.log(notes)
// notes.forEach(note => addNewNote(note))

// addBtn.addEventListener('click', () => addNewNote())
// function addNewNote(text = '') {
//     const note = document.createElement('div')
//     note.classList.add('note')
//     note.innerHTML = `
//     <div class="tools">
//       <button class="edit"><i class="fas fa-edit"></i></button>
//       <button class="delete"><i class="fas fa-trash-alt"></i></button>
//     </div>

//     <div class="main ${text ? '' : 'hidden'}"></div>
//     <textarea class="${text ? 'hidden' : ''}"></textarea>
//   </div>
//     `
//     const editBtn = note.querySelector('.edit')
//     const deleteBtn = note.querySelector('.delete')
//     const main = note.querySelector('.main')
//     const textArea = note.querySelector('textarea')

//     textArea.value = text
//     main.innerHTML = marked(text)

//     deleteBtn.addEventListener('click', () => {
//         note.remove()
//         updateLS()
//     })

//     editBtn.addEventListener('click', () => {
//         const toggleElements = [main, textArea]
//         toggleElements.forEach(el => el.classList.toggle('hidden'))
//     })

//     textArea.addEventListener('input', (e) => {
//         const inputValue = e.target.value
//         main.innerHTML = marked(inputValue)
//         updateLS()
//     })

//     document.body.appendChild(note)
// }


// function updateLS() {
//     const notes = []
//     const textNotes = document.querySelectorAll('textarea')
//     textNotes.forEach(text => notes.push(text.value))
//     localStorage.setItem('notes', JSON.stringify(notes))
// }

// // localStorage.removeItem('note1')














//let make clear all btn

// LocalStorage
// localStorage.setItem('name', JSON.stringify(123))
// JSON.parse(localStorage.getItem('name'))
// // localStorage.removeItem('name')
