const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const logo = new Image();
logo.src = "logo.png"; // 👈 il TUO file

let x = 100, y = 100;
let dx = 3, dy = 3;
const w = 120, h = 60;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  x += dx;
  y += dy;

  if (x <= 0 || x + w >= canvas.width) dx *= -1;
  if (y <= 0 || y + h >= canvas.height) dy *= -1;

  ctx.drawImage(logo, x, y, w, h);
  requestAnimationFrame(animate);
}

logo.onload = animate;
