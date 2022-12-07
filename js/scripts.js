const gameArea = document.querySelectorAll(".card");

gameArea.forEach((div) => {
  div.addEventListener("click", function () {
    console.log("I work");
    div.style.backgroundColor = "red";
  });
});
