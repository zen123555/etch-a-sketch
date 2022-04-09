const gridContainer = document.querySelector('#grid-container');
const button = document.querySelector('#clear-button');

button.addEventListener('click', createGrid);
initialGrid();
applyMouseOver();

//create initial 16x16 grid
function initialGrid(){
    for(let i=0; i<16; i++){
        for(let j=0; j<16; j++){
            const div = document.createElement('div');
            div.classList.add('inner-divs');
            gridContainer.appendChild(div);
        }   
    }
}

//fill in squares on user-mouseover
function applyMouseOver(){
    const innerDivs = gridContainer.childNodes;
    innerDivs.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
       e.target.style.cssText = 'background-color: #DD4124;';
    });
});
}

//get user input then create grid with 'x' rows and columns
function createGrid(){
    let x = parseInt(prompt("How many rows and columns for the new grid?"));
    //remove old grid
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    for(let i=0; i<x; i++){
        for(let j=0; j<x; j++){
            const div = document.createElement('div');
            div.classList.add('inner-divs');
            gridContainer.appendChild(div);
        }   
    }
    applyMouseOver();
}