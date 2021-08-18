var canvas = document.getElementById("circle");
var ctx = canvas.getContext('2d');
// ctx.fillStyle = "pink";
// ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
// ctx.fillStyle = "pink";
// ctx.fill();
// ctx.stroke();

function drawCircle(x, y, r) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.stroke();

}

var x = 250;
var y = 250;
var r = 50;
var ceiling = y;
var direction = 1;

function animateCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(x, y, r);
    y += (direction * 10);
    if (y >= canvas.height - r || y < ceiling) {
        direction *= -1;
    }

}
setInterval(animateCircle, 50);