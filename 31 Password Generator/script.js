const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// clipboardEl.addEventListener('click', () => {
//     const textarea = document.createElement('textarea')
//     const password = resultEl.innerText
//     if (!password) return;

//     textarea.value = password;
//     document.body.appendChild(textarea)
//     textarea.select() //select everything in select area
//     document.execCommand('copy')
//     textarea.remove()
//     alert('Password copied to clipboard')
// })

clipboardEl.addEventListener('click', async () => {
    try {
        if (!resultEl.innerText) return;
        await navigator.clipboard.writeText(resultEl.innerText);
        alert('Password copied to clipboard');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
})

//// // Modern way Clipboard Api
// const textarea = document.getElementById('myTextarea');
// const button = document.getElementById('myButton');

//// button.addEventListener('click', async () => {
//   try {
//     await navigator.clipboard.writeText(textarea.value);
//     console.log('Text copied to clipboard');
//   } catch (err) {
//     console.error('Failed to copy text: ', err);
////   }
// });/////////////////

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    // console.log(hasLower, hasUpper, hasNumber, hasSymbol)

    //Generate password function
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''

    // Filter Settings Value
    const typesCount = lower + upper + number + symbol; // 4

    const typesArr = [{ lower }, { upper }, { number }, { symbol }]
        .filter(item => Object.values(item)[0]) //Filter trues
    // console.log(typesArr)
    if (typesCount === 0) return 'Select a type please';

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            console.log(funcName)
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%#^&*(){[]}=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
