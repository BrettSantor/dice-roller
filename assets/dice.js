const diceButton = document.querySelectorAll(".dice");
const diceTray = document.querySelector("#dice-tray");
const clearButton = document.getElementById('clearButton');
const totalBox = document.getElementById('total-box');

const vowels = "aeiou";
const consonants = "bcdfghjklmnpqrstvwxyz";
const syllables = ["ba", "zo", "ri", "qua", "bo", "lo", "ki", "mu", "ne", "te", "ve", "la", "ro", "ga", "ma", "pa", "co", "li", "nu", "ja", "mi", "si", "to", "le", "go", "wa", "ze", "vu", "ha", "ku", "fe", "yo", "xi", "do", "ru", "bi", "mo", "no", "ti", "ka", "pe", "si"];


let total = 0;

var dice = {
  roll: function(sides) {
    if (sides == 2) {
      var result = Math.random() < 0.5 ? "HEADS" : "TAILS";
      return result;
    } else {
      var randomNumber = Math.floor(Math.random() * sides) + 1;
      return randomNumber;
    }
  }
};

function printNumber(result, button) {
 const newDice = document.createElement('div');
 newDice.classList.add('dice', ...button.classList);

 const resultDiv = document.createElement('div');
 resultDiv.classList.add('result');
 resultDiv.textContent = result;
 newDice.appendChild(resultDiv);

 diceTray.appendChild(newDice);

if (typeof result === 'number'){
  total += result;
  totalBox.textContent = total
}

};

function rollAndPrint(sides, button) {
  var result = dice.roll(sides);
  printNumber(result, button);
};

diceButton.forEach(button => {
  button.addEventListener("click", function(){
    console.log(`d${button.value} was rolled`)
    rollAndPrint(button.value, button)
  });
});

clearButton.addEventListener('click', function() {
  // Select the dice tray
  const diceTray = document.getElementById('dice-tray');

  // Remove all child elements (dice) from the dice tray
  while (diceTray.firstChild) {
      diceTray.removeChild(diceTray.firstChild);
      total = 0;
      totalBox.textContent = total
  }
});


function generateRandomName() {
  const nameLength = Math.floor(Math.random() * 4) + 3; // Random name length between 2 and 4 syllables
  let randomName = "";

  for (let i = 0; i < nameLength; i++) {
    if (i === 0) {
      // Start with a consonant for realism
      randomName += consonants[Math.floor(Math.random() * consonants.length)];
    } else if (i % 2 === 1) {
      // Alternate vowels and consonants
      randomName += vowels[Math.floor(Math.random() * vowels.length)];
    } else {
      // Randomly select from the defined syllables
      randomName += syllables[Math.floor(Math.random() * syllables.length)];
    }
  }

  return randomName;
}

const randomness = generateRandomName()
console.log(randomness)