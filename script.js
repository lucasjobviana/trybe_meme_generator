const spnFrase = document.getElementById('meme-text');
const iptFrase = document.getElementById('text-input');
const iptMemeImage = document.getElementById('meme-insert');
const imgImage = document.getElementById('meme-image');
const conteiner = document.getElementById('meme-image-container');
const tools = document.getElementById('tools');

iptFrase.addEventListener('keyup', () => {
  spnFrase.textContent = iptFrase.value;
});

window.onload = () => {

  tools.addEventListener('click', (evt) => {
    const botao = evt.target;

    switch (botao.value) {
      case 'up': conteiner.style.justifyContent = 'flex-start'; break;
      case 'right': conteiner.style.alignItems = 'flex-end'; break;
      case 'down': conteiner.style.justifyContent = 'flex-end'; break;
      case 'left': conteiner.style.alignItems = 'flex-start'; break;
      case 'fire': conteiner.style.border = '3px dashed rgb(255, 0, 0)'; break;
      case 'water': conteiner.style.border = '5px double rgb(0, 0, 255)'; break;
      case 'earth': conteiner.style.border = '6px groove rgb(0, 128, 0)'; break;
      case '1': alert('1'); break;
      case '2': conteiner.style.border = '6px groove rgb(0, 128, 0)'; break;
      case '3': conteiner.style.border = '6px groove rgb(0, 128, 0)'; break;
      case '4': conteiner.style.border = '6px groove rgb(0, 128, 0)'; break;

    }

  });
}


iptMemeImage.addEventListener('change', (evt) => {
  // Algoritmo desenvolvido com base na aprendizagem adquirida a partir dessas fontes:
  // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
  // https://www.youtube.com/watch?v=gXXmQeZOHKY
  const input = evt.target;
  const file = input.files[0];
  console.log(input);
  console.log(file);

  const reader = new FileReader();
  reader.readAsDataURL(file);

  console.log('vou definir o event load')
  console.log(reader);
  reader.addEventListener('load', (evt) => {
    console.log('fdsfadfd')
    const readerTarget = evt.target;
    imgImage.setAttribute('src', readerTarget.result)
  });

});





