//gets every div with the .card class
const gameArea = document.querySelectorAll(".card");
//Sets the initial turn to 0 for random team starter
var initialTurn = 0;
//turn one is red, turn two is blue always starts at 0
var turn = 0;
//gets the buttons div
const gameButtons = document.getElementById("buttons");
//gets the turn button
const start = document.getElementById("start");
//gets the red team
const redTeam = document.getElementById("red");
//gets the blue team
const blueTeam = document.getElementById("blue");
//gets the spy master button
const spyGrid = document.getElementById("spyMaster");
//gets the end button
const end = document.getElementById("end");
//gets all the cards
const cards = document.getElementsByClassName("card");
// index for every div
let index = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];

spyGrid.addEventListener("click", function () {
  let indexList = index;
  var number = 0;

  for (let i = 0; i < 9; i++) {
    const random = Math.floor(Math.random() * indexList.length);
    console.log(random);
    number = indexList[random];
    console.log(indexList);
    indexList.splice(random, 1);
    console.log("test " + number);
    cards[number].style.backgroundColor = "red";
  }
  for (let i = 0; i < 8; i++) {
    const random = Math.floor(Math.random() * indexList.length);
    console.log(random);
    number = indexList[random];
    console.log(indexList);
    indexList.splice(random, 1);
    console.log("test " + number);
    cards[number].style.backgroundColor = "blue";
  }
});
// spyMaster();

//random number generator for who starts
start.addEventListener("click", function () {
  initialTurn = Math.floor(Math.random() * 2) + 1;
  turn = initialTurn;
  start.style.display = "none";
  gameButtons.style.display = "block";
  redTeam.style.display = "none";
  blueTeam.style.display = "none";
  if (turn == 1) {
    redTeam.style.display = "block";
    redTeam.style.color = "red";
    gameArea.forEach((div) => {
      div.addEventListener("click", function () {
        div.style.backgroundColor = "red";
      });
    });
  } else {
    blueTeam.style.display = "block";
    blueTeam.style.color = "blue";
    gameArea.forEach((div) => {
      div.addEventListener("click", function () {
        div.style.backgroundColor = "blue";
      });
    });
  }
});

// end turn function
end.addEventListener("click", function () {
  if (turn == 1) {
    turn = 2;
    redTeam.style.display = "none";
    blueTeam.style.display = "block";
    blueTeam.style.color = "blue";
    gameArea.forEach((div) => {
      div.addEventListener("click", function () {
        div.style.backgroundColor = "blue";
      });
    });
  } else {
    turn = 1;
    blueTeam.style.display = "none";
    redTeam.style.display = "block";
    redTeam.style.color = "red";
    gameArea.forEach((div) => {
      div.addEventListener("click", function () {
        div.style.backgroundColor = "red";
      });
    });
  }
});
