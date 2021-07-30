function renderCanvas() {
    drawGrid(document.getElementById("asteroids"));
}
var canvas = document.getElementById("asteroids");
var ctx = canvas.getContext('2d');

function drawPacman(x, y, r) {
    var canvas = document.getElementById("asteroids");
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, r, 0.2 * Math.PI, 1.8 * Math.PI);

    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

}

function drawRandomPacmans() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 100; i++) {
        var randomX = Math.random();
        var randomY = Math.random();
        var randomR = Math.random();
        var randomWid = randomX * canvas.width;
        var randomHei = randomY * canvas.height;
        var randomRad = randomR * 50;
        drawPacman(randomWid, randomHei, randomRad);
    }
}


//drawRandomPacmans();
setInterval(drawRandomPacmans, 10);