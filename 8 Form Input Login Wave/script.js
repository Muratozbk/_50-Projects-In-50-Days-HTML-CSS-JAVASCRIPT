const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

    // < label ><span>E</span><span>m</span><span>a</span><span>i</span><span>l</span></label >


// labels.forEach(label => {
//     label.innerHTML = label.innerText
//         .split('')
//         .map((letter, i) => ` <span style="transition-delay:${i * 44}ms">${letter}</span>`)
//         .join('')
// })

