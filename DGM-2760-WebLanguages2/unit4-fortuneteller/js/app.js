document.querySelector('#company-name').innerHTML = "Fortune Teller"
document.querySelector('#welcomeMessage').innerHTML = "Fortune Teller"

document.querySelector('#company-slogan').innerHTML = 'Let me tell you your destiny'


function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function getMonthName(monthPicked)
{
    let nameofMonth
    switch (monthPicked)
        {
            case 1:
                nameofMonth = "January"
                break
            case 2:
                nameofMonth = "February"
                break
            case 3:
                nameofMonth = "March"
                break
            case 4:
                nameofMonth = "April"
                break
            case 5:
                nameofMonth = "May"
                break
            case 6:
                nameofMonth = "June"
                break
            case 7:
                nameofMonth = "July"
                break
            case 8:
                nameofMonth = "August"
                break
            case 9:
                nameofMonth = "September"
                break
            case 10:
                nameofMonth = "October"
                break
            case 11:
                nameofMonth = "November"
                break
            case 12:
                nameofMonth = "December"
                break
            default:
                nameofMonth = "Not a month"
                break
        }
    return nameofMonth
    console.log(nameofMonth)
}

function getFortune(fate)
{
    let message
    switch (fate)
        {
            case 1:
                message = 'luck will be on your side.'
                break
            case 2:
                message = 'remember to brush your teeth.'
                break
            case 3:
                message = 'give your best friend a hug'
                break
            case 4:
                message = 'remember to brush your teeth'
                break
            case 5:
                message = 'remember to clean your room.'
                break
            case 6:
                message = 'go to the park for two hours.'
                break
            case 7:
                message = 'build a new product to change the world.'
                break
            case 8:
                message = 'have a slice of cake.'
                break
            case 9:
                message = 'give Mark a high five.'
                break
            case 10:
                message = 'tell your mother you love her.'
                break
            case 11:
                message = 'bike to work.'
                break
            case 12:
                message = 'buy a kitten.'
                break
            default:
                message = 'some sort of error occured'
                break
        }
    return message
    console.log(message)
}

let fate = getRandomInt(1,12)
let dayOfMonth = getRandomInt(1,30)
let monthPicked = getRandomInt(1,12)
const monthName = getMonthName(monthPicked)
const fateName = getFortune(fate)

const fortuneRevealed = `On ${monthName} ${dayOfMonth}, you will ${fateName}`

document.querySelector('#fortune').innerText = fortuneRevealed