
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

var button20 = document.getElementById('d20');
var button4 = document.getElementById('d4');

button20.onclick = function() {
  rollAndPrint(20);
};

button4.onclick = function() {
  console.log(button4.value)
  rollAndPrint(4);
};

