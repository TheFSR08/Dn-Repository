// Variables globales
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var paddleWidth = 75;
var paddleHeight = 10;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

// Variables para los ladrillos
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];

// Crear los ladrillos
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

// Funciones para dibujar elementos en el lienzo
function drawBall() {
  context.beginPath();
  context.arc(x, y, ballRadius, 0, Math.PI * 2);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}

function drawPaddle() {
  context.beginPath();
  context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}

function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        context.beginPath();
        context.rect(brickX, brickY, brickWidth, brickHeight);
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();
      }
    }
  }
}

// Función principal de dibujo y animación
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  collisionDetection();

  // Movimiento de la pelota
  x += dx;
  y += dy;

  // Colisiones con los bordes del lienzo
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    console.log("juego acabado");
  }
}
