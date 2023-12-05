import { CookieUtil } from "./myLib/cookieUtil.js"
// document.cookie = "username=Aismat"
// document.cookie = 'course=INT201'
// document.cookie = 'credit=3'
// document.cookie = 'credit=2'
// const currentCookie = document.cookie
// console.log(currentCookie)

// console.log(CookieUtil.get('course'));

//cookie lib
// CookieUtil.set('username','Aismat', new Date(2023,11,25))
// CookieUtil.set('course','INT201', new Date(2023,11,31))
// CookieUtil.set('credit','2', new Date(2024,0,1))

// console.log(CookieUtil.get('username'))
// console.log(CookieUtil.get('course'))

// console.log(CookieUtil.unset('credit'))
// console.log(CookieUtil.get('credit'))

// local/session storage
// let counter = sessionStorage.getItem('count')
// if (counter === null){
//     counter = 1
//     sessionStorage.setItem('count', counter)
// } 
// else sessionStorage.setItem('count', ++counter)
// alert(`counter=${counter}`)

const text = document.querySelector('text')
console.log(text)

const fontSize = document.getElementById('fontSize')
console.log(fontSize)

const fontColor = document.getElementById('fontColor')
console.log(fontColor)

function changeDaFont(){

}

localStorage.setItem('name', 'Bob')
localStorage.removeItem('name')

document.cookie = 'name=Matt'
