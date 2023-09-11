//todo toggable color schemes for dice and dice box
//todo change color of text to green or red on crit success or failure
//todo modal that shows the odds of rolls and the different possible coin faces
//! give dice outlines to look more like dice
//todo modal for text input for multiple dice per roll
//?dice sounds


const diceButton = document.querySelectorAll(".dice");
const diceTray = document.querySelector("#dice-tray");
const clearButton = document.getElementById('clearButton');
const totalBox = document.getElementById('total-box');
const nameButton = document.getElementById('nameGenerator')
const nameBox = document.getElementById('name')
const coinImage = document.querySelector('.coin');
const diceModal = document.getElementById('diceModal');
const multiDice = document.getElementById('multiDice');
const closeModal = document.querySelector(".close")

let isCoinShiny = false

const vowels = "aeiou";
const consonants = "bcdfghjklmnpqrstvwxyz";
const syllables = ["ba", "zo", "ri", "qua", "bo", "lo", "ki", "mu", "ne", "te", "ve", "la", "ro", "ga", "ma", "pa", "co", "li", "nu", "ja", "mi", "poo", "si", "to", "le", "go", "wa", "ze", "vu", "ha", "ku", "fe", "yo", "xi","ski", "do", "ru", "bi", "mo", "no", "ti", "ka", "pe", "si", "meh"];


let total = 0;

var dice = {
  roll: function(sides) {
    if (sides == 2) {
      const shouldBecomeShiny = Math.random() < 0.0244;

      if (shouldBecomeShiny) {
        isCoinShiny = true;
        coinImage.classList.add('shiny');
      } else {
        isCoinShiny = false;
        coinImage.classList.remove('shiny');
      }

      var result = Math.random() < 0.5 ? "heads" : "tails";
      console.log(result)
      coinImage.classList.remove("heads", "tails");
      coinImage.classList.add( result);
      return result;
    } else {
      var randomNumber = Math.floor(Math.random() * sides) + 1;
      return randomNumber;
    }
  }
};

function printNumber(result, button) {
 const newDice = document.createElement('div');
 if(!button.classList.contains('coin')) {
   
   newDice.classList.add('dice', ...button.classList);
 } else if(button.classList.contains('coin') && isCoinShiny) {
  newDice.classList.add('shiny', 'coin', ...button.classList)
 } else {
  newDice.classList.add('coin', ...button.classList)
 };

if(!button.classList.contains('coin')) {
 const resultDiv = document.createElement('span');
 resultDiv.classList.add('result');
 resultDiv.textContent = result;
 newDice.appendChild(resultDiv);
}

 diceTray.appendChild(newDice);

if (typeof result === 'number'){
  total += result;
  totalBox.textContent = `Total: ${total}`
}

};

function rollAndPrint(sides, button) {
  var result = dice.roll(sides);
  printNumber(result, button);
};

diceButton.forEach(button => {
  button.addEventListener("click", function(e){
    console.log('this is for buttons only!')
    e.stopPropagation();
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
      totalBox.textContent = `Total: ${total}`
  }
});

coinImage.addEventListener('click', function(e) {
  e.stopPropagation();
  rollAndPrint(2, coinImage)
});

multiDice.addEventListener("click", function(e){
  e.stopPropagation();
  diceModal.style.display = "block";
});

multiDice.addEventListener("mouseover", function () {
  const randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);

  const style = document.createElement("style");

  style.innerHTML = `
    #multiDice {
      box-shadow: 0 0 10px ${randomColor};
    }
  `;
  document.head.appendChild(style);
});

multiDice.addEventListener("mouseout", function () {
  const style = document.querySelector("style");
  if (style) {
    style.remove();
  }
});

closeModal.addEventListener("click", function(e){
  e.stopPropagation();
  diceModal.style.display = "none";
});

window.addEventListener("click", function(event){
  if (event.target === diceModal) {
    diceModal.style.display = "none";
  }
});

document.getElementById("rollDiceButt").addEventListener("click", function(){
  const diceCount = document.getElementById("diceCount").value ;
  const sides = document.getElementById("sides").value;

  if (!isNaN(diceCount) && !isNaN(sides) && diceCount > 0 && sides >= 2){
    for (let i = 0; i < diceCount; i++) {
      const result = dice.roll(sides);
      const newDice = document.createElement('div');
      if (sides == 2) {
        if (result === "heads") {
          newDice.classList.add('coin', 'heads');
        } else {
          newDice.classList.add('coin', 'tails');
        }
      } else {
        newDice.classList.add('dice', `d${sides}`);
      }
      printNumber(result, newDice);
    }
  } else {
    alert("Please enter at least 1 dice of at least 2 sides");
  }
  diceModal.style.display = "none";
});


function generateRandomName() {
  const nameLength = Math.floor(Math.random() * 4) + 3; // Random name length between 2 and 4 syllables
  let randomName = "";

  for (let i = 0; i < nameLength; i++) {
    if (i === 0) {
      // Start with a consonant for realism
      randomName += consonants[Math.floor(Math.random() * consonants.length)].toUpperCase();
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

nameButton.addEventListener('click', function() {
  
  const randomness = generateRandomName()

  nameBox.textContent = `Random Name: ${randomness}`
 
});