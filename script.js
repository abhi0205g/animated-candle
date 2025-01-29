// Get the candle element
const candle = document.getElementById('candle');

let isDragging = false;
let offsetX, offsetY;

// Start dragging when the mouse button is pressed down
candle.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - candle.getBoundingClientRect().left;
  offsetY = e.clientY - candle.getBoundingClientRect().top;
  candle.style.cursor = 'grabbing'; // Change the cursor to grabbing
});

// Move the candle as the mouse moves
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    candle.style.left = `${e.clientX - offsetX}px`;
    candle.style.top = `${e.clientY - offsetY}px`;
  }
});

// Stop dragging when the mouse button is released
document.addEventListener('mouseup', () => {
  isDragging = false;
  candle.style.cursor = 'grab'; // Change the cursor back to grab
});


