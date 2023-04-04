const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())
// button.addEventListener('click', () => createNotification('This is invalid data', 'success'))

function createNotification(message = null, type = null) {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(type ? type : getRandomType())

    toast.innerText = message ? message : getRandomMessage()

    // toast.innerText = getRandomMessage()
    toasts.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}



// const messages = [
//     'Message One',
//     'Message Two',
//     'Message Three',
//     'Message Four'
// ]
// const types = ['info', 'success', 'error']

// button.addEventListener('click', () => createNot('sdsd'));

// function createNot(message = null, type = null) {
//     const toast = document.createElement('div')
//     toast.classList.add('toast')
//     toast.classList.add(type ? type : types[getRandomNum(types.length)])
//     toast.innerText = message ? message : messages[getRandomNum(messages.length)]
//     toasts.appendChild(toast)

//     setTimeout(() => {
//         toast.remove()
//     }, 3000)
// }

// function getRandomNum(num) {
//     return Math.floor(Math.random() * num)
// }