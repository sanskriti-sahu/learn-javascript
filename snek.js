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
    move: function() {
        var location = snake.nextlocation();
        if (game.isEmpty(location)) {
            snake.parts.unshift(location);
            snake.parts.pop();
        }
        if (game.isWall(location)) {
            return "gameover";
        }
        if (game.isFruit(location)) {
            snake.parts.unshift(location);
            game.score++
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
    draw: function(ctx, source, color) {
        source.forEach(function drawPart(part) {
            var xLocation = part.x * squareSize;
            var yLocation = part.y * squareSize;
            ctx.fillStyle = color;
            ctx.fillRect(xLocation, yLocation, squareSize, squareSize);
        });
    },
    drawGame: function() {
        var ctx = graphics.canvas.getContext("2d");
        ctx.clearRect(0, 0, graphics.canvas.width, graphics.canvas.height);
        graphics.drawBoard(ctx);
        graphics.draw(ctx, snake.parts, "green");
        graphics.draw(ctx, game.fruit, "red");
    },
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
    fruit: [
        { x: 1, y: 1 }
    ],
    tick: function() {
        game.tickNumber++;
        if (game.tickNumber % 10 == 0) {
            game.addRandomFruit();
        }
        var result = snake.move();
        if (result == "gameover") {
            alert("game over");
            return;
        }
        game.timer = window.setTimeout("game.tick()", 500);

        graphics.drawGame();
    },
    addRandomFruit: function() {
        var randomY = Math.floor(Math.random() * game.board.length) + 0;
        var randomX = Math.floor(Math.random() * game.board[randomY].length) + 0;
        var randomLocation = { x: randomX, y: randomY };
        if (game.isEmpty(randomLocation) && !game.isFruit(randomLocation)) {
            game.fruit.push(randomLocation);
        }
    },
    isEmpty: function(loacation) {
        return game.board[loacation.y][loacation.x] == ' ';
    },
    isWall: function(loc) {
        return game.board[loc.y][loc.x] == '#';
    },
    isFruit: function(location) {
        for (var fruitNumber = 0; fruitNumber < game.fruit.length; fruitNumber++) {
            var fruit = game.fruit[fruitNumber];
            if (location.x == fruit.x && location.y == fruit.y) {
                game.fruit.splice(fruitNumber, 1)
                return true;
            }
        }
        return false;
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