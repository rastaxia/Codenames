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
const redTeam = document.getElementById("turnRed");
//gets the blue team
const blueTeam = document.getElementById("turnBlue");
//gets the spy master button
const spyMaster = document.getElementById("spyMaster");
//gets the end button
const end = document.getElementById("end");
//gets all the cards
const cards = document.getElementsByClassName("card");
// index for every div
let index = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];
//gets the clicked button
var clicked = 0;

initialTurn = Math.floor(Math.random() * 2) + 1;

spyMaster.addEventListener("click", function () {
clicked++;
let indexList = index;
var number = 0;
switch (clicked) {
  case 1:
    spyMaster.innerHTML = "Hide cards";
    if (initialTurn == 1) {
      for (let i = 0; i < 9; i++) {
        const random = Math.floor(Math.random() * indexList.length);
        number = indexList[random];
        indexList.splice(random, 1);
        cards[number].style.backgroundColor = "red";
        cards[number].setAttribute("id", "red");
        
      }
      for (let i = 0; i < 8; i++) {
        const random = Math.floor(Math.random() * indexList.length);
        number = indexList[random];
        indexList.splice(random, 1);
        cards[number].style.backgroundColor = "blue"; 
        cards[number].setAttribute("id", "blue");
      }
    } else {
      for (let i = 0; i < 9; i++) {
        const random = Math.floor(Math.random() * indexList.length);
        number = indexList[random];
        indexList.splice(random, 1);
        cards[number].style.backgroundColor = "blue";
        cards[number].setAttribute("id", "blue");
      }
      for (let i = 0; i < 8; i++) {
        const random = Math.floor(Math.random() * indexList.length);
        number = indexList[random];
        indexList.splice(random, 1);
        cards[number].style.backgroundColor = "red";
        cards[number].setAttribute("id", "red");
      }
    }
    const random = Math.floor(Math.random() * indexList.length);
      number = indexList[random];
      indexList.splice(random, 1);
      cards[number].style.backgroundColor = "black";
      cards[number].setAttribute("id", "black");
    break;

  case 2:
    spyMaster.innerHTML = "Show cards Cards";
    for (let i = 0; i < 25; i++) {
      cards[i].style.backgroundColor = "#fec597";
    }
    clicked = 2;
  break;

    case 3:
      spyMaster.innerHTML = "Hide cards";
      const  redCards = document.querySelectorAll("#red");
      const  blueCards = document.querySelectorAll("#blue");
      const  blackCards = document.querySelectorAll("#black");
      redCards.forEach((div) => {
        div.style.backgroundColor = "red";
      });
      blueCards.forEach((div) => {
        div.style.backgroundColor = "blue";
      });
      blackCards.forEach((div) => {
        div.style.backgroundColor = "black";
      });
      clicked = 1;
    break;
}
});


turn = initialTurn;

var scoreRed = 0;
var scoreBlue = 0;

console.log(turn + " test");
//random number generator for who starts
start.addEventListener("click", function () {
  start.style.display = "none";
  gameButtons.style.display = "block";
  redTeam.style.display = "none";
  blueTeam.style.display = "none";

switch (turn) {
  case 1: 
  console.log(turn + " test");
  redTeam.style.display = "block";
  redTeam.style.color = "red";
  gameArea.forEach((div) => {
    div.addEventListener("click", function () {
      if(this.id == "red"){
        alert("Correct");
        this.style.display = "none";
        scoreRed++;
        console.log(scoreRed+ " red");
      }
      else if(this.id == "black"){
        alert("Game Over");
        cards.display = "none";
        alert("Blue Team wins");
        document.location.reload(true);
      }
      else if(this.id == "blue"){
        alert("Wrong");
        this.style.display = "none";
        scoreBlue++;
        console.log(scoreBlue+ " blue from red");
        endTurn();
      }
      else{
        alert("Wrong");
        this.style.backgroundColor = "white ";
        this.setAttribute("id", "white");
        endTurn();
      }
      
    });
});
break;
case 2:

 break;
}

  
});


function endTurn() {
  if (turn == 1) {
    turn = 2;
    redTeam.style.display = "none";
    blueTeam.style.display = "block";
    blueTeam.style.color = "blue";
  } else {
    turn = 1;
    blueTeam.style.display = "none";
    redTeam.style.display = "block";
    redTeam.style.color = "red";
     }
}


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
  }
);

// function redGo(){
//   console.log(turn);
//     redTeam.style.display = "block";
//     blueTeam.style.display = "none";
//     redTeam.style.color = "red";
//     if (turn == 1) {
//       gameArea.forEach((div) => {
//         div.addEventListener("click", function () {
//           if(this.id == "red"){
//           alert("Correct");
//             this.style.display = "none";
//             scoreRed++;
//             console.log(scoreRed);
//           }else if(this.id == "black"){
//           alert("Game Over");
//           gameArea.display = "none";
//           }
//           else{
//             alert("Wrong");
//             turn = 2;
//             blueGo();
//             console.log("I am done");
//           }
//         });
//       });
//     }
//     else turn = 2;
// }

// function blueGo(){
//   console.log(turn);
//     blueTeam.style.display = "block";
//     redTeam.style.display = "none";
//     blueTeam.style.color = "blue";
//     if (turn ==2 ){
//       gameArea.forEach((div) => {
//         div.addEventListener("click", function () {
//           if(this.id == "blue"){
//           alert("Correct");
//             this.style.display = "none";
//             scoreBlue++;
//             console.log(scoreBlue);
//           }else if(this.id == "black"){
//             alert("Game Over");
//             gameArea.display = "none";
//             }
//             else{
//               alert("Wrong");
//               turn = 1;
//               redGo();
//               console.log("I am done too");
//             }
//         });
//       });
//     }
// }
