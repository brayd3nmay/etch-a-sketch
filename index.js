const gridButton = document.querySelector("button");
const container = document.querySelector('#container');

// appends num * num amount of block class divs to the container
function makeGrid(num) {
    // reset the current grid
    container.innerHTML = '';

    // get the width for each block
    const blockWidth = 100 / num + '%';

    // make num amount of blocks for grid
    for(let i = 0; i < num * num; i++) {
        const block = document.createElement('div');
        
        block.className = 'block';
        block.style.width = blockWidth;

        container.appendChild(block);
    }
}

// initially set the board to 16 * 16 blocks
makeGrid(16);

function getGridSize() {
    let gridSize = prompt("How big would you like the grid to be?");

    if(gridSize > 100) {
        alert('Grid size is too big. Stay under 100.');

        return 16;
    }

    return gridSize;
}

function resizeGrid() {
    makeGrid(getGridSize());
}

gridButton.addEventListener('click', resizeGrid);

container.addEventListener('mouseover', (e) => {
    let currBlock = e.target;

    if(currBlock.id != 'container') {
        e.target.classList.add('trail');
    }
    console.log(e.target);
});