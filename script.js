
const grid = document.querySelector('.grid');
const emojis = ['💳', '📱', '🧾', '🎲', '💵', '🎨', '🖼️', '🧠', '💡', '📷', '🌐'];

for (let i = 0; i < 2500; i++) {
  const item = document.createElement('div');
  item.className = 'item';
  item.textContent = emojis[i % emojis.length];
  grid.appendChild(item);
}
window.onload = () => {
  // Scroll to the center of the page
  window.scrollTo(
    document.body.scrollWidth / 2 - window.innerWidth / 2,
    document.body.scrollHeight / 2 - window.innerHeight / 2
  );
};