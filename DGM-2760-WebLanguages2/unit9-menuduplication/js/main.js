function duplicateMenu()
{
    let smallArea = document.querySelector('#smallNavArea')
    let topList = document.querySelectorAll('ul#primaryNavigation li a')
    let newList = document.createElement('ul')

    topList.forEach(menuItem =>{
        let newLI = document.createElement('li')
        let newLink = document. createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        newLink.innerHTML = menuItem.innerHTML
        
        newLI.appendChild(newLink)
        newList.appendChild(newLI)
        
    })
    smallArea.appendChild(newList)
}

duplicateMenu()