'use strict'

const game = document.querySelector('.game')
const container = document.querySelector('.container');
const playingGame = document.querySelector('.playing-game');
const cell = document.querySelectorAll('.cell');

function getQuantityColumnsAndRow(width, height) {
    const cellWidth = cell[0].offsetWidth;
    const cellHeight = cellWidth;

    let maybeQuantityColumns = Math.floor(width / cellWidth);
    let maybeQuantityRows = Math.floor(height / cellHeight);

    while ((maybeQuantityColumns * cellWidth) + maybeQuantityColumns -1 > width) {
        maybeQuantityColumns--;
    }

    while ((maybeQuantityRows * cellHeight) + maybeQuantityRows -1 > height) {
        maybeQuantityRows--;
        
    }

    return [maybeQuantityColumns, maybeQuantityRows];
};

let arrColRow = getQuantityColumnsAndRow(playingGame.offsetWidth, playingGame.offsetHeight);

function numberingCell () {
    for (let i = 0; i < arrColRow[0]; i++) {
        for (let j = 0; j < arrColRow[1]; j++) {
                cell[(j + i * 5)].id = `${i} ${j}`;
        }
    }
};

numberingCell();

function mouseMoveHeroe(event) {
    if(!event.target.matches('.playing-game div.cell')) return 

    const heroe = document.querySelector('.heroe');

    const mouseClickCoord = [Number(event.target.id.split(' ')[0]), Number(event.target.id.split(' ')[1])];
    const heroeCoord = [Number(heroe.parentElement.id.split(' ')[0]), Number(heroe.parentElement.id.split(' ')[1])];

    if (mouseClickCoord[0] == heroeCoord[0] && mouseClickCoord[1] == heroeCoord[1]) return

    if (!((Math.abs(mouseClickCoord[0] - heroeCoord[0]) == 1 && 
         Math.abs(mouseClickCoord[1] - heroeCoord[1]) == 0) || 
        (Math.abs(mouseClickCoord[1] - heroeCoord[1]) == 1 && 
         Math.abs(mouseClickCoord[0] - heroeCoord[0]) == 0))) return
    
    event.target.appendChild(heroe);   
};

playingGame.addEventListener('click', mouseMoveHeroe);


