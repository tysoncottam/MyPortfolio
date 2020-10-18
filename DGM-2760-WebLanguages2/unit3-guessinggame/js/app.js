document.querySelector('#company-name').innerHTML = "Guessing Game"
document.querySelector('#welcomeMessage').innerHTML = "Guessing Game"

document.querySelector('#company-slogan').innerHTML = 'JS Loops'

let correctNumber = Math.floor(Math.random()*15)

let isGuessed = false
let totalGuesses = 0
let userGuess = 0
correctNumber+= 1

console.log(`The random number is ${correctNumber}`)

function evalGuess()
{
    //totalGuesses++
    userGuess = document.querySelector('#guess').value
    console.log(totalGuesses, userGuess)
    const feedback = document.querySelector('#feedback')
    userAttempts = document.querySelector('#attempts')
    //awardGiven = document.querySelector('#award')
    //userAttempts.innerHTML = totalGuesses
    
    if (userGuess == correctNumber)
        {
            feedback.innerHTML = 'correct, you win!'
            totalGuesses++
            userAttempts.innerHTML = totalGuesses
            awardMedal()
        }
    else if (userGuess > correctNumber && userGuess < 16)
        {
            feedback.innerHTML = 'too high, try again'
            totalGuesses++
            userAttempts.innerHTML = totalGuesses
        }
    else if (userGuess < correctNumber && userGuess > 0)
        {
            feedback.innerHTML = 'too low, try again'
            totalGuesses++
            userAttempts.innerHTML = totalGuesses
        }
    else
        {
            feedback.innerHTML = 'sorry try again, pick a number 1-15'
        }
    
}

function awardMedal()
{
    let imagePath = '#'
    switch (totalGuesses)
        {
            case 1:
            case 2:
            case 3:
                //awardGiven.innerHTML = 'gold'
                imagePath = 'images/goldmedal.png'
                break;
            case 4:
            case 5:
            case 6:
                //awardGiven.innerHTML = 'silver'
                imagePath = 'images/silvermedal.png'
                break;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                //awardGiven.innerHTML = 'bronze'
                imagePath = 'images/bronzemedal.png'
                break
        }
    
    const awardI = document.createElement('img')
    awardI.setAttribute('src', imagePath)
    const awardGiven = document.querySelector('#award')
    
    //let appendNum = 0
    //appendNum++
    
    awardGiven.appendChild(awardI)
}