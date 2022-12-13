//gets every div with the .card class
const gameArea = document.querySelectorAll(".card");
//random number generator to see who goes first 1 is red 2 is blue
var initialTurn = Math.floor(Math.random() * 2) + 1;
//sets turn to initial turn
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
//info button
const info = document.getElementById("info");

// adds even listener to the info button to show the overlay
info.addEventListener("click", function () {
  // gets overlay
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  overlay.style.cursor = "pointer";
  // adds event listener to the overlay to hide it
  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
  });
  
});


///////
//
//spy master button
// has the random card color generator
//
///////
spyMaster.addEventListener("click", function () {
  clicked++;
  //makes new indexlist so it can be used again
  let indexList = index;
  //number for the random number so we can remove that from the indexList
  var number = 0;
  //switch for the clicked button
  switch (clicked) {
    // case 1 is the first click and will only happen once 
    case 1:
      spyMaster.innerHTML = "Hide cards";
      // if the red team goes first
      if (initialTurn == 1) {
        for (let i = 0; i < 9; i++) {
          // makes a random number
          const random = Math.floor(Math.random() * indexList.length);
          // number is the random number from the indexList
          number = indexList[random];
          // removes the number from the indexList so it can't be used again
          indexList.splice(random, 1);
          // changes the color of the card
          cards[number].style.backgroundColor = "#ff2f2f";
          // adds the class to the card
          cards[number].classList.add("red");
        }
        // does the same thing as above but for the blue team
        for (let i = 0; i < 8; i++) {
          const random = Math.floor(Math.random() * indexList.length);
          number = indexList[random];
          indexList.splice(random, 1);
          cards[number].style.backgroundColor = "#31acfd";
          cards[number].classList.add("blue");
        }
      } else {
        // does the same thing as above but for the blue team and if the blue team goes first
        for (let i = 0; i < 9; i++) {
          const random = Math.floor(Math.random() * indexList.length);
          number = indexList[random];
          indexList.splice(random, 1);
          cards[number].style.backgroundColor = "#31acfd";
          cards[number].classList.add("blue");
        }
        for (let i = 0; i < 8; i++) {
          const random = Math.floor(Math.random() * indexList.length);
          number = indexList[random];
          indexList.splice(random, 1);
          cards[number].style.backgroundColor = "#ff2f2f";
          cards[number].classList.add("red");
        }
      }
      // sets the assassin card
      const random = Math.floor(Math.random() * indexList.length);
      number = indexList[random];
      indexList.splice(random, 1);
      cards[number].style.backgroundColor = "#747474";
      cards[number].classList.add("black");

      // sets the neutral cards
      for (let i = 0; i < 7; i++) {
        const random = Math.floor(Math.random() * indexList.length);
        number = indexList[random];
        indexList.splice(random, 1);
        cards[number].style.backgroundColor = "#fec597";
        cards[number].classList.add("neutral");
      }
      break;

    // case 2 is the second click and will "reset" the card colors  
    case 2:
      spyMaster.innerHTML = "Show cards";
      // for every card it will change the color to "neutral"
      for (let i = 0; i < 25; i++) {
        cards[i].style.backgroundColor = "#fec597";
      }
      // sets clicked to 2 so case 3 can be used
      clicked = 2;
      break;

    // case 3 is the third click and will show the card colors again
    case 3:
      spyMaster.innerHTML = "Hide cards";
      // gets all the cards with the class of respective color
      const redCards = document.querySelectorAll(".red");
      const blueCards = document.querySelectorAll(".blue");
      const blackCards = document.querySelectorAll(".black");
      const neutralCards = document.querySelectorAll(".neutral");
      redCards.forEach((div) => {
        div.style.backgroundColor = "#ff2f2f";
      });
      blueCards.forEach((div) => {
        div.style.backgroundColor = "#31acfd";
      });
      blackCards.forEach((div) => {
        div.style.backgroundColor = "#747474";
      });
      neutralCards.forEach((div) => {
        div.style.backgroundColor = "#fec597";
      });
      // sets click to 1 so it case 2 can be used again
      clicked = 1;
      break;
  }
});

