const scores = document.querySelector(".scores");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const selector = document.querySelector("#playingTo");
const player1 = document.querySelector("#btn-1");
const player2 = document.querySelector("#btn-2");
const resetBtn = document.querySelector("#btn-3");

let player1Score = 0;
let player2Score = 0;
let winningScore = 3;
let isGameOver = false;


selector.addEventListener("change", function(){
    winningScore = parseInt(this.value);
    resetScore();
})

player1.addEventListener("click", () => {
  if (!isGameOver) {
    player1Score += 1;
    if(player1Score === winningScore){
        isGameOver = true;
        p1.style.color = "green"
        p2.style.color = "red";
    }
    p1.textContent = player1Score;
  }
});

player2.addEventListener("click", () => {
    if (!isGameOver) {
      player2Score += 1;
      if(player2Score === winningScore){
          isGameOver = true;
          p2.style.color = "green";
          p1.style.color = "red";
      }
      p2.textContent = player2Score;
    }
  });

resetBtn.addEventListener("click", resetScore);

function resetScore() {
  player1Score = 0;
  player2Score = 0;
  p1.textContent = 0;
  p2.textContent = 0;
  p2.style.color = "black";
  p1.style.color = "black";
  isGameOver = false;
}

