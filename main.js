const gridContainer = document.querySelector('#grid-container');

const mainFlex = document.querySelector('.main-flex');
const rainbowDiv = document.createElement('div');
rainbowDiv.classList.add('rainbow-div');
let rainbowFlag;

//initializes buttons
const sizeButton = document.querySelector('#size-button');
sizeButton.addEventListener('click', createGrid);

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);

const rainbowButton =  document.querySelector('#rainbow-button');
rainbowButton.addEventListener('click', rainbowMode);

//creates first grid
initialGrid();


/*
Functions
*/

//enter rainbow mode
function rainbowMode(){
    rainbowFlag = true;
    mainFlex.appendChild(rainbowDiv);
    rainbowDiv.textContent = 'RAINBOW MODE ACTIVATED!!!';
    applyMouseOver();
}

function endRainbow(){
    rainbowFlag = false;
    rainbowDiv.textContent = '';
}

//clear grid
function clearGrid(){
    const innerDivs = gridContainer.childNodes;
    innerDivs.forEach((div) => {
        div.style.cssText = 'background: #dac16f;';
    });
    endRainbow();
}

//create initial 16x16 grid
function initialGrid(){
    endRainbow();
    for(let i=0; i<16; i++){
        for(let j=0; j<16; j++){
            const div = document.createElement('div');
            div.classList.add('inner-divs-grid');
            gridContainer.appendChild(div);
        }   
    }
    applyMouseOver();
}

function randomColor(){
    return randnum = '#' + Math.floor(Math.random()*16777215).toString(16);
}

//fill in squares on user-mouseover with colors based on rainbowFlag
function applyMouseOver(){
    const innerDivs = gridContainer.childNodes;
    innerDivs.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            if(!rainbowFlag){
                e.target.style.cssText = 'background-color: black;';
            }else{
                e.target.style.cssText = `background-color: ${randomColor()};`;
            }
        });
    });
}

//get user input then create grid with 'x' rows and columns
function createGrid(){
    rainbowFlag = false;
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