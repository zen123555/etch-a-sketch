/*
configure extra button styling

const buttonDiv = document.querySelector('#button-div');
const buttons = buttonDiv.childNodes;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('active');
  });
});
*/

/*
get neccessary elements
*/
const mainFlex = document.querySelector('.main-flex');
const gridContainer = document.querySelector('#grid-container');
const modeDiv = document.createElement('div');


//configure rainbow and eraser modes
modeDiv.classList.add('mode-div');
let rainbowFlag;
let eraserFlag;

/*
initialize buttons
*/
const sizeButton = document.querySelector('#size-button');
sizeButton.addEventListener('click', createGrid);

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);

const rainbowButton =  document.querySelector('#rainbow-button');
rainbowButton.addEventListener('click', rainbowMode);

const eraserButton = document.querySelector('#eraser-button');
eraserButton.addEventListener('click', eraserMode);


//create first grid (16x16)
initialGrid();

/*
Functions
*/

//enter eraser mode
function eraserMode(){
    eraserFlag = true;
    mainFlex.appendChild(modeDiv);
    modeDiv.textContent = 'ERASER MODE ACTIVATED!!!';
    endRainbow();
    applyMouseOver();
}


//enter rainbow mode
function rainbowMode(){
    rainbowFlag = true;
    mainFlex.appendChild(modeDiv);
    modeDiv.textContent = 'RAINBOW MODE ACTIVATED!!!';
    applyMouseOver();
}

//exit rainbow mode;
function endRainbow(){
    rainbowFlag = false;
}

//clear grid
function clearGrid(){
    const innerDivs = gridContainer.childNodes;
    innerDivs.forEach((div) => {
        div.style.cssText = 'background: #dac16f;';
    });
}

//create initial 16x16 grid
function initialGrid(){
    createGrid(16);
}

//create random hex number
function randomColor(){
    return randnum = '#' + Math.floor(Math.random()*16777215).toString(16);
}

//fill in squares on user-mouseover with colors based on rainbowFlag and eraserFlag
function applyMouseOver(){
    const innerDivs = gridContainer.childNodes;
    innerDivs.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            if((!rainbowFlag) && (!eraserFlag)){
                e.target.style.cssText = 'background-color: black;'; //default
            }else if(rainbowFlag){
                e.target.style.cssText = `background-color: ${randomColor()};`;
            }else{
                e.target.style.cssText = 'background-color: #dac16f;'; //eraser
            }
        });
    });
}

//get user input then create grid with 'x' rows and columns
function createGrid(x){
    if(x!=16){
        x = parseInt(prompt("How many rows and columns for the new grid?" +
                                "\nEnter a maximum of 100."));
        while(x>100){
            x = parseInt(prompt("Please enter a value of 100 or less"));
        }
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