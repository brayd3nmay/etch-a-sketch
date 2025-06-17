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