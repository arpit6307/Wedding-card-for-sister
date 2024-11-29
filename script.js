// Select elements
const card = document.querySelector('.card');
const detailsBtn = document.getElementById('details-btn');
const backBtn = document.getElementById('back-btn');
const contactBtn = document.getElementById('contact-btn');
const contactNumbers = document.querySelector('.contact-numbers');
const audio = document.getElementById('wedding-song');

// Flip to show wedding details
detailsBtn.addEventListener('click', () => {
  card.style.transform = 'rotateY(180deg)';
  audio.play(); // Play the wedding song
});

// Flip back to front side
backBtn.addEventListener('click', () => {
  card.style.transform = 'rotateY(0deg)';
  audio.pause(); // Pause the wedding song
  audio.currentTime = 0; // Reset the song
});

// Show the contact numbers when "Contact" button is clicked
contactBtn.addEventListener('click', () => {
  contactNumbers.style.display = 'block'; // Display contact numbers
  contactBtn.style.display = 'none'; // Hide the "Contact" button
});

// Make a call to the selected contact number
const callNumber = (number, name) => {
  const confirmCall = confirm(`Do you want to call ${name} at ${number}?`);
  if (confirmCall) {
    window.location.href = `tel:${number}`; // Initiate call
  }
};

// Event listeners for calling numbers
document.getElementById('call-nikki').addEventListener('click', () => {
  callNumber('7607179205', 'Nikki Singh');
});

document.getElementById('call-ashish').addEventListener('click', () => {
  callNumber('7080276213', 'Ashish Singh');
});
