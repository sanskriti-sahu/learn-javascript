var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var game = {
    tickNumber: 0,
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
    tick: function() {}
};



var graphics = {
    canvas: document.getElementById("canvas"),
    squareSize: 30,
    drawBoard: function() {
        var ctx = graphics.canvas.getContext("2d");
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
    }
};

graphics.drawBoard();
var gameControl = {
    startGame: function() {
        game.tick();
    }
};
gameControl.startGame();

tick: function ticksFun() {
    game.tickNumber++;
    graphics.drawGame();
    game.timer = window.setTimeout("game.ticks()", 500);
}


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
    draw: function() {
        var canvas = document.getElementById("canvas");
        var ctx = graphics.canvas.getContext("2d");
        snake.parts.forEach(function drawPart(part) {
            var xLocation = part.x * graphics.squareSize;
            var yLocation = part.y * graphics.squareSize;
            ctx.fillStyle = snake.color;
            ctx.fillRect(xLocation, yLocation, graphics.squareSize, graphics.squareSize);
        });
    }
}
snake.draw();