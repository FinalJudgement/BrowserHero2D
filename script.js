const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1500);
const CANVAS_HEIGHT = (canvas.height = 1000);

const playerImage = new Image();
playerImage.src = "/assets/Knight/Idle/idlesheet.png";
const spriteWidth = 128;
const spriteHeight = 128;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
let staggerFrames = 5;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.fillRect(100, 50, 100, 100);
  //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    400,
    0,
    800,
    800
  );
  if (gameFrame % staggerFrames === 0) {
    if (frameX < 11) frameX++;
    else frameX = 0;
  }
  gameFrame++;

  requestAnimationFrame(animate);
}
animate();
