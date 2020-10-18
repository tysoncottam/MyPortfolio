import { people } from '../assets/people.js'

let mainArea = document.querySelector('main')

const justNames = people.map(person =>{
    return {name: person.name, foo: 'bar', config: [{style: 'something'}, {foo: 'bar'}]}
})

console.log(justNames)

people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h2')
    let eyeColor = document.createElement('p')
    let gender = document.createElement('p')
    let pic = document.createElement('img')
    
    let charNum = getCharNumber(person.url)
    
    name.textContent = person.name
    eyeColor.textContent = 'Eye Color: ' + person.eye_color.toUpperCase()
    gender.textContent = 'Gender: ' + person.gender.toUpperCase()
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    
    personDiv.appendChild(name)
    personDiv.appendChild(pic)
    personDiv.appendChild(eyeColor)
    personDiv.appendChild(gender)
    
    mainArea.appendChild(personDiv)
})

function getCharNumber(charURL)
{
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    
    if(charID.indexOf('/') !== -1)
        {
            return charID.slice(1,2)
        }
    else
        {
            return charID
        }
}

//--------------------------------------------------------------

let button1div = document.createElement('div')
let button2div = document.createElement('div')
let button3div = document.createElement('div')

button1div.setAttribute('class', 'button1div')
button2div.setAttribute('class', 'button2div')
button3div.setAttribute('class', 'button3div')

const allDivs = Array.from(document.querySelectorAll('div'))

let buttonArea = document.querySelector('.button-area')
const maleButton = document.createElement('button')
maleButton.textContent = 'Filter Male Characters'

maleButton.addEventListener('click', () =>
{
    femaleCharacters.forEach(character => 
        {
            let matchedDiv = allDivs.find(oneDiv =>
                {
                    return oneDiv.firstChild.textContent === character.name
                })
            if(matchedDiv.getAttribute('style') === "display: none;")
            {
                console.log(matchedDiv)
                matchedDiv.setAttribute("style", "display: revert;")
            } else
            {
                matchedDiv.setAttribute("style", "display: none;")
            }
        })
    otherCharacters.forEach(character => 
        {
            let matchedDiv = allDivs.find(oneDiv =>
                {
                    return oneDiv.firstChild.textContent === character.name
                })
            if(matchedDiv.getAttribute('style') === "display: none;")
            {
                console.log(matchedDiv)
                matchedDiv.setAttribute("style", "display: revert;")
            } else
            {
                matchedDiv.setAttribute("style", "display: none;")
            }
        })
})

let femaleButton = document.createElement('button')
femaleButton.textContent = 'Filter Female Characters'
femaleButton.addEventListener('click', () =>
{
    maleCharacters.forEach(character => 
        {
            let matchedDiv = allDivs.find(oneDiv =>
                {
                    return oneDiv.firstChild.textContent === character.name
                })
            if(matchedDiv.getAttribute('style') === "display: none;")
            {
                console.log(matchedDiv)
                matchedDiv.setAttribute("style", "display: revert;")
            } else
            {
                matchedDiv.setAttribute("style", "display: none;")
            }
        })
    otherCharacters.forEach(character => 
        {
            let matchedDiv = allDivs.find(oneDiv =>
                {
                    return oneDiv.firstChild.textContent === character.name
                })
            if(matchedDiv.getAttribute('style') === "display: none;")
            {
                console.log(matchedDiv)
                matchedDiv.setAttribute("style", "display: revert;")
            } else
            {
                matchedDiv.setAttribute("style", "display: none;")
            }
        })
})

let otherButton = document.createElement('button')
otherButton.textContent = 'Filter Other Characters'
otherButton.addEventListener('click', () =>
{
    maleCharacters.forEach(character => 
        {
            let matchedDiv = allDivs.find(oneDiv =>
                {
                    return oneDiv.firstChild.textContent === character.name
                })
            if(matchedDiv.getAttribute('style') === "display: none;")
            {
                console.log(matchedDiv)
                matchedDiv.setAttribute("style", "display: revert;")
            } else
            {
                matchedDiv.setAttribute("style", "display: none;")
            }
        })
    femaleCharacters.forEach(character => 
        {
            let matchedDiv = allDivs.find(oneDiv =>
                {
                    return oneDiv.firstChild.textContent === character.name
                })
            if(matchedDiv.getAttribute('style') === "display: none;")
            {
                console.log(matchedDiv)
                matchedDiv.setAttribute("style", "display: revert;")
            } else
            {
                matchedDiv.setAttribute("style", "display: none;")
            }
        })
})

button1div.appendChild(maleButton)
button2div.appendChild(femaleButton)
button3div.appendChild(otherButton)

buttonArea.appendChild(button1div)
buttonArea.appendChild(button2div)
buttonArea.appendChild(button3div)

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')