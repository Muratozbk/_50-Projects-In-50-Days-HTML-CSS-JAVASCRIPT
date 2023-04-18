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

    const left = value * ((num_width - 20) / max) -
        (num_label_width - 20) / 2;
    // const left = value * (num_width / max) - num_label_width / 2; // for clear 10px offset
    console.log(left)
    label.innerHTML = value
    label.style.left = `${left}px`
    // console.log(value)
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) /
        (in_max - in_min) + out_min
}
//   loadText.style.opacity = scale(load, 0, 100, 1, 0)


