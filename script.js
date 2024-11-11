let yesButton = document.getElementById("yesButton");
let buttonContainer = document.getElementById("buttonContainer");
let message = document.getElementById("message");
let question = document.getElementById("question");
let yesButtonSize = 1.0;  // Initial size multiplier

function showLoveMessage() {
  message.innerText = "You have made my heart skip a beat! 💖";
  message.style.display = "block"; // Show message
  buttonContainer.style.display = "none"; // Hide buttons
  question.style.display = "none"; // Hide question
}

function askAgain() {
  alert("Please think about it again!");
  yesButtonSize += 0.2;  // Increase size multiplier
  yesButton.style.transform = `scale(${yesButtonSize})`;  // Apply scaling
}
