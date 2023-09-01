
  var dice = {
  roll: function(sides) {
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
  }
};

function printNumber(number) {
  var placeholder = document.getElementById('hexagon');
  hexagon.innerHTML = number;
}

function rollAndPrint(sides) {
  var result = dice.roll(sides);
  printNumber(result);
}

var button20 = document.getElementById('button20');
var button4 = document.getElementById('button4');

button20.onclick = function() {
  rollAndPrint(20);
};

button4.onclick = function() {
  rollAndPrint(4);
};

buttonCustom.onclick = function() {
  var customSides = parseInt(prompt('Enter the number of sides for the custom dice:'));
  if (!isNaN(customSides)) {
    rollAndPrint(customSides);
  } else {
    alert('Invalid input. Please enter a valid number of sides.');
  }
};
