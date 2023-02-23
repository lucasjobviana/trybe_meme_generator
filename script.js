const spnFrase = document.getElementById('meme-text');
const iptFrase = document.getElementById('text-input');
const iptMemeImage = document.getElementById('meme-insert');
const imgImage = document.getElementById('meme-image');

iptFrase.addEventListener('keyup', () => {
  spnFrase.textContent = iptFrase.value;
});

iptMemeImage.onchange = () => {
  // imgImage.setAttribute('src', iptMemeImage.value);
  console.log(iptMemeImage.value);
  console.log(iptMemeImage.name);
  console.log(iptMemeImage.files[0].name);
};
