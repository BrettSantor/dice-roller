var dice = {
    twsides: 20,
    frsides: 4,
    roll20: function () {
      var randomNumber = Math.floor(Math.random() * this.twsides) + 1;
      return randomNumber;
    },
    roll4: function () {
      var randomNumber = Math.floor(Math.random() * this.frsides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('hexagon');
    hexagon.innerHTML = number;
  }
  
  var button20 = document.getElementById('button20');
  var button4 = document.getElementById('button4');
  
  button20.onclick = function() {
    var result = dice.roll20();
    printNumber(result);
  };
  button4.onclick = function() {
    var result = dice.roll4();
    printNumber(result);
  };