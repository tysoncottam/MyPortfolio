document.querySelector('#company-name').innerHTML = "Pizza"
document.querySelector('#welcomeMessage').innerHTML = "Pizza"

document.querySelector('#company-slogan').innerHTML = 'Literal Objects'

let message 

const pizza = 
{
    size: 'large',
    crust: 'thick', 
    topping: 'pepperoni',
    orderPizza: () =>
    {
        console.log('orderPizza method has been called')
        message = `Thank you for ordering!<br>We are baking your ${pizza.size} pizza with ${pizza.crust} crust with ${pizza.topping}.`
        document.querySelector('#message-back').innerHTML = message
    },
    shoppingList: () =>
    {
        let flour = 2
        let pound = 2
        if (pizza.crust === 'thick' && pizza.size === 'large') flour *= 3
        else if (pizza.crust === 'thick' && pizza.size === 'small') flour *= 2
        else if (pizza.crust === 'thin' && pizza.size === 'large') flour *= 2
        else if (pizza.crust === 'thin' && pizza.size === 'small') flour *= 1
        
        if (pizza.size === 'large') pound *= 2
        else if (pizza.size === 'small') pound *= 1
        
        message = `Pizza Recipe: <br><br> Flour: ${flour} Cups <br> Topping: ${pizza.topping}- ${pound} lbs`
        document.querySelector('#message-back').innerHTML = message
    }
}

document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')
document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')


document.querySelector('#order-now').addEventListener('click', pizza.orderPizza)
document.querySelector('#view-recipe').addEventListener('click', pizza.shoppingList)