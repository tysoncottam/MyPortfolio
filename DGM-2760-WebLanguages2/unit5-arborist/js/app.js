document.querySelector('#company-name').innerHTML = "Arborist"
document.querySelector('#welcomeMessage').innerHTML = "Arborist"

document.querySelector('#company-slogan').innerHTML = 'Trees & More Trees'

let treesArray = ['oak','Pine','aspen','Bald Cypress']
const errorElement = document.querySelector('#displayError')
const displayResults = document.querySelector('#displayTrees')

const listTrees = () => 
{
    let treeList = ''
    treesArray.forEach(tree =>
    {
        treeList += `${tree} <br> <br>`
        //newT = treeList.toLowerCase()
    })
    displayResults.innerHTML = `${treeList} <br> <span>(${treesArray.length} elements long)</span>`
}

listTrees()

// REDWOOD
document.querySelector('#add-redwood').onclick = () => 
{
    treesArray.push('redwood')
    listTrees()
    errorElement.innerHTML = ``
}

// PEAR
document.querySelector('#add-pear').onclick = () => 
{
    treesArray.unshift('Pear')
    listTrees()
    errorElement.innerHTML = ``
}

// REMOVE FIRST
document.querySelector('#remove-first').onclick = () => 
{
    if (treesArray.length > 0)
        {
            treesArray.shift()
            listTrees()
            errorElement.innerHTML = ``
        }
    else
        {
            errorElement.innerHTML = `Error Code: 31AC <br><br> Cannot remove. Array length is zero. <br>`
        }
}

// REMOVE SECOND
document.querySelector('#remove-second').onclick = () => 
{
    if (treesArray.length > 1)
        {
            treesArray.splice(1, 1)
            listTrees()
            errorElement.innerHTML = ``
        }
    else
        {
            errorElement.innerHTML = `Error Code: 73UL <br><br> Cannot remove. Array length is less than 2. <br>`
        }
}

// REMOVE LAST
document.querySelector('#remove-last').onclick = () => 
{
    if (treesArray.length > 0)
        {
            treesArray.pop()
            listTrees()
            errorElement.innerHTML = ``
        }
    else
        {
            errorElement.innerHTML = `Error Code: 31AC <br><br> Cannot remove. Array length is zero. <br>`
        }
}

// SORT ALPHABETICAL
document.querySelector('#sort-alphabet').onclick = () => 
{
    treesArray.sort()
    listTrees()
    errorElement.innerHTML = ``
}

// LOWERCASE
document.querySelector('#make-lowercase').onclick = () => 
{
    treesArray = treesArray.map(function(x){
        return x.toLowerCase()
    })
    listTrees()
    errorElement.innerHTML = ``
}

// NAME OF 3RD ITEM
document.querySelector('#name-of-num-3').onclick = () => 
{
    if (treesArray.length > 2)
        {
            let thridTree = treesArray[2]
            errorElement.innerHTML = `The 3rd tree is ${thridTree}`
        }
    else
        {
            errorElement.innerHTML = `Error Code: 61BB <br><br> Cannot find 3rd tree. Array length is too small. <br>`
        }
}

// NAME OF 4TH ITEM
document.querySelector('#name-of-num-4').onclick = () => 
{
    if (treesArray.length > 3)
        {
            let fourthTree = treesArray[3]
            errorElement.innerHTML = `The 4th tree is ${fourthTree}`
        }
    else
        {
            errorElement.innerHTML = `Error Code: 12NN <br><br> Cannot find 4th tree. Array length is too small. <br>`
        }
}