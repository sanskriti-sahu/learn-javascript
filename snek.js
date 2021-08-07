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