function drawhuman(canvas, x, y, r) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "green";

    // draw head
    ctx.arc(x, y, r, 0, 2 * Math.PI);

    // draw vertical body line
    ctx.moveTo(x, y + r);
    ctx.lineTo(x, y + r * 4);

    // draw straiight right hand
    ctx.moveTo(x, y + r * 2);
    ctx.lineTo(x + r, y + r * 2);

    // draw stright left hand
    ctx.moveTo(x, y + r * 2);
    ctx.lineTo(x - r, y + r * 2);

    // draw right leg
    ctx.moveTo(x, y + r * 4);
    ctx.lineTo(x + r, y + r * 5);

    // draw left leg
    ctx.moveTo(x, y + r * 4);
    ctx.lineTo(x - r, y + r * 5);

    ctx.stroke();


}

function drawPacman(canvas, x, y, r) {
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

function drawRandomPacmans(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 100; i++) {
        var randomX = Math.random();
        var randomY = Math.random();
        var randomR = Math.random();
        var randomWid = randomX * canvas.width;
        var randomHei = randomY * canvas.height;
        var randomRad = randomR * 50;
        drawPacman(canvas, randomWid, randomHei, randomRad);
    }
}