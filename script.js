const spnFrase = document.getElementById('meme-text');
const iptFrase = document.getElementById('text-input');

iptFrase.addEventListener('keyup', () => {
  spnFrase.textContent = iptFrase.value;
});
