// Select elements
const card = document.querySelector('.card');
const detailsBtn = document.getElementById('details-btn');
const backBtn = document.getElementById('back-btn');
const audio = document.getElementById('wedding-song');

// Flip to show wedding details
detailsBtn.addEventListener('click', () => {
  card.style.transform = 'rotateY(180deg)';
  audio.play(); // Play the song
});

// Flip back to front side
backBtn.addEventListener('click', () => {
  card.style.transform = 'rotateY(0deg)';
  audio.pause(); // Pause the song
  audio.currentTime = 0; // Reset the song
});
