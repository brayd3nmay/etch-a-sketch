const gridButton = document.querySelector("button");

// appends num * num amount of block class divs to the container
function makeGrid(num) {
    // reset the current grid
    const container = document.querySelector('#container');
    container.innerHTML = '';

    // make num amount of blocks for grid
    for(let i = 0; i < num * num; i++) {
        const block = document.createElement('div');
        block.className = 'block';

        container.appendChild(block);
    }
}

// initially set the board to 16 * 16 blocks
makeGrid(16);

function getGridSize() {
    let gridSize = prompt("How big would you like the grid to be?");

    return gridSize;
}

function resizeGrid() {
    makeGrid(getGridSize());
}

gridButton.addEventListener('click', resizeGrid);