/////////click on a purchase button to display error messasage////////////////
let errorEl = document.getElementById('error')
let errorMessage = 'Something wewrong please try again '

function purchase(){
    errorEl.textContent = errorMessage

}


////////////////////////////////calculator//////////////////////////
let num1 = 8
let num2 = 2

document.getElementById('num1_el').textContent = num1 
document.getElementById('num2_el').textContent = num2
let resultEl = document.getElementById('result-el')

function add(){
   let sum = num1 + num2
   resultEl.textContent+= sum
    
}
function subtract(){ 
  let result = num1 - num2
   resultEl.textContent+=result
}
function multiply(){
  let  result = num1 * num2
    resultEl.textContent+=result
}
function divide(){
   let result = num1 / num2
    resultEl.textContent+=result
}


/////////////////////blackjack game///////////////////////////////

// let firstCard = getRandomCard()///creating variable with random number between 2-11
// let secondCard = getRandomCard()
// creating an array of cards
let player = {
    name: 'kola',
    chip: 159
}
let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
/// get html element by id 
let messageEl = document.getElementById('message-el')
let cardEl = document.getElementById('card-el')
let sumEl = document.getElementById('sum-el') 
let newCardEl = document.getElementById('newcard')
let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name +': ' + '$' + player.chip 
 
function getRandomCard(){
    // if 1  -> return 11 
    // if 11-13  -> return 10
    let randomNumber = Math.floor(Math.random() * 13) + 1  // 1-13 
    
    if (randomNumber > 10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}
function startGame(){  // creating start game function and calling rendergame inside
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [ firstCard , secondCard]
    sum = firstCard + secondCard
    

    renderGame()

}

function renderGame(){
    // // render out firstcard and secondcard --- cards
    cardEl.textContent = 'Cards: '
    //creating a for loop that render out the cards 

    for (let i=0; i < cards.length; i++){
        cardEl.textContent += cards[i] + ' '
    }
     
    //render out all the card

    sumEl.textContent = 'sum: '+ sum


    if (sum <= 20){
        message = 'Do you want to draw a new card?'
     }else if( sum === 21){
        message = "You've won a black-jack "
         hasBlackJack = true
     }else{
         message = "You're out of the game"
         isAlive = false
     }
    
    messageEl.textContent = message
   
}

function newCard(){

    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
    
        renderGame()
    }
}
    


 