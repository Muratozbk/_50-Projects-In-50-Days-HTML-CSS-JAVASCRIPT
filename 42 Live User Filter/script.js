const result = document.getElementById('result')
const filterText = document.getElementById('filter')
filterText.focus()

// const listIttems = [];

// getData()

// filterText.addEventListener('input', (e) => filterData(e.target.value))

// async function getData() {
//     const res = await fetch('https://randomuser.me/api?results=50')
//     const { results } = await res.json() // data.results

//     result.innerHTML = ''

//     results.forEach(user => {
//         const li = document.createElement('li')

//         listIttems.push(li)

//         li.innerHTML = `
//        <img src="${user.picture.medium}" alt="${user.name.first}">
//        <div class="user-info">
//        <h4>${user.name.first} ${user.name.last}
//        <p>${user.location.city}, ${user.location.country}
//        `
//         result.appendChild(li)
//     })
// }

// function filterData(searchTerm) {
//     listIttems.forEach(item => {
//         if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
//             item.classList.remove('hide')
//         } else { item.classList.add('hide') }
//     })
// }

const listItems = []

filterText.addEventListener('input', (e) => filterData(e.target.value))

getData()
async function getData() {
    const res = await fetch('https://randomuser.me/api?results=100')
    const { results } = await res.json()
    const excludeCountries = ['Iran', 'Turkey']
    console.log(results.filter(data => data.gender === 'female'))
    const females = results.filter(data => (data.gender === 'female' &&
        !excludeCountries.includes(data.location.country))) //Female users filtered

    result.innerHTML = ''

    females.forEach(user => {
        const li = document.createElement('li')
        li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
      <h4>${user.name.first} ${user.name.last}</h4>
      <p>${user.location.city}, ${user.location.country}</p>
    </div>`
        listItems.push(li)
        result.appendChild(li)
    })
    console.log(listItems)

}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide');
        }
    })
    console.log(listItems)
}

// Filer female users 
// const females = results.filter(data => (data.gender === 'female' && data.location.country !== 'Turkey' && data.location.country !== 'Iran')) //Female users filtered

//Better filter method
const results2 = ['a', 'b']
const excludeCountries2 = ['Iran', 'Turkey']
const females2 = results2.filter(data => (data.gender === 'female' &&
    !excludeCountries2.includes(data.location.country))) //pick female and not pick this countries