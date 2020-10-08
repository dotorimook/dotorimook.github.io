const draggables = document.querySelectorAll('*[draggable=true]');
draggables.forEach((draggable) => {
  draggable.style.position = 'fixed';
  const screenW = document.body.clientWidth;
  const screenH = document.body.clientHeight;
  const windowRect = draggable.getBoundingClientRect();
  const top = Math.random() * screenW - windowRect.width;
  const left = Math.random() * screenH - windowRect.height;
  draggable.style.left = `${top > 0 ? top : 0}px`;
  draggable.style.top = `${left > 0 ? left: 0}px`;
});
let initOffsetX = 0, initOffsetY = 0;
document.body.addEventListener('dragstart', (e) => {
  if(e.target.classList.contains('draggable')) {
    initOffsetX = e.offsetX;
    initOffsetY = e.offsetY;
    e.dataTransfer.setDragImage(document.createElement('img'),0,0);
  }
});
document.body.addEventListener('drag', (e) => {
  if(e.target.classList.contains('draggable')) {
    const rect = e.target.getBoundingClientRect();
    if(!!e.screenX && !!e.screenY) {
      e.target.style.left = `${rect.x + e.offsetX - initOffsetX}px`;
      e.target.style.top = `${rect.y + e.offsetY - initOffsetY}px`;
    }
  }
});