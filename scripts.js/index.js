
//creating of variable
let count = 0
let named = 'car counter app'
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let welcomeEL = document.getElementById('welcome-el')

//rendering welcome messages
welcomeEL.textContent = named


function increment(){
    count +=1
    countEl.textContent = count
    

}

function save(){
    let prev = count + " - "
    saveEl.textContent +=prev
    count = 0
    countEl.textContent = 0

}
////////////////////bounspoint to give 10 as a result/////////////////////
// let myPoints = 3
// function add3Points(){
//     myPoints+=3

// }
// function remove1Point(){
//    myPoints-=1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)




