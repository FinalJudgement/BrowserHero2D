let playerState = "idle";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function (e) {
  playerState = e.target.value;
});

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1500);
const CANVAS_HEIGHT = (canvas.height = 1000);

const playerImage = new Image();
playerImage.src = "/assets/Knight/Idle/idlesheet.png";
const spriteWidth = 128;
const spriteHeight = 128;

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 12,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "run",
    frames: 8,
  },
  {
    name: "run_attack",
    frames: 8,
  },
  {
    name: "walk",
    frames: 6,
  },
  {
    name: "walk_attack",
    frames: 6,
  },
  {
    name: "attack",
    frames: 5,
  },
  {
    name: "attack_extra",
    frames: 8,
  },
  {
    name: "climb",
    frames: 4,
  },
  {
    name: "high_jump",
    frames: 12,
  },
  {
    name: "hurt",
    frames: 4,
  },
  {
    name: "push",
    frames: 4,
  },
];
animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position =
    Math.floor(gameFrame / staggerFrames) %
    spriteAnimations[playerState].loc.length;
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    400,
    0,
    800,
    800
  );

  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
