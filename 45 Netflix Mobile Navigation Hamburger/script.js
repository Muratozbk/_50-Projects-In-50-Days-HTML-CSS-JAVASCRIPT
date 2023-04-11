const navs = document.querySelectorAll('.nav')
const btnOpen = document.querySelector('.open-btn')
const btnClose = document.querySelector('.close-btn')

btnOpen.addEventListener('click', () => {
    navs.forEach((nav, idx) => {
        nav.classList.add('visible')
    })
})

btnClose.addEventListener('click', () => {
    navs.forEach((nav, idx) => {
        setTimeout(() => nav.classList.remove('visible'), idx * 1)

    })
})


navs.forEach(nav => nav.classList.remove('visible'))
