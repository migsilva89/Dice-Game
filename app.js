let dice = document.getElementById('dice')
let holdResult = document.getElementById('holdResult')
let actualResultPlayerOne = document.getElementById('actualResultPlayerOne')
let actualResultPlayerTwo = document.getElementById('actualResultPlayerTwo')
let totalResultPlayerOne = document.getElementById('totalResultPlayerOne')
let totalResultPlayerTwo = document.getElementById('totalResultPlayerTwo')
let playerOneContent = document.getElementById('playerOne')
let playerTwoContent = document.getElementById('playerTwo')
let waitingResult = []
let currentPlayer = "0"


function rollDice() {
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice.dataset.side = result;
    dice.classList.toggle("reRoll");
    
    if (result != 1) {
        waitingResult.push(result) 
    } else {
        changeBgCurrentPlayer(currentPlayer)
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

function changeBgCurrentPlayer (currentPlayer){
    if (currentPlayer == "0") {
        currentPlayer = "1"
        playerOneContent.classList.remove("bg-primary")
        playerOneContent.classList.remove("text-light")
        playerTwoContent.classList.add("bg-primary")
        playerTwoContent.classList.add("text-light")
    } else {
        currentPlayer = "0"
        playerTwoContent.classList.remove("bg-primary")
        playerTwoContent.classList.remove("text-light")
        playerOneContent.classList.add("bg-primary")
        playerOneContent.classList.add("text-light")
    }
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
        changeBgCurrentPlayer(currentPlayer)

        finalresultOne = parseInt(totalResultPlayerOne.textContent) + parseInt(actualResultPlayerOne.textContent)
        totalResultPlayerOne.textContent = finalresultOne

        if (finalresultOne >= 100) {
            alert("Player One WINS!!!!")
        } else {
            actualResultPlayerOne.textContent = "0"
            waitingResult = [0]
            currentPlayer = "1"
        }
        
    } else {
        changeBgCurrentPlayer(currentPlayer)

        finalresultTwo = parseInt(totalResultPlayerTwo.textContent) + parseInt(actualResultPlayerTwo.textContent)
        totalResultPlayerTwo.textContent = finalresultTwo

        if (finalresultTwo >= 100) {
            alert("Player Two WINS!!!!")
        } else {
            actualResultPlayerTwo.textContent = "0"
            waitingResult = [0]
            currentPlayer = "0"
        }
    }
})

dice.addEventListener("click", rollDice);