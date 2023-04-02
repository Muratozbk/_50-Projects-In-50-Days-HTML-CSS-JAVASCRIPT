const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

// const userAction = async () => {
//     const response = await fetch('http://example.com/movies.json');
//     const myJson = await response.json();
//     console.log(myJson)
// }
// userAction()


//// Async Await
async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
            // "Content-Type": "application/json",
        },
    }
    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}


//// Using .then() ///////////
// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         // .then(data => console.log(data))
//         .then(data => jokeEl.innerHTML = data.joke)
// }
/////////////////////