///////////
//
// Everything to do with the scores
//
///////////
var scoreRed = 0;
var scoreBlue = 0;
const redScore = document.getElementById("redScore");
const blueScore = document.getElementById("blueScore");

///////////
//
//start function for the game
//
///////////
start.addEventListener("click", function () {
  // hides the start button
  start.style.display = "none";
  // shows the game buttons
  gameButtons.setAttribute('class','visible');
  // hides which team goes first for now
  redTeam.style.display = "none";
  blueTeam.style.display = "none";
  // red team goes firs
  if (turn == 1) {
    // displays red team
    redTeam.style.display = "block";
    redTeam.style.color = "#ff2f2f";
  }
  // blue team goes first 
  else {
    // displays blue team
    blueTeam.style.display = "block";
    blueTeam.style.color = "#31acfd";
  }
});

///////////
//
//adds the event listener to the cards
//
///////////
gameArea.forEach((div) => {
  div.addEventListener("click", function () {
    //////////////////////
    //
    //red start//
    //
    //////////////////////
    if (initialTurn == 1) {
      // if the card is red and it is red's turn
      if (turn == 1 && this.classList.contains("red")) {
        alert("Correct");
        this.style.visibility = "hidden";
        scoreRed++;
        redScore.innerHTML = scoreRed;
      }
      // if the card is blue and it is red's turn 
      else if (turn == 1 && this.classList.contains("blue")) {
        alert("Wrong team");
        scoreBlue++;
        this.style.visibility = "hidden";
        blueScore.innerHTML = scoreBlue;
        turn = 2;
        redTeam.style.display = "none";
        blueTeam.style.display = "block";
        blueTeam.style.color = "#31acfd";
      }
      // if the card is neutral and it is red's turn 
      else if (turn == 1 && this.classList.contains("neutral")) {
        alert("wrong");
        this.style.visibility = "hidden";
        redTeam.style.display = "none";
        blueTeam.style.display = "block";
        blueTeam.style.color = "#31acfd";
        turn = 2;
      }
      // if the card is neutral and it is blue's turn 
      else if (turn == 2 && this.classList.contains("neutral")) {
        alert("Wrong");
        this.style.visibility = "hidden";
        redTeam.style.display = "block";
        blueTeam.style.display = "none";
        redTeam.style.color = "#ff2f2f";
        turn = 1;
      }
      // if the card is blue and it is blue's turn
       else if (turn == 2 && this.classList.contains("blue")) {
        alert("Correct");
        this.style.visibility = "hidden";
        scoreBlue++;
        blueScore.innerHTML = scoreBlue;
      }
      // if the card is red and it is blue's turn 
      else if (turn == 2 && this.classList.contains("red")) {
        alert("Wrong team");
        this.style.visibility = "hidden";
        scoreRed++;
        redScore.innerHTML = scoreRed;
        turn = 1;
        redTeam.style.display = "block";
        blueTeam.style.display = "none";
        redTeam.style.color = "#ff2f2f";
      } 
      // if the card is black and it is red's turn
      else if (this.classList.contains("black") && turn == 1) {
        alert("Game over");
        alert("Blue wins");
        // reloads the page
        document.location.reload(true);
      }
      // if the card is black and it is blue's turn
       else if (this.classList.contains("black") && turn == 2) {
        alert("Game over");
        alert("Red wins");
        document.location.reload(true);
      }
      // if the red team gets 9 points
      if (scoreRed == 9) {
        alert("Red team wins");
        // reloads the page (why I do it differently I don't know)
        location.reload();
      }
      // if the blue team gets 8 points 
      else if (scoreBlue == 8) {
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
      // if the card is red and it is red's turn
      if (turn == 1 && this.classList.contains("red")) {
        alert("correct");
        this.style.visibility = "hidden";
        scoreRed++;
        redScore.innerHTML = scoreRed;
      }
      // if the card is blue and it is red's turn 
      else if (turn == 1 && this.classList.contains("blue")) {
        alert("Wrong team");
        scoreBlue++;
        this.style.visibility = "hidden";
        blueScore.innerHTML = scoreBlue;
        turn = 2;
        console.log(turn);
        redTeam.style.display = "none";
        blueTeam.style.display = "block";
        blueTeam.style.color = "#31acfd";
      }
      // if the card is blue and it is blue's turn 
      else if (turn == 2 && this.classList.contains("blue")) {
        alert("Correct");
        this.style.visibility = "hidden";
        scoreBlue++;
        blueScore.innerHTML = scoreBlue;
      }
      // if the card is neutral and it is red's turn 
      else if (turn == 1 && this.classList.contains("neutral")) {
        alert("neutral color killed");
        this.style.visibility = "hidden";
        redTeam.style.display = "none";
        blueTeam.style.display = "block";
        blueTeam.style.color = "#31acfd";
        turn = 2;
      }
      // if the card is blue and it is blue's turn 
      else if (turn == 2 && this.classList.contains("neutral")) {
        alert("neutral color killed");
        this.style.visibility = "hidden";
        blueTeam.style.display = "none";
        redTeam.style.display = "block";
        redTeam.style.color = "#ff2f2f";
        turn = 1;
      }
      // if the card is red and it is blue's turn 
      else if (turn == 2 && this.classList.contains("red")) {
        alert("Wrong team");
        this.style.visibility = "hidden";
        scoreRed++;
        redScore.innerHTML = scoreRed;
        turn = 1;
        console.log(turn);
        redTeam.style.display = "block";
        blueTeam.style.display = "none";
        redTeam.style.color = "#ff2f2f";
      }
      // if the card is black and it is red's turn 
      else if (this.classList.contains("black") && turn == 1) {
        alert("Game over");
        alert("Blue wins");
        // reloads the page
        document.location.reload(true);
      }
      // if the card is black and it is blue's turn 
      else if (this.classList.contains("black") && turn == 2) {
        alert("Game over");
        alert("Red wins");
        document.location.reload(true);
      }
      // if the blue team gets 9 points
      if (scoreBlue == 9) {
        alert("Blue team wins");
        // reloads the page (why I do it differently I don't know)
        location.reload();
      } 
      // if the red team gets 8 points
      else if (scoreRed == 8) {
        alert("Red team wins");
        location.reload();
      }
    }
  });
});

///////////////////////////
////
// end turn function
////
///////////////////////////

end.addEventListener("click", function () {
  // if red presses end turn
  if (turn == 1) {
    turn = 2;
    redTeam.style.display = "none";
    blueTeam.style.display = "block";
    blueTeam.style.color = "#31acfd";
  }
  // if blue presses end turn 
  else if (turn == 2) {
    turn = 1;
    redTeam.style.display = "block";
    blueTeam.style.display = "none";
    redTeam.style.color = "#ff2f2f";
  }
});

///////////////////////////
////
///functions that I am trying but they don't work
////
///////////////////////////

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
//             this.style.visibility = "hidden";
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

// function test() {
//   if (turn == 1 && this.classList == "red") {
//     this.style.display = "none";
//     scoreRed++;
//     redScore.innerHTML = scoreRed;
//   } else if (turn == 1 && this.classList == "blue") {
//     scoreBlue++;
//     this.style.display = "none";
//     blueScore.innerHTML = scoreBlue;
//     turn = 2;
//     console.log(turn);
//     redTeam.style.display = "none";
//     blueTeam.style.display = "block";
//     blueTeam.style.color = "blue";
//   } else if (turn == 2 && this.classList == "blue") {
//     this.style.display = "none";
//     scoreBlue++;
//     blueScore.innerHTML = scoreBlue;
//   } else if (turn == 2 && this.classList == "red") {
//     this.style.display = "none";
//     scoreRed++;
//     redScore.innerHTML = scoreRed;
//     turn = 1;
//     console.log(turn);
//     redTeam.style.display = "block";
//     blueTeam.style.display = "none";
//     redTeam.style.color = "red";
//   } else if (this.classList == "black" && turn == 1) {
//     alert("Game over");
//     alert("Blue wins");
//     document.location.reload(true);
//   } else if (this.classList == "black" && turn == 2) {
//     alert("Game over");
//     alert("Red wins");
//     document.location.reload(true);
//   }
// }
