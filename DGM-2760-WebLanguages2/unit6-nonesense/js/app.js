document.querySelector('#company-name').innerHTML = "Nonesense"
document.querySelector('#welcomeMessage').innerHTML = "Nonesense"

document.querySelector('#company-slogan').innerHTML = 'Mad Lib Stories'

function runMyFunction()
{
    let nounArray = []
    let adjArray = []
    let verbArray = []
    
    let entryNoun = document.querySelector('#user-noun-info')
    let lowerNoun = entryNoun.value.toLowerCase();
    let resultNoun = lowerNoun.split(/\s+/);
    
    let entryAdj = document.querySelector('#user-adj-info')
    let lowerAdj = entryAdj.value.toLowerCase();
    let resultAdj = lowerAdj.split(/\s+/);
    
    let entryVerb = document.querySelector('#user-verb-info')
    let lowerVerb = entryVerb.value.toLowerCase();
    let resultVerb = lowerVerb.split(/\s+/);
    
    for (let i = resultNoun.length - 1; i >= 0; i--)
        {
            nounArray.unshift(resultNoun[i])
        }
    
    for (let i = resultAdj.length - 1; i >= 0; i--)
        {
            adjArray.unshift(resultAdj[i])
        }
    
    for (let i = resultVerb.length - 1; i >= 0; i--)
        {
            verbArray.unshift(resultVerb[i])
        }
    
    console.log(nounArray)
    console.log(adjArray)
    console.log(verbArray)
    
    const myStory = `There once was a ${nounArray[0]} that lived in a ${nounArray[1]}. Everynight for dinner it ate a ${nounArray[2]} that smelled ${adjArray[0]}. It also loved ${adjArray[1]} ${nounArray[3]}, ${adjArray[2]} ${nounArray[4]}, and fields of snow. Yes you caught yourself in a wonderful ${nounArray[5]}. Now how will you ${verbArray[0]}? Remember to remember and then to wake. It was a ${adjArray[3]} ${verbArray[1]}. This is now your ${nounArray[6]}. You now ${verbArray[2]}.`
    
    const storyArea = document.querySelector('#story-area')
    
    storyArea.innerHTML = `${myStory}`;
}