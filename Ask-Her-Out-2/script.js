// Array of cute messages
const cuteMessages = [
  {
    main: "Please think again! 🙄",
    sub: "itni jaldi matt bolo na maan jao😥"
  },
  {
    main: "Ek aur baar Soch lo! 😣",
    sub: "kyu aisa kar rhi ho sahi nhi hai😣"
  },
  {
    main: "Man jao na yaar! Kitna bhav khati ho😭",
    sub: "bhut glt baat hai yrr marunga😭"
  },
  {
    main: "Are you sure? 🥺",
    sub: "Mujhe toh yakin nhi hai 💔"
  },
  {
    main: "Last chance! 🙏",
    sub: "Please say yes, I'm begging you 😢"
  },
  {
    main: "Don't do this to me 😢",
    sub: "Mera dil toot jayega 💔"
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