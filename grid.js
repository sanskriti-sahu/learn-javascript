var canvas = document.getElementById("asteroids");
var canvasRect = canvas.getBoundingClientRect();
canvas.addEventListener("mousemove", function(e) {
    //console.log("Canvas: X:" + canvasRect.left + "Y:" + canvasRect.top);
    var canvasX = Math.round(e.clientX - canvasRect.left); // Subtract the 'left' of the canvas from the X/Y
    var canvasY = Math.round(e.clientY - canvasRect.top);
    console.log("X:" + canvasX + "Y:" + canvasY);
});
var context = canvas.getContext('2d');
var width = canvas.width;
context.lineWidth = 0.5;
context.strokeStyle = "green";
var height = canvas.height;
context.font = '10px serif';
context.fillStyle = 'white';
for (var y = 10; y < canvas.width; y = y + 10) {
    context.beginPath();
    if (y % 50 == 0) {
        context.lineWidth = 1;
        context.fillText(y, 0, y);
    } else {
        context.lineWidth = 0.5;
    }
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
}
for (var x = 0; x < canvas.width; x = x + 10) {
    context.beginPath();
    if (x % 50 == 0) {
        context.lineWidth = 1;
        context.fillText(x, x, 10);
    } else {
        context.lineWidth = 0.5;
    }
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.stroke();
}