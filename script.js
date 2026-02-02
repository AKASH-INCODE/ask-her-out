// Array of cute messages for index page (only 2)
const cuteMessages = [
  {
    main: "will you be my valentine, Sayantika? 🤗",
    sub: "if you say yes ... I'll be your valentine 💖"
  },
  {
    main: "will you be my valentine, Sayantika? 🤗",
    sub: "if you say yes ... I'll be your valentine 💖😭"
  }
];

// Function to display random cute message
function displayRandomMessage() {
  const messageElement = document.getElementById("cute-message");
  const submessageElement = document.getElementById("cute-submessage");
  
  if (messageElement && submessageElement) {
    const randomIndex = Math.floor(Math.random() * cuteMessages.length);
    const message = cuteMessages[randomIndex];
    
    messageElement.textContent = message.main;
    submessageElement.textContent = message.sub;
  }
}

// Display random message when page loads
document.addEventListener("DOMContentLoaded", function() {
  displayRandomMessage();
});

function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
}