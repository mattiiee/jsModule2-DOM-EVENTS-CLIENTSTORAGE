//window.alert, window.prompt, window.confirm
window.alert('Do you want to exit?')

const userName = window.prompt('Please enter your name', 'ex.; matt')

const isExit = window.confirm(`Goodbye, ${userName}`)

console.log(isExit)
