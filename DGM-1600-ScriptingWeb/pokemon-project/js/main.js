
class Pokemon 
{
    constructor(id, name, height)
    {
        this.id = id
        this.name = name
        this.height = height
    }
}

const Tyson = new Pokemon(900, 'tyson', 70)

const newButton = document.querySelector('#new-pokemon-button')
newButton.addEventListener('click', function()
{
    let pokeId = prompt("Please enter a Pokemon ID")
    if(pokeId > 0 && pokeId <=807)
        {
            getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(result =>
            {
                populateDOM(result)
            })
        }
    else
        {
            alert('Nope. Try again.')
        }
       
})

async function getAPIData(url)
{
    try
        {
            const response = await fetch(url)
            const data = await response.json()
            return data
        }
    catch (error)
        {
            console.error(error)
        }
}

/*getPokemonData('https://pokeapi.co/api/v2/pokemon/')*/

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=32')
.then(data => 
{
    for (const pokemon of data.results)
        {
            getAPIData(pokemon.url)
            .then(pokedata =>
            {
                populateDOM(pokedata)    
            })
        }
})

let mainArea = document.querySelector('main')

function populateDOM(single_pokemon) 
{
    let scene = document.createElement('div')
    let card = document.createElement('div')
    let pokeDiv = document.createElement('div')
    let secondDivForFlip = document.createElement('div')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let name = document.createElement('h3')

    let pic = document.createElement('img')

    fillCardBack(secondDivForFlip, single_pokemon)
    
    scene.setAttribute('class', 'scene')
    card.setAttribute('class', 'card')
    div1.setAttribute('class', 'div1')
    div2.setAttribute('class', 'div2')
    card.setAttribute('id', 'toggle-back')
    pokeDiv.setAttribute('class', 'charDivs card-front')
    secondDivForFlip.setAttribute('class', 'charDivs card-back')
    pic.setAttribute('class', 'picDivs')    

    let pokeNum = getPokeNumber(single_pokemon.id)

    name.textContent = single_pokemon.name[0].toUpperCase()+single_pokemon.name.slice(1)
    
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`
    
    div1.appendChild(name)
    div2.appendChild(pic)

    pokeDiv.appendChild(div1)
    pokeDiv.appendChild(div2)

    card.appendChild(pokeDiv)
    card.appendChild(secondDivForFlip)

    scene.appendChild(card)
    mainArea.appendChild(scene)
    
    card.addEventListener( 'click', function() 
    {
        card.classList.toggle('is-flipped');
    });
    
}

function fillCardBack(secondDivForFlip, data)
{
    let type = document.createElement('h3')
    let pokeHP = document.createElement('h3')
    let move = document.createElement('h3')
    let height = document.createElement('h3')
    let weight = document.createElement('h3')
    type.textContent = `Type: ${data.types[0].type.name[0].toUpperCase()+data.types[0].type.name.slice(1)}`
    move.textContent = `Move: ${data.moves[0].move.name[0].toUpperCase()+data.moves[0].move.name.slice(1)}`
    pokeHP.textContent = `HP: ${data.stats[0].base_stat}`
    height.textContent = `Height: ${data.height}`
    weight.textContent = `Weight: ${data.weight}`
    secondDivForFlip.appendChild(type)
    secondDivForFlip.appendChild(move)
    secondDivForFlip.appendChild(pokeHP)
    secondDivForFlip.appendChild(height)
    secondDivForFlip.appendChild(weight)
}

function getPokeNumber(id)
{
    if(id < 10) return `00${id}`
    if(id > 9 && id < 100) 
    {
        return `0${id}`
    } else return id
}

