const grid = document.querySelector('.grid');

const emojis = ['💳', '📱', '🧾', '🎲', '💵', '🎨', '🖼️', '🧠', '💡', '📷', '🌐'];

for (let i = 0; i < 50; i++) {
  const item = document.createElement('div');
  item.className = 'item';
  item.textContent = emojis[i % emojis.length];
  grid.appendChild(item);
}
