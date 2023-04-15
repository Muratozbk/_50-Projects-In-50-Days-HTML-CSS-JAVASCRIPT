const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(toggle =>
    toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(clickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === clickedOne) {
            fast.checked = false
        }
        if (cheap === clickedOne) {
            good.checked = false
        }
        if (fast === clickedOne) {
            cheap.checked = false
        }
    }
}

// toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
//     if (good.checked && cheap.checked && fast.checked) {
//         if (e.target === good) cheap.checked = false;
//         if (e.target === cheap) fast.checked = false;
//         if (e.target === fast) good.checked = false;
//     }
// }))

