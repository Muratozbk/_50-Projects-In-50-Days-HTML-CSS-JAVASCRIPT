const textarea = document.getElementById('textarea')
const tagsEl = document.getElementById('tags');

// tagsEl.innerHTML = `<span class="tag">Choice 3</span>`

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    console.log(input)

    const tags = input.split(',').filter(tag => tag.trim()
        !== '').map(tag => tag.trim())

    console.log(tags)

    tagsEl.innerHTML = '';

    tags.forEach(tagEach => {
        const tagElEach = document.createElement('span')
        tagElEach.classList.add('tag')
        tagElEach.innerHTML = tagEach
        tagsEl.append(tagElEach)
    })

}

function randomSelect() {

    const times = 30; // Kaç defa hareket edicek

    const interval = setInterval(() => {

        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag(); // 1 tane seçili kalır
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}

