const gridContainer = document.querySelector('#grid-container');

//initializes buttons
const sizeButton = document.querySelector('#size-button');
sizeButton.addEventListener('click', createGrid);

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);
 

//creates first grid
initialGrid();




/*
Functions
*/

//clear grid
function clearGrid(){
    const innerDivs = gridContainer.childNodes;
    innerDivs.forEach((div) => {
        div.style.cssText = 'background: #dac16f;';
    });
}

//create initial 16x16 grid
function initialGrid(){
    for(let i=0; i<16; i++){
        for(let j=0; j<16; j++){
            const div = document.createElement('div');
            div.classList.add('inner-divs-grid');
            gridContainer.appendChild(div);
        }   
    }
    applyMouseOver();
}

//fill in squares on user-mouseover, will change to an event where you have to hold down mouse
function applyMouseOver(){
    const innerDivs = gridContainer.childNodes;
    innerDivs.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            e.target.style.cssText = 'background-color: black;';
        });
    });
}

//get user input then create grid with 'x' rows and columns
function createGrid(){
    let x = parseInt(prompt("How many rows and columns for the new grid?" +
                            "\nEnter a maximum of 100."));
    while(x>100){
        x = parseInt(prompt("Please enter a value of 100 or less"));
    }
    //remove old grid
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${x}, minmax(5px, auto))`;
    for(let i=0; i<x; i++){
        for(let j=0; j<x; j++){
            const div = document.createElement('div');
            div.classList.add('inner-divs-grid');
            gridContainer.appendChild(div);
        }   
    }
    applyMouseOver();
}