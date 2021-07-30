function drawhuman(canvas, x, y, r) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();

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