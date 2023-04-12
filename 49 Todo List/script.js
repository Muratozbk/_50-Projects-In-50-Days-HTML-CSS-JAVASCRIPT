const todosUL = document.getElementById('todos')
const form = document.getElementById('form')
const input = document.getElementById('input')

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})


function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text
    }
    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl);

        input.value = '';

        updateLS()
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll('li')
    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed') //itt gives true or false for completed classlist
        })
    })
    console.log(todos)
    localStorage.setItem('todos', JSON.stringify(todos))
}



// const todoList = [];

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(input.value)
//     todoList.push(input.value)

//     const todoEl = document.createElement('li')
//     todoEl.innerText = input.value;
//     console.log(todoList, todoEl)
//     todosUL.appendChild(todoEl)
//     input.value = '';
// })
// const todoEl = input.value

// todosUL.addEventListener('contextmenu', (e) => {
//     e.preventDefault()
//     if (e.target.tagName === 'LI') {
//         e.target.remove()
//     }
//     // if (e.target)
// })

// todosUL.addEventListener('click', (e) => {
//     e.preventDefault()
//     if (e.target.tagName === 'LI') {
//         e.target.classList.toggle('completed')
//     }
// })