let dice = document.getElementById('dice')
let holdResult = document.getElementById('holdResult')
let actualResultPlayerOne = document.getElementById('actualResultPlayerOne')
let actualResultPlayerTwo = document.getElementById('actualResultPlayerTwo')
let totalResultPlayerOne = document.getElementById('totalResultPlayerOne')
let totalResultPlayerTwo = document.getElementById('totalResultPlayerTwo')
let waitingResult = []
let currentPlayer = "0"

function rollDice() {
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice.dataset.side = result;
    dice.classList.toggle("reRoll");
    
    if (result != 1) {
        waitingResult.push(result) 
    } else {
        waitingResult = [0]
        if (currentPlayer == "0") {
            currentPlayer = "1"
        } else {
            currentPlayer = "0"
        }
    }  
    saveFinalResult(waitingResult, currentPlayer, result)
}

function sumResultsArr(result) {
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum
}

function saveFinalResult(waitingResult, activePlayer, result) {
    if (activePlayer == "0") {

        if (result != 1) {
            console.log(`player 1 and the number is ${result}`)
            actualResultPlayerOne.innerHTML = sumResultsArr(waitingResult)
        } else {
            console.log("YOU LOSE PLAYER 2")
            actualResultPlayerTwo.innerHTML = 0
        }

    } else {

        if (result != 1) {
            console.log(`player 2 and the number is ${result}`)   
            actualResultPlayerTwo.innerHTML = sumResultsArr(waitingResult)
        } else {
            console.log("YOU LOSE PLAYER 1")
            actualResultPlayerOne.innerHTML = 0
        }
    }
}


holdResult.addEventListener("click", function holdResult() {

    if (currentPlayer == "0") {
        console.log(actualResultPlayerOne.textContent)
        console.log(totalResultPlayerOne)
    } else {
        console.log(actualResultPlayerTwo.textContent)
        console.log(totalResultPlayerTwo)
        // teste branche
    }
    
})


dice.addEventListener("click", rollDice);