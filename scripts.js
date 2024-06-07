document.addEventListener('DOMContentLoaded', () => {
    const leftPillar = document.querySelector('.pillar.left');
    const rightPillar = document.querySelector('.pillar.right');
  
    function createSpiral() {
      const spiral = document.createElement('div');
      spiral.classList.add('spiral');
      return spiral;
    }
  
    for (let i = 0; i < 10; i++) {
      leftPillar.appendChild(createSpiral());
      rightPillar.appendChild(createSpiral());
    }
  });
  