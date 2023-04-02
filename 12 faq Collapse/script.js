/*
1-Loop through nodelist (forEach)
2-add click event
3-Toggle the active class on the parent node 
(.parentNode& classList.toggle())
*/

//ParentNode: tek kendi bölümünü seçer, SelectAll hepsini seçer
//closest('div') gibi

const toggleBtns = document.querySelectorAll('.faq-toggle')
const boxes = document.querySelectorAll('.faq')

toggleBtns.forEach(toggle => {
    toggle.addEventListener('click', () =>
        toggle.parentNode.classList.toggle('active')
    )
})


// toggleBtns.forEach(btn =>
//     btn.addEventListener('click', () =>
//         btn.closest('div').classList.toggle('active')))

