const containerSelector  = '#container';
const defaultGridSize    = 20;
const maximumGridSize    = 100;
const totalWidthInPixels = 960;

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}


function renderGrid(gridSize) {
  const container = document.querySelector(containerSelector);
  if (container === null) {
    console.error('renderGrid: container not found');
    return;
  }

  container.textContent = '';
  const boxSizePx  = totalWidthInPixels / gridSize;
  const boxCount   = gridSize * gridSize;

  Array.from({ length: boxCount }).forEach(() => {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.width  = boxSizePx + 'px';
    box.style.height = boxSizePx + 'px';
  
    box.addEventListener('mouseenter', () => {
      const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
      box.style.backgroundColor = rndCol;
    });
    

    // box.addEventListener('mouseleave', () => {
    //   box.style.backgroundColor = 'blue';
    // });
  
    container.appendChild(box);
  });
  
}

function promptResize() {
  const answer = prompt(
    'Enter squares per side (1-' + maximumGridSize + '):',
    defaultGridSize
  );
  if (answer === null) {
    return;
  }

  const n = parseInt(answer, 10);
  if (isNaN(n) || n < 1 || n > maximumGridSize) {
    alert('Please enter a whole number between 1 and ' + maximumGridSize + '.');
    return;
  }

  renderGrid(n);
}

function initialize() {
  document.addEventListener('DOMContentLoaded', function () {
    renderGrid(defaultGridSize);

    const resizeButton = document.querySelector('#resize');
    if (resizeButton !== null) {
      resizeButton.addEventListener('click', promptResize);
    }

    const resetButton = document.querySelector('#reset');
    if (resetButton !== null) {
      resetButton.addEventListener('click', function () {
        renderGrid(defaultGridSize);
      });
    }
  });
}

initialize();