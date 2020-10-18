document.querySelector('#company-name').innerHTML = "Grant's Tomb"
document.querySelector('#welcomeMessage').innerHTML = "Grant's Tomb"

document.querySelector('#company-slogan').innerHTML = 'Literal Objects'

const question =
{
    stem: "Who is buried in Grant's Tomb?",
    option1: "Tom",
    option2: "Grant",
    option3: "Brad",
    option4: "Tomb",
    correct: 2,
    display: () =>
    {
        document.querySelector('#stem').textContent = question.stem
        document.querySelector('#answer1').textContent = question.option1
        document.querySelector('#answer2').textContent = question.option2
        document.querySelector('#answer3').textContent = question.option3
        document.querySelector('#answer4').textContent = question.option4
    },
    checkAnswer: (userChoice) => 
    {
        if (userChoice === question.correct) 
            {
                document.querySelector('.feedback').textContent = "Correct, you win!"
            }
        else 
            {
                document.querySelector('.feedback').textContent = "Incorrect. Try again."
            }
    }
}

document.querySelector('#answer1').addEventListener('click', () => question.checkAnswer(1))
document.querySelector('#answer2').addEventListener('click', () => question.checkAnswer(2))
document.querySelector('#answer3').addEventListener('click', () => question.checkAnswer(3))
document.querySelector('#answer4').addEventListener('click', () => question.checkAnswer(4))

question.display()