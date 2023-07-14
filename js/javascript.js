const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');
let pointerId = null;

mobileBtn.addEventListener('pointerdown', (event) => {
  pointerId = event.pointerId;
  nav.classList.add('menu-btn');
  mobileBtn.setPointerCapture(pointerId);
});

mobileBtnExit.addEventListener('pointerdown', () => {
  nav.classList.remove('menu-btn');
  mobileBtn.releasePointerCapture(pointerId);
});

