const diceButton = document.querySelectorAll(".dice");
const diceTray = document.querySelector("#dice-tray");

var dice = {
  roll: function(sides) {
    if (sides == 2) {
      var result = Math.random() < 0.5 ? "heads" : "tails";
      return result;
    } else {
      var randomNumber = Math.floor(Math.random() * sides) + 1;
      return randomNumber;
    }
  }
};

function printNumber(result) {
 const newDice = document.createElement('div');
 newDice.classList.add('dice');

 const resultDiv = document.createElement('div');
 resultDiv.classList.add('result');
 resultDiv.textContent = `Result: ${result}`;
 newDice.appendChild(resultDiv);

 diceTray.appendChild(newDice);
};

function rollAndPrint(sides) {
  var result = dice.roll(sides);
  printNumber(result);
};

diceButton.forEach(button => {
  button.addEventListener("click", function(){
    console.log(`d${button.value} was rolled`)
    rollAndPrint(button.value)
  });
});