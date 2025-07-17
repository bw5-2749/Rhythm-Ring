const startBtn = document.getElementById('startBtn');
const menu = document.getElementById('menu');
const game = document.getElementById('game');

startBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  game.style.display = 'block';
});
