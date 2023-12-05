// //1. select target HTML object
// const submitButton = document.querySelector('button')
// // console.log(submitButton)
// // 2 register handler function on a target HtML object
// const doSomething = (e) => {
//   // console.log('submit button is clicked')
//   // console.log(e)
//   console.log(e.target.id)
//   // console.log(e.type)
//   // console.log(e.target)
//   console.log(e.currentTarget)
//   console.log(e.eventPhase)
// }
// submitButton.addEventListener('click', doSomething)
// // -----------------------
// // inner-div
// const innerDiv = document.getElementById('inner-div')
// // console.log(innerDiv)
// innerDiv.addEventListener('click', (event) => {
//   console.log(event.target.id)
//   console.log(event.currentTarget)
//   console.log(event.eventPhase)
// })

// // outer-div
// const outerDiv = document.getElementById('outer-div')
// // console.log(innerDiv)
// outerDiv.addEventListener('click', (event) => {
//   console.log(event.target.id)
//   console.log(event.currentTarget)
//   console.log(event.eventPhase)
// })

// //add multiple handler functions on the same event type and HTML object
// const doGoodbye = (e) => {
//   console.log(`Good bye, ${e.target.id}`)
// }
// submitButton.addEventListener('click', (e) => {
//   console.log(`hello, ${e.target.id}`)
// })
// submitButton.addEventListener('click', doGoodbye)
// //remove event listener
// submitButton.removeEventListener('click', doGoodbye)

// ------------------------------Prevent Default----
// const submitButton = document.querySelector('button')
// // console.log(submitButton)
// submitButton.addEventListener('click', (e) => {
//   e.preventDefault()
//   const allInputElements = document.querySelectorAll('input')
//   console.log(allInputElements)
//   const isComplete = Array.from(allInputElements).every(
//     (input) => input.value.length > 0
//   )
//   const pElement = document.getElementsByTagName('p')[0]
//   if (isComplete) {
//     pElement.textContent = 'Your input are complete'
//   } else {
//     pElement.innerHTML =
//       '<span style="color:red"> Missing some value, plese enter</span>'
//   }
// })

const userElement = document.getElementById('input-user')
const pswElement = document.getElementById('input-psw')
// userElement.addEventListener('focus', () => {
//   console.log('Your focus is on username')
// })
// userElement.addEventListener('blur', () => {
//   console.log('Your username input textbox is blured')
// })

// //using keydown and keypress only to detect number characters 0-9
// userElement.addEventListener('keydown', (e) => {
//   console.log(`${e.key}, ${e.code}`)
//   if (e.key >= 0 && e.key <= 9) {
//     e.preventDefault()
//   }
// })

// // when user release enter key, text value on username will show at <p> element
// userElement.addEventListener('keyup', (e) => {
//   if (e.key === 'Enter') {
//     const pElement = document.querySelector('p')
//     pElement.textContent = e.target.value
//   }
// })
// userElement.addEventListener('input', (e) => {
//   const pElement = document.querySelector('p')
//   pElement.textContent = e.target.value
// })



//handy function
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e)
  })
}




  



// userElement.addEventListener('keypress', (e) => {
//   if (userElement.value !== null) {
//     pTarget.textContent = e.target.value
//   }
// })

// pswElement.addEventListener('keypress', (e) => {
//   if (pswElement.value !== null) {
//     pTarget.textContent = e.target.value
//   }
// })
const pTarget = document.querySelector('body>div>p')
const submitButton = document.querySelector('button')
submitButton.addEventListener('click', (e) => {
  e.preventDefault()
 const allInputElements = document.querySelectorAll('input')
 const isComplete = Array.from(allInputElements).every((input) => 
 input.value.length > 0)

 if (isComplete) {
  pTarget.textContent = 'Complete'
 } else {
  pTarget.textContent = 'Incomplete'
 }
})