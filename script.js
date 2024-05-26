let counter = 0;
let cells = document.querySelectorAll('#field td');
let header = document.getElementById('header');
let xWins = 0;
let oWins = 0;
let draws = 0;
let xWinsElement = document.getElementById('xWins');
let oWinsElement = document.getElementById('oWins');
let drawsElement = document.getElementById('draws');


function isVictory() {
    var combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (var combo of combos) {
        if (cells[combo[0]].innerHTML == cells[combo[1]].innerHTML && cells[combo[1]].innerHTML == cells[combo[2]].innerHTML && cells[combo[0]].innerHTML != '') {
            return true;
        }
    }
    return false;
}


function tap(event) {
    if (counter % 2 == 0) {
        event.target.innerHTML = '<img src="close.png" width=90>';
    }
    else {
        event.target.innerHTML = '<img src="circle.png" width=90>';
    }

    if (isVictory()) {
        for (var cell of cells) {
            cell.removeEventListener('click', tap);
        }
        if (counter % 2 == 0) {
            header.innerText = 'X is winner!';
            xWins++;
            xWinsElement.innerText = xWins;
        } else {
            header.innerText = 'O is winner!';
            oWins++;
            oWinsElement.innerText = oWins;
        }
    } else if (counter == 8) {
        header.innerText = 'Draw!';
        draws++;
        drawsElement.innerText = draws;
    }
    counter++;
    event.target.removeEventListener('click', tap);
}


function startGame() {
    
    header.innerText = 'Tic Tac Toe';
    counter = 0;
    for (var cell of cells) {
        cell.innerHTML = '';
        cell.addEventListener('click', tap);
    }
}

startGame()
