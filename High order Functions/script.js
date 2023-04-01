const companies = [
    { name: "Company 1", category: "Finance", start: "1981", end: "1988" },
    { name: "Company 2", category: "Retail", start: "1992", end: "2008" },
    { name: "Company 3", category: "Auto", start: "1999", end: "2007" },
    { name: "Company 4", category: "Retail", start: "1989", end: "2010" },
    { name: "Company 5", category: "Tec", start: "2005", end: "2014" },
    { name: "Company 6", category: "Finance", start: "1987", end: "1989" },
    { name: "Company 7", category: "Auto", start: "2011", end: "2012" },
    { name: "Company 8", category: "Tec", start: "1876", end: "1996" },
    { name: "Company 9", category: "Retail", start: "2001", end: "2016" }
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     // console.log(companies[i])
// }

// companies.forEach(company => console.log(company.name))
const olds = ages.filter(age => age > 30)
console.log(olds)
//Filter retail companies
const retC = companies.filter(cmp => cmp.category === 'Retail')
console.log(retC)

//Get  80s companies Filter
const eightiesComp = companies.filter(comp =>
    (comp.start >= 1980 && comp.start < 1990))
console.log(eightiesComp)
// Get comp exist 10 years and more
const longComp = companies.filter(comp =>
    comp.end - comp.start >= 10)
console.log(longComp)

//map
// Create array of company names
const companyNames = companies.map(comp => comp.name)
console.log(companyNames)

const testMap = companies.map(comp => `${comp.name} [${comp.start} - ${comp.end}]`)
console.log(testMap)

const agesMap = ages.map(age => Math.sqrt(age))
    .map(age => age * 2)
console.log(agesMap)

//Sort
// const sortedCompanies = companies.sort((c1, c2) =>
//     c1.start > c2.start ? 1 : -1)
// console.log(sortedCompanies)
// const sortComp = companies.sort((a, b) =>
//     a.end > b.end ? 1 : -1)
// console.log(sortComp)
//sort ages
// const sortAges = ages.sort((a, b) => a - b)
// console.log(sortAges)

//reduce
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i]
// }
const ageSum = ages.reduce((total, age) => total + age, 0)
console.log(ageSum)

//Get total years for all companies
const totalYear = companies.reduce((total, company) =>
    total + (company.end - company.start), 0)
console.log(totalYear)

//Combine Methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0)

console.log(combined)