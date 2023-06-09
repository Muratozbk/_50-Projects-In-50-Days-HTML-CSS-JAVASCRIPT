//// api key:e5d291ec2844c1a127e9c4f152a9ba29
//// example api req:https://api.themoviedb.org/3/movie/550?api_key=e5d291ec2844c1a127e9c4f152a9ba29

const main = document.getElementById('main')
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e5d291ec2844c1a127e9c4f152a9ba29&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=e5d291ec2844c1a127e9c4f152a9ba29&query="'  //"yeni sıralama için
const form = document.getElementById('form');
const search = document.getElementById('search')

//// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json()

    console.log(data.results)
    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average,
            overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
      <img
        src="${IMG_PATH + poster_path}"
         alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
      `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        search.value = '';

    } else {
        window.location.reload()
    }
})


const searchBtn = document.querySelector('.btnSearch')

searchBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchVal = search.value
    if (searchVal && searchVal !== '') {
        getMovies(SEARCH_API + searchVal)
        search.value = ''
    } else
        window.location.reload()
})


// const main = document.getElementById('main')
// const searchIn = document.getElementById('search')
// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e5d291ec2844c1a127e9c4f152a9ba29&page=1';
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=e5d291ec2844c1a127e9c4f152a9ba29&query="`

// const form = document.getElementById('form');
// const search = document.getElementById('search')

// const getMovies = async function (url) {
//     const res = await fetch(url);
//     const data = await res.json()
//     showMovies(data.results)
// }
// getMovies(API_URL);

// function showMovies(movies) {
//     main.innerHTML = '';

//     movies.forEach(movie => {
//         const { title, poster_path, vote_average,
//             overview } = movie

//         const movieEl = document.createElement('div')
//         movieEl.classList.add('movie');
//         movieEl.innerHTML = `
//         <img src="${IMG_PATH + poster_path}"
//      alt = "" >
//   <div class="movie-info">
//     <h3>${title}</h3>
//     <span class="${getClassRate(vote_average)}">${vote_average}</span>
//   </div>
//   <div class="overview">
//     <h3>Overview</h3>
//     ${overview}
//   </div>`
//         main.appendChild(movieEl)
//     })
// }

// function getClassRate(vote) {
//     if (vote >= 7.5) return 'green';
//     if (vote >= 6) return 'orange'
//     else return 'red'
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const searchVal = search.value;
//     if (searchVal !== '') {
//         getMovies(SEARCH_API + searchVal)
//         search.value = '';
//     } else
//         window.location.reload()

// })



