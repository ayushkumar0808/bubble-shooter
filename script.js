let container = document.querySelector(".container");
let targetValue = document.querySelector(".targetValue");
let scoreValue = document.querySelector(".scoreValue");

let bubble = 49;
let target;
let score = 0;

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

function setTimer() {
  setInterval(() => {}, 1000);
}
