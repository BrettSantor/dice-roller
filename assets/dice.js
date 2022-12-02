var dice = {
    sides: 20,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

//Prints dice roll to page

function printNumber(number) {
    var hexagon = document.getElementById('hexagon');
    hexagon.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
}