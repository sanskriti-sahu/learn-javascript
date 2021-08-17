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

function animateCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(x, y, r);
    x += 10;
    if (x > canvas.width) {
        x = 0;
    }
    return;
}
setInterval(animateCircle, 100);