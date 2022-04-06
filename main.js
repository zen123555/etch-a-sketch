const gridContainer = document.querySelector('#grid-container');
//const div = document.createElement('div');
//div.classList.add('inner-divs');
const flexInnerDivs = document.createElement('div');
flexInnerDivs.classList.add('flex-inner-divs-container');
gridContainer.appendChild(flexInnerDivs);

for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        const div = document.createElement('div');
        div.classList.add('inner-divs');
        //container.appendChild(div);
        flexInnerDivs.appendChild(div);
    }   
}


/*
.inner-divs:hover{
    background-color: yellow;
}
*/