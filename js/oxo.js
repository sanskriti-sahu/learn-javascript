var currentPlayer = "O";
var gameOver = false;

function place(box) {
    if (gameOver == true) {
        return;
    }
    if (box.innerText != "" || gameOver) return;
    box.innerText = currentPlayer;
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
    checkGameBoard();
}

function checkGameBoard() {
    for (var i = 1; i <= 3; i++) {
        checkWinner(document.getElementById(i + "_1").innerText,
            document.getElementById(i + "_2").innerText,
            document.getElementById(i + "_3").innerText);
        //^^ columns(TESTED & WORKING)

        checkWinner(document.getElementById("1_" + i).innerText,
            document.getElementById("2_" + i).innerText,
            document.getElementById("3_" + i).innerText);
        //^^ rows(TESTED & WORKING)

        checkWinner(document.getElementById("1_1").innerText,
            document.getElementById("2_2").innerText,
            document.getElementById("3_3").innerText);
        checkWinner(document.getElementById("1_3").innerText,
            document.getElementById("2_2").innerText,
            document.getElementById("3_1").innerText);
    }
}

function checkWinner(first, second, third) {
    if (first != "" && first == second && first == third) {
        alert("we have a winner!!");
        gameOver = true;
        return;
    }
}