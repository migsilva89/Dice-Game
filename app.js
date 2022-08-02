let dice = document.getElementById('dice');
var outputDiv = document.getElementById('diceResult');
var finalResult = []

function rollDice() {
   
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice.dataset.side = result;
    dice.classList.toggle("reRoll");

    finalResult.push(result)
    outputDiv.classList.remove("reveal");
    outputDiv.classList.add("hide");
    outputDiv.innerHTML = "You've got " + result;

    let sum = 0;

    for (let i = 0; i < finalResult.length; i++) {
        sum += finalResult[i];
    }
    console.log(sum, finalResult);

    setTimeout(function(){ outputDiv.classList.add("reveal"); }, 1500);
}

dice.addEventListener("click", rollDice);

