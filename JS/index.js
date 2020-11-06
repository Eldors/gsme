'use strict'

const field = document.querySelector('.field');

const cell = field.children;

const amountColumns = 5;
const amountRows = 5;


function numberingCell () {
    let C = 0;  //column number 
    let R = 0;  //row number

    for (let i = 0; i < amountRows; i++) {
        for (let j = 0; j < amountColumns; j++) {
                cell[(j + i * 5)].id = `${R} ${C}`;
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
    const Heroe = document.querySelector('.heroe').parentElement;

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
            const heroeNow = document.querySelector('.heroe');
            const containerHeroe = document.createElement('div');

            containerHeroe.className = 'heroe';

            Heroe.removeChild(heroeNow);
            elemEvent.appendChild(containerHeroe);       
        }
    }
}

function createWall (numberCell, side) {
    const containerWall = document.createElement('div');
    const parentContainer = document.getElementById(numberCell);
    console.log('parentContainer: ', parentContainer);

    if ( side == 1 )  containerWall.className = 'top-wall'
    else if ( side == 2 )   containerWall.className = 'right-wall'
    else if ( side == 3 )   containerWall.className = 'bottom-wall'
    else if ( side == 4 )   containerWall.className = 'left-wall';
    else return;
    //parentContainer.innerHTML = '';
    parentContainer.appendChild(containerWall);

}

createWall('0 4', 2);
createWall('0 4', 3);
createWall('1 0', 4);
createWall('0 4', 1);



field.addEventListener('click', moveHeroe);
