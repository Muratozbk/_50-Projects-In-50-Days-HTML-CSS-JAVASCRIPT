const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () =>
        highlightCups(idx))
})

function highlightCups(idx) {
    if (smallCups[idx].classList.contains('full') &&
        !smallCups[idx].nextElementSibling?.classList.contains('full')) {
        idx--
    }
    // if (smallCups[idx].classList.contains('full')) {
    //     idx--
    // }
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else { cup.classList.remove('full') }
    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups =
        document.querySelectorAll('.cup-small.full').length
    console.log(fullCups);
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }
    else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${330 * fullCups / totalCups}px`
        percentage.innerText = `${100 * fullCups / totalCups}%`
    }
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${totalCups * 0.25 - (0.25 * fullCups)}L`
        //// liters.innerText = `${2 * (fullCups / totalCups)}L`
    }
}



// smallCups.forEach((cup, idx) => cup.addEventListener('click', () =>
//     highlightCup(idx)))

// function highlightCup(idx) {
//     if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling?.classList.contains('full')) idx--;
//     smallCups.forEach((cup, idx2) => {
//         if (idx2 <= idx) {
//             cup.classList.add('full')
//         } else cup.classList.remove('full')
//     })
//     updateBig()
// }

// function updateBig() {
//     const fullCups = document.querySelectorAll('.full').length
//     const totalCups = smallCups.length
//     console.log(fullCups)

//     if (fullCups === 0) {
//         percentage.style.visibility = 'hidden'
//     } else {
//         percentage.style.visibility = 'visible'
//         percentage.style.height = `${330 * fullCups / totalCups}px`;
//         percentage.innerText = `${100 * fullCups / totalCups}%`
//     }
//     if (fullCups === totalCups) {
//         remained.style.visibility = 'hidden';
//         remained.style.height = 0;
//     } else {
//         remained.style.visibility = 'visible';
//         liters.innerText = `${(fullCups / totalCups) * 2}L`
//     }
// }