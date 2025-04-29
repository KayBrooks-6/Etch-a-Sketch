/**
 * createBoxes
 * Creates a bunch of `.box` divs inside a given container.
 *
 * @param count    Number of boxes to generate
 * @param selector CSS selector for the container (e.g. '#container')
 */

function createBoxes(count, selector) {
    const container = document.querySelector(selector);
  
    if (container === null) {
      console.error(`createBoxes: no element matches "${selector}"`);
      return;
    }
  
    container.textContent = '';
  
    Array.from({ length: count }).forEach((_, index) => {
      const box = document.createElement('div');
      box.className = 'box';
      container.appendChild(box);

      box.addEventListener('mouseenter', () => {
        box.classList.add('hovered');
        });
    });
  }

document.querySelector('#reset').addEventListener('click', () => {
  createBoxes(400, '#container');
});
  
  // Example
  createBoxes(19, '#container');
