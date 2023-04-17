const sendBtn = document.getElementById('send')
const panel = document.getElementById('panel')
const ratingsContainer = document.querySelector('.ratings-container')
const ratings = document.querySelectorAll('.rating')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')

        selectedRating = e.target.closest('div').querySelector('small').innerHTML

    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fa fa-heart"></i>
<strong>Thank you</strong>
<br>
<strong>Feedback: ${selectedRating}</strong>
<p>We'll use your feedback to improve our customer support</p>`
})

function removeActive() {
    // ratings.forEach(rating => rating.classList.remove('active'))
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}

