'use strict'

const field = document.querySelector('.field');

const cell = document.querySelectorAll('.field div');

const widthCell = cell[0].offsetWidth;

const amountColumns = 10;
const amountRows = 3;

cell[(amountColumns * amountRows) - 1].id = `${amountColumns}.${amountRows}`;

function numberingCell () {
    let C = 0;  //column number 
    let R = 0;  //row number

    for (let i = 0; i < amountRows; i++) {
        for (let j = 0; j < amountColumns; j++) {
            cell[(j + i * 10)].id = `${R} ${C}`;
            C++;
        }
        R++;
        C = 0;
    }
}

numberingCell();

function moveHeroe (event) {
    if(!event.target.matches('.field div')) return 

    const elemEvent = event.target;
    const Heroe = document.querySelector('.heroe');

    const coordinatesEvent = elemEvent.id;
    const coodrinatesHeroe = Heroe.id;

    const firstCoordEvent = Number(coordinatesEvent.split(' ')[0]);
    const firstCoordHeroe = Number(coodrinatesHeroe.split(' ')[0]);

    const secondCoordEvent = Number(coordinatesEvent.split(' ')[1]);
    const secondCoordHeroe = Number(coodrinatesHeroe.split(' ')[1]);

    if (coordinatesEvent != coodrinatesHeroe)  {
        if ((firstCoordEvent == firstCoordHeroe 
            || firstCoordEvent == firstCoordHeroe + 1 
            || firstCoordEvent == firstCoordHeroe - 1) 
            && 
            (secondCoordEvent == secondCoordHeroe 
            || secondCoordEvent == secondCoordHeroe + 1 
            || secondCoordEvent == secondCoordHeroe - 1)) 
        {
            Heroe.classList.remove('heroe');
            elemEvent.classList.add('heroe');
        }
    }
}

field.addEventListener('click', moveHeroe);

