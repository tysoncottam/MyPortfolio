//document.getElementById('company-name').innerHTML = "Joe's Bed and Breakfast"

//document.querySelector('header > h1').innerHTML = "Joe's Bed and Breakfast"

document.querySelector('#company-name').innerHTML = "Joe's Bed and Breakfast"

document.querySelector('#company-slogan').innerHTML = '"Warm & Cozy"'

document.querySelector('#welcome-message').innerHTML = "Welcome To Joe's Bed and Breakfast"

let userName = prompt("Username:")

//let messageToUser = "Hello " + userName + "! Welcome to the finest lodging in Utah."

let messageToUser = `Hello ${userName}! Welcome to the finest lodging in Utah.`

document.querySelector('#message-to-user').innerHTML = messageToUser