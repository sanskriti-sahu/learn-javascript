var snake = {
    squareSize: 25,
    parts: [{
            x: 3,
            y: 2
        },
        {
            x: 2,
            y: 2
        }, {
            x: 1,
            y: 2
        }
    ],
    facing: "E",
    color: "green",
    canvas: document.getElementById("canvas"),
    draw: function(ctx) {
        snake.parts.forEach(function drawPart(part) {
            var xLocation = part.x * snake.squareSize;
            var yLocation = part.y * snake.squareSize;
            ctx.fillStyle = snake.color;
            ctx.fillRect(xLocation, yLocation, snake.squareSize, snake.squareSize);
        });
    },
    move: function() {
        var location = snake.nextlocation();
        snake.parts.unshift(location);
        snake.parts.pop();
    },
    nextlocation: function() {
        var snakeHead = snake.parts[0];
        var targetX = snakeHead.x;
        var targetY = snakeHead.y;
        targetY = snake.facing == "N" ? targetY - 1 : targetY;
        targetY = snake.facing == "S" ? targetY + 1 : targetY;
        targetX = snake.facing == "W" ? targetX - 1 : targetX;
        targetX = snake.facing == "E" ? targetX + 1 : targetX;
        return { x: targetX, y: targetY };
    }

}

var graphics = {
    canvas: document.getElementById("canvas"),
    squareSize: 30,
    drawBoard: function(ctx) {
        //var ctx = graphics.canvas.getContext("2d");
        var currentY = 0;
        game.board.forEach(function checkLine(line) {
            line = line.split('');
            var currentX = 0;
            line.forEach(function checkCharac(character) {
                if (character == '#') {
                    ctx.fillStyle = "black";
                    ctx.fillRect(currentX, currentY, graphics.squareSize, graphics.squareSize);
                }

                currentX = currentX + graphics.squareSize;
            });
            currentY = currentY + graphics.squareSize;
        });
    },

    drawGame: function() {
        var ctx = graphics.canvas.getContext("2d");
        ctx.clearRect(0, 0, graphics.canvas.width, graphics.canvas.height);
        graphics.drawBoard(ctx);
        snake.draw(ctx);
    }
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var game = {
    tickNumber: 0,
    timer: null,
    board: [
        "####################",
        "#                  #",
        "#                  #",
        "#       ####       #",
        "#       ####       #",
        "#                  #",
        "#                  #",
        "#                  #",
        "####################"
    ],
    tick: function() {
        game.tickNumber++;
        snake.move();
        graphics.drawGame();
        console.log(game.tickNumber);
        game.timer = window.setTimeout("game.tick()", 500);
    }
};
//graphics.drawBoard();
var gameControl = {
    startGame: function() {
        game.tick();
    }
};

gameControl.startGame();