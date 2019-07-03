var goal = 0;
var currNum = 0;

var wins = 0;
var losses = 0;

var crystal = {
  lblue: {
    name: "lblue",
    value: 10
  },
  blue: {
    name: "blue",
    value: 0
  },
  green: {
    name: "green",
    value: 15
  },
  purp: {
    name: "purp",
    value: 0
  }
};

$("#lblue").click(() => {
  console.log(crystal.lblue.value);
  addValue(crystal.lblue.value);
  check();
});

$("#blue").click(() => {
  console.log(crystal.blue.value);
  addValue(crystal.blue.value);
  check();
});

$("#green").click(() => {
  console.log(crystal.green.value);
  addValue(crystal.green.value);
  check();
});

$("#purp").click(() => {
  console.log(crystal.purp.value);
  addValue(crystal.purp.value);
  check();
});

function showNum() {
  $("#currentNumber").html(currNum);
}

function showGoal() {
$("#randomNumber").html(goal);
}

function addValue(crystal) {
  currNum += crystal;
  console.log(currNum);
}
function newGoal() {
  return Math.floor(Math.random() * 101) + 19;
}

function resetGoal() {
  goal = newGoal();
  showGoal();
  console.log(goal);
}
function resetCurrNum() {
  currNum = 0;
  showNum();
}
function newCrystalValue() {
  return Math.floor(Math.random() * 11) + 1;
}

function resetCrystals() {
  crystal.lblue.value = newCrystalValue();
  crystal.blue.value = newCrystalValue();
  crystal.green.value = newCrystalValue();
  crystal.purp.value = newCrystalValue();
  console.log(crystal.lblue.value);
  console.log(crystal.blue.value);
  console.log(crystal.green.value);
  console.log(crystal.purp.value);
}
function resetGame() {
  resetGoal();
  resetCrystals();
  resetCurrNum();
}

$("#testbutton").click(() => {
  console.log("clicked");
  resetGame();
});

$().ready(() => {
  console.log("docready");
  resetGame();
});

function check() {
  showNum();
  if (currNum > goal) {
    console.log("you lose");
    resetGame();
  }
  if (currNum === goal) {
    console.log("you win");
    resetGame();
  }
}
