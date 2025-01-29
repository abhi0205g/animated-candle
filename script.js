// Add sparkles dynamically
const sparklesContainer = document.querySelector('.sparkles');

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = `${Math.random() * 20 - 10}px`;
  sparkle.style.animationDelay = `${Math.random() * 1}s`;
  sparklesContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}

setInterval(createSparkle, 200);