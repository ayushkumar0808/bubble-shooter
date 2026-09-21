let container = document.querySelector(".container");
let targetValue = document.querySelector(".targetValue");
let scoreValue = document.querySelector(".scoreValue");
let timerValue = document.querySelector(".timerValue");

let bubble = 49;
let target;
let score = 0;
let timmer = 60;

handleClick();
generateBubble();
generateTarget();

function generateBubble() {
  container.innerHTML = "";
  for (let i = 1; i < bubble; i++) {
    let div = document.createElement("div");
    div.className = "target";
    div.innerText = Math.ceil(Math.random() * 10);
    container.append(div);
  }
}

function handleClick() {
  container.addEventListener("click", (e) => {
    if (e.target.className === "target") {
      if (e.target.innerText == target) {
        score = score + 10;
        scoreValue.innerText = score;
      }
      generateBubble();
      generateTarget();
    }
  });
}

function generateTarget() {
  target = Math.ceil(Math.random() * 10);
  targetValue.innerText = target;
}

function gameOver() {
  container.innerHTML = `
    <div class= "over">
    <div>Game Over</div>
    <div>Your Score:${score}</div>
    <button class="btn">Restart</button>
    </div>
    `;
}

function restart() {
  bubble = 49;
  target;
  score = 0;
  timmer = 60;
  handleClick();
  generateBubble();
  generateTarget();
}

setInterval(() => {
  if (timmer == -1) {
    gameOver();
    return;
  }
  timerValue.innerHTML = timmer;
  timmer--;
}, 1000);

container.addEventListener("click", (e) => {
  if (e.target.className === "btn") {
    console.log("hi");
    restart();
  }
});
