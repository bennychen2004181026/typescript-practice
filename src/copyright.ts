//Original JS code
// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year.setAttribute('datetime',thisYear)
// year.textContent = thisYear

// 1st variation
// let year: HTMLElement | null
// year = document.getElementById('year')

// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// //Using type guard
// if (year) {
//     year.setAttribute('datetime', thisYear)
//     year.textContent = thisYear
// }

// 2nd variation
//explicitly tell TS this is a HTMLSpanElement by type asserion
const year = document.getElementById('year') as HTMLSpanElement

const thisYear: string = new Date().getFullYear().toString()

//Because the year already be informed as HTMLSpanElement and not a null 
year.setAttribute('datetime', thisYear)
year.textContent = thisYear

