var mysterynumber = 0;
var currNumber = 0;

var wins = 0;
var losses = 0;


var crystal={
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

$("#lblue").click( ()=> {
    console.log(crystal.lblue.value);
    addValue(crystal.lblue.value);
})

$("#blue").click(() => {
  console.log("blue");
  console.log(crystal.blue.value);
  addValue(crystal.blue.value);
});

$("#green").click(() => {
  console.log(crystal.green.value);
  addValue(crystal.green.value);
});

$("#purp").click(() => {
  console.log(crystal.purp.value);
  addValue(crystal.purp.value);
});

function randomCrystalNum(){
    return Math.floor(Math.random() * (101)) + 19;
}
function randomGoalNum(){
    return Math.floor(Math.random() * (11)) + 1;
}
console.log(randomGoalNum());
