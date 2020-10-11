const draggables = document.querySelectorAll('*[draggable=true]');
const dragify = (draggable) => {
  draggable.style.position = 'fixed';
  const screenW = document.body.clientWidth;
  const screenH = document.body.clientHeight;
  const windowRect = draggable.getBoundingClientRect();
  const top = Math.random() * screenW - windowRect.width;
  const left = Math.random() * screenH - windowRect.height;
  draggable.style.left = `${top > 0 ? top : 0}px`;
  draggable.style.top = `${left > 0 ? left: 0}px`;
};
draggables.forEach((draggable) => dragify(draggable));

const ls = window.localStorage;

const initializeWindowPosition = (draggable) => {
  const key = draggable.getAttribute('data-key');
  if(!key)
  return;
  const info = JSON.parse(ls.getItem(`${key}-info`));
  if(!info)
    return;
  const { top, left } = info;
  draggable.style.top = top;
  draggable.style.left = left;
};
const initWindowPositions = () => {
  const draggables = document.querySelectorAll('.draggable');
  draggables.forEach(initializeWindowPosition);
}

let initOffsetX = 0, initOffsetY = 0;
document.body.addEventListener('dragstart', (e) => {
  if(e.target.classList.contains('draggable')) {
    initOffsetX = e.offsetX;
    initOffsetY = e.offsetY;
    e.dataTransfer.setDragImage(document.createElement('img'),0,0);
  }
});
document.body.addEventListener('drag', (e) => {
  const ls = window.localStorage;
  if(e.target.classList.contains('draggable')) {
    const rect = e.target.getBoundingClientRect();
    if(!!e.screenX && !!e.screenY) {
      e.target.style.left = `${rect.x + e.offsetX - initOffsetX}px`;
      e.target.style.top = `${rect.y + e.offsetY - initOffsetY}px`;
      const key = e.target.getAttribute('data-key');
      if(!key)
        return;
      const info = JSON.parse(ls.getItem(`${key}-info`)) || {};
      const infoValue = JSON.stringify({
        ...info,
        top: e.target.style.top,
        left: e.target.style.left,
      });
      ls.setItem(`${key}-info`, infoValue);
    }
  }
});

document.body.addEventListener('click', (e) => {
  if(e.target.classList.contains('btn-toy')) {
    const el = document.createElement('div')
    el.classList.add('wrapper');
    el.classList.add('toy');
    el.classList.add('draggable');
    el.draggable = true;
    el.innerHTML = `
      <div class="default_title">
        <h1>Hello, World</h1>
        <button class='btn btn-close'>
          <span class="fa fa-times">
        </button>
      </div>
      <div class='img-toy'>
        <img src='https://source.unsplash.com/480x320/?vaporwave'/>
      </div>
    `;
    dragify(el);
    document.body.prepend(el);
  } else if (e.target.classList.contains('btn-close')) {
    const wrapper = e.target.closest('.wrapper');
    wrapper.remove();
  }
});

initWindowPositions();