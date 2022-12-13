//gets every div with the .card class
const gameArea = document.querySelectorAll(".card");
//Sets the initial turn to 0 for random team starter
var initialTurn = Math.floor(Math.random() * 2) + 1;
//turn one is red, turn two is blue always starts at 0
var turn = initialTurn;
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
//spy master button
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
        for (let i = 0; i < 7; i++) {
          const random = Math.floor(Math.random() * indexList.length);
          number = indexList[random];
          indexList.splice(random, 1);
          cards[number].setAttribute("id", "neutral ");
          cards[number].style.backgroundColor = "white";
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
        for (let i = 0; i < 7; i++) {
          const random = Math.floor(Math.random() * indexList.length);
          number = indexList[random];
          indexList.splice(random, 1);
          cards[number].setAttribute("id", "neutral ");
          cards[number].style.backgroundColor = "white";
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
      const redCards = document.querySelectorAll("#red");
      const blueCards = document.querySelectorAll("#blue");
      const blackCards = document.querySelectorAll("#black");
      const neutralCards = document.querySelectorAll("#neutral");
      console.log(neutralCards);
      redCards.forEach((div) => {
        div.style.backgroundColor = "red";
      });
      blueCards.forEach((div) => {
        div.style.backgroundColor = "blue";
      });
      blackCards.forEach((div) => {
        div.style.backgroundColor = "black";
      });
      neutralCards.forEach((div) => {
        div.style.backgroundColor = "white";
      });
      clicked = 1;
      break;
  }
});

// Everything to do with the scores
var scoreRed = 0;
var scoreBlue = 0;
const redScore = document.getElementById("redScore");
const blueScore = document.getElementById("blueScore");

//start function for the game
start.addEventListener("click", function () {
  start.style.display = "none";
  gameButtons.style.display = "block";
  redTeam.style.display = "none";
  blueTeam.style.display = "none";

  if (turn == 1) {
    redTeam.style.display = "block";
    redTeam.style.color = "red";
  } else {
    blueTeam.style.display = "block";
    blueTeam.style.color = "blue";
  }
});

gameArea.forEach((div) => {
  div.addEventListener("click", function () {
    //////////////////////
    //
    //red start//
    //
    //////////////////////
    if (initialTurn == 1) {
      if (turn == 1 && this.id == "red") {
        alert("Correct");
        this.style.display = "none";
        scoreRed++;
        redScore.innerHTML = scoreRed;
      } else if (turn == 1 && this.id == "blue") {
        alert("Wrong team");
        scoreBlue++;
        this.style.display = "none";
        blueScore.innerHTML = scoreBlue;
        turn = 2;
        console.log(turn);
        redTeam.style.display = "none";
        blueTeam.style.display = "block";
        blueTeam.style.color = "blue";
      } else if (turn == 1 && this.id == "neutral") {
        alert("wrong");
        this.style.display = "none";
        redTeam.style.display = "none";
        blueTeam.style.display = "block";
        blueTeam.style.color = "blue";
      } else if (turn == 2 && this.id == "blue") {
        alert("Correct");
        this.style.display = "none";
        scoreBlue++;
        blueScore.innerHTML = scoreBlue;
      } else if (turn == 2 && this.id == "red") {
        alert("Wrong team");
        this.style.display = "none";
        scoreRed++;
        redScore.innerHTML = scoreRed;
        turn = 1;
        console.log(turn);
        redTeam.style.display = "block";
        blueTeam.style.display = "none";
        redTeam.style.color = "red";
      } else if (turn == 2 && this.id == "neutral") {
        alert("Wrong");
        this.style.display = "none";
        redTeam.style.display = "block";
        blueTeam.style.display = "none";
        redTeam.style.color = "red";
      } else if (this.id == "black" && turn == 1) {
        alert("Game over");
        alert("Blue wins");
        document.location.reload(true);
      } else if (this.id == "black" && turn == 2) {
        alert("Game over");
        alert("Red wins");
        document.location.reload(true);
      }
      if (scoreRed == 9) {
        alert("Red team wins");
        location.reload();
      } else if (scoreBlue == 8) {
        alert("Blue team wins");
        location.reload();
      }
    }
    /////////////////
    //
    //blue start//
    //
    /////////////////
    else if (initialTurn == 2) {
      if (turn == 1 && this.id == "red") {
        alert("correct");
        this.style.display = "none";
        scoreRed++;
        redScore.innerHTML = scoreRed;
      } else if (turn == 1 && this.id == "blue") {
        alert("Wrong team");
        scoreBlue++;
        this.style.display = "none";
        blueScore.innerHTML = scoreBlue;
        turn = 2;
        console.log(turn);
        redTeam.style.display = "none";
        blueTeam.style.display = "block";
        blueTeam.style.color = "blue";
      } else if (turn == 2 && this.id == "blue") {
        alert("Correct");
        this.style.display = "none";
        scoreBlue++;
        blueScore.innerHTML = scoreBlue;
      } else if (turn == 2 && this.id == "red") {
        alert("Wrong team");
        this.style.display = "none";
        scoreRed++;
        redScore.innerHTML = scoreRed;
        turn = 1;
        console.log(turn);
        redTeam.style.display = "block";
        blueTeam.style.display = "none";
        redTeam.style.color = "red";
      } else if (this.id == "black" && turn == 1) {
        alert("Game over");
        alert("Blue wins");
        document.location.reload(true);
      } else if (this.id == "black" && turn == 2) {
        alert("Game over");
        alert("Red wins");
        document.location.reload(true);
      }
      if (scoreBlue == 9) {
        alert("Blue team wins");
        location.reload();
      } else if (scoreRed == 8) {
        alert("Red team wins");
        location.reload();
      }
    }
  });
});

function test() {
  if (turn == 1 && this.id == "red") {
    this.style.display = "none";
    scoreRed++;
    redScore.innerHTML = scoreRed;
  } else if (turn == 1 && this.id == "blue") {
    scoreBlue++;
    this.style.display = "none";
    blueScore.innerHTML = scoreBlue;
    turn = 2;
    console.log(turn);
    redTeam.style.display = "none";
    blueTeam.style.display = "block";
    blueTeam.style.color = "blue";
  } else if (turn == 2 && this.id == "blue") {
    this.style.display = "none";
    scoreBlue++;
    blueScore.innerHTML = scoreBlue;
  } else if (turn == 2 && this.id == "red") {
    this.style.display = "none";
    scoreRed++;
    redScore.innerHTML = scoreRed;
    turn = 1;
    console.log(turn);
    redTeam.style.display = "block";
    blueTeam.style.display = "none";
    redTeam.style.color = "red";
  } else if (this.id == "black" && turn == 1) {
    alert("Game over");
    alert("Blue wins");
    document.location.reload(true);
  } else if (this.id == "black" && turn == 2) {
    alert("Game over");
    alert("Red wins");
    document.location.reload(true);
  }
}

// end turn function
end.addEventListener("click", function () {
  if (turn == 1) {
    turn = 2;
    redTeam.style.display = "none";
    blueTeam.style.display = "block";
    blueTeam.style.color = "blue";
  } else if (turn == 2) {
    turn = 1;
    redTeam.style.display = "block";
    blueTeam.style.display = "none";
    redTeam.style.color = "red";
  }
});

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
