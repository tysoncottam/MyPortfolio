//document.getElementById('company-name').innerHTML = "Joe's Bed and Breakfast"

//document.querySelector('header > h1').innerHTML = "Joe's Bed and Breakfast"

document.querySelector('#company-name').innerHTML = "Inspector Clouseau"
document.querySelector('#welcomeMessage').innerHTML = "Inspector Clouseau"

document.querySelector('#company-slogan').innerHTML = '"This IZ Chief Inspector Clouseau speaking on the pheaun"'

function reDisplay()
{
    
    let windowWidth = `Window Width: ${window.innerWidth}`
    let windowHeight = `Window Height: ${window.innerHeight}`
    let offsetX = `Window Offset X: ${window.screenX}`
    let offsetY = `Window Offset Y: ${window.screenY}`

    let myWindow = document.querySelector('#myWindow').innerText = `${windowWidth} \n ${windowHeight} \n ${offsetX} \n ${offsetY}`
}

reDisplay()


document.querySelector('#myURL').innerHTML = window.location.href
document.querySelector('#myTitle').innerHTML = document.title
document.querySelector('#myUpdate').innerHTML = document.lastModified