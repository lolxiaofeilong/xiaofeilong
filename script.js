const rounds = [
  { target: 3, icon: "☀️", name: "小太阳" },
  { target: 5, icon: "🍎", name: "红苹果" },
  { target: 2, icon: "🐠", name: "小鱼" },
  { target: 7, icon: "⭐", name: "小星星" },
  { target: 4, icon: "🌸", name: "小花" },
];

const roundNumber = document.querySelector("#round-number");
const stars = document.querySelector("#stars");
const prompt = document.querySelector("#prompt");
const targetNumber = document.querySelector("#target-number");
const selectedCount = document.querySelector("#selected-count");
const objects = document.querySelector("#objects");
const feedback = document.querySelector("#feedback");
const checkButton = document.querySelector("#check-button");
const clearButton = document.querySelector("#clear-button");
const nextButton = document.querySelector("#next-button");

let currentRoundIndex = 0;
let earnedStars = 0;

function getCurrentRound() {
  return rounds[currentRoundIndex];
}

function renderRound() {
  const round = getCurrentRound();
  const extraObjects = 3;
  const totalObjects = round.target + extraObjects;

  roundNumber.textContent = String(currentRoundIndex + 1);
  prompt.textContent = `请数出 ${round.target} 个${round.name}`;
  targetNumber.textContent = String(round.target);
  selectedCount.textContent = "0";
  feedback.textContent = "先点图案开始数数吧！";
  feedback.className = "feedback";
  stars.textContent = "★".repeat(earnedStars) + "☆".repeat(rounds.length - earnedStars);

  objects.innerHTML = "";
  for (let index = 0; index < totalObjects; index += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "object-button";
    button.textContent = round.icon;
    button.setAttribute("aria-label", `${round.name} ${index + 1}`);
    button.addEventListener("click", () => toggleObject(button));
    objects.append(button);
  }
}

function toggleObject(button) {
  button.classList.toggle("selected");
  const count = objects.querySelectorAll(".selected").length;
  selectedCount.textContent = String(count);
  feedback.textContent = count === 0 ? "先点图案开始数数吧！" : `你已经数到 ${count} 个啦。`;
  feedback.className = "feedback";
}

function checkAnswer() {
  const round = getCurrentRound();
  const count = objects.querySelectorAll(".selected").length;

  if (count === round.target) {
    feedback.textContent = "答对啦！你真会数数！";
    feedback.className = "feedback good";
    if (!round.completed) {
      round.completed = true;
      earnedStars += 1;
      stars.textContent = "★".repeat(earnedStars) + "☆".repeat(rounds.length - earnedStars);
    }
    return;
  }

  const hint = count < round.target ? "还差一点点" : "数多了一点点";
  feedback.textContent = `${hint}，再试一次吧。`;
  feedback.className = "feedback try-again";
}

function clearSelection() {
  objects.querySelectorAll(".selected").forEach((button) => button.classList.remove("selected"));
  selectedCount.textContent = "0";
  feedback.textContent = "没关系，我们重新数一遍。";
  feedback.className = "feedback";
}

function goToNextRound() {
  if (currentRoundIndex === rounds.length - 1) {
    currentRoundIndex = 0;
    earnedStars = 0;
    rounds.forEach((round) => {
      round.completed = false;
    });
    renderRound();
    feedback.textContent = "新一轮开始啦！";
    return;
  }

  currentRoundIndex += 1;
  renderRound();
}

checkButton.addEventListener("click", checkAnswer);
clearButton.addEventListener("click", clearSelection);
nextButton.addEventListener("click", goToNextRound);

renderRound();
