const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 2)
    // console.log(range_width, label_width, num_width, num_label_width)

    const max = +e.target.max //100
    const min = +e.target.min //0



    label.innerHTML = value
    // console.log(value)
})

// 6:55

