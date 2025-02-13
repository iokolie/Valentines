// Check for updates asynchronously
(async function checkForUpdates() {
  const currentVersion = "1.0";
  const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

  try {
      const response = await fetch(versionUrl);
      if (!response.ok) {
          console.warn("Could not fetch version information.");
          return;
      }
      const data = await response.json();
      const latestVersion = data.version;
      const updateMessage = data.updateMessage;

      if (currentVersion !== latestVersion) {
          alert(updateMessage);
      } else {
          console.log("You are using the latest version.");
      }
  } catch (error) {
      console.error("Error checking for updates:", error);
  }
})();


const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  
  // Update the text of the "No" button to the next message
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  
  // Increase the font size of the "Yes" button by 50%
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  document.body.innerHTML = `
      <div class="container">
          <h1 class="yes_header">Yayyyyyyyyy</h1>
          <h1 class="yes_header">I love you so much!!</h1>
          <div class="yes_gif_container">
              <img class="yes_gif" src="love.gif" alt="Love GIF">
          </div>
      </div>
  `;
}


// Animate the header (pulsing effect)
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector("h1");
  
  // Apply a smooth transition for scaling
  header.style.transition = "transform 0.5s ease";

  function animateHeader() {
      // Scale up slightly
      header.style.transform = "scale(1.1)";
      
      // Return to normal size after 500ms
      setTimeout(() => {
          header.style.transform = "scale(1)";
      }, 500);
  }

  // Repeat the animation every 1000ms
  setInterval(animateHeader, 1000);
});

// Background music toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  // Ensure you have a button in your HTML with id="sound-toggle"
  const soundToggleButton = document.getElementById('sound-toggle');

  // Replace 'your_music_file.mp3' with the path or URL to your music file.
  const backgroundMusic = new Audio('Material/music.mp3');
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.5; // Adjust volume as needed

  soundToggleButton.addEventListener('click', () => {
      if (backgroundMusic.paused) {
          backgroundMusic.play();
          soundToggleButton.textContent = "Mute";
      } else {
          backgroundMusic.pause();
          soundToggleButton.textContent = "Music";
      }
  });
});
