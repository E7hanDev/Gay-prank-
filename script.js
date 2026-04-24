const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const btnContainer = document.getElementById('btn-container');

// This triggers the moment a finger touches the button
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Stops the actual click from happening
    moveButton();
});

// Also keep mouseover in case they are on a laptop
noBtn.addEventListener('mouseover', moveButton);

function moveButton() {
    // Calculate random spots, but keep them within the visible screen
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function answerYes() {
    question.innerHTML = "Mhh gay!!!! I knew it";
    btnContainer.style.display = 'none';
}

