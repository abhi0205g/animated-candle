// Make the candle movable
const candle = document.getElementById("candle");

let isDragging = false;
let offsetX, offsetY;

candle.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - candle.getBoundingClientRect().left;
  offsetY = e.clientY - candle.getBoundingClientRect().top;
  candle.style.cursor = "grabbing"; // Change cursor to grabbing
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    candle.style.left = `${e.clientX - offsetX}px`;
    candle.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  candle.style.cursor = "grab"; // Change cursor back to grab
});
