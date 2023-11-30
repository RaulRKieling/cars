var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];
var allPlayers;
var fuelImage, fuels, goldCoinImage, goldCoins, lifeImage, obstacle1Image, obstacle1, obstacle2Image, obstacle2, blastImage


function preload() {
  backgroundImage = loadImage("./assets/background.png");

  car1_img = loadImage ("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage ("assets/track.jpg");
  fuelImage = loadImage ("assets/fuel.png");
  goldCoinImage = loadImage ("assets/goldCoin.png");
  lifeImage = loadImage ("assets/life.png");
  obstacle1Image = loadImage ("assets/obstacle1.png");
  obstacle2Image = loadImage ("assets/obstacle2.png");
  blastImage = loadImage ("assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);

  if (playerCount === 2){
    game.update(1);
  }

  if (gameState === 1) {
  game.play();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}