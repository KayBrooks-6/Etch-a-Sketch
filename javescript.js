

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
  
  // Example
  createBoxes(19, '#container');
