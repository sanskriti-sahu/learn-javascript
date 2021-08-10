var squareSize = 35;
var snake = {
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
            var xLocation = part.x * squareSize;
            var yLocation = part.y * squareSize;
            ctx.fillStyle = snake.color;
            ctx.fillRect(xLocation, yLocation, squareSize, squareSize);
        });
    },
    move: function() {
        var location = snake.nextlocation();
        if (game.isEmpty(location)) {
            snake.parts.unshift(location);
            snake.parts.pop();
        }
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
    drawBoard: function(ctx) {
        //var ctx = graphics.canvas.getContext("2d");
        var currentY = 0;
        game.board.forEach(function checkLine(line) {
            line = line.split('');
            var currentX = 0;
            line.forEach(function checkCharac(character) {
                if (character == '#') {
                    ctx.fillStyle = "black";
                    ctx.fillRect(currentX, currentY, squareSize, squareSize);
                } else {
                    ctx.fillStyle = "white";
                    ctx.fillRect(currentX, currentY, squareSize, squareSize);
                }

                currentX = currentX + squareSize;
            });
            currentY = currentY + squareSize;
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
        "########################",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "#                      #",
        "########################"
    ],
    tick: function() {
        game.tickNumber++;
        snake.move();
        graphics.drawGame();
        console.log(game.tickNumber);
        game.timer = window.setTimeout("game.tick()", 500);
    },
    isEmpty: function(loacation) {
        return game.board[loacation.y][loacation.x] == ' ';
    }
};
//graphics.drawBoard();
var gameControl = {
    processInput: function(keypressed) {
        var key = keypressed.key.toLowerCase();
        var targetDircetion = snake.facing;
        if (key == "w") targetDircetion = "N";
        if (key == "a") targetDircetion = "W";
        if (key == "s") targetDircetion = "S";
        if (key == "d") targetDircetion = "E";
        snake.facing = targetDircetion;
        // game.tick;
    },
    startGame: function() {
        window.addEventListener("keypress", gameControl.processInput, false);
        game.tick();
    }
};

gameControl.startGame();