const spnFrase = document.getElementById('meme-text');
const iptFrase = document.getElementById('text-input');
const iptMemeImage = document.getElementById('meme-insert');
const imgImage = document.getElementById('meme-image');
const conteiner = document.getElementById('meme-image-container');

iptFrase.addEventListener('keyup', () => {
  spnFrase.textContent = iptFrase.value;
});


iptMemeImage.addEventListener('change',(evt)=>{
  const input = evt.target;
  const file = input.files[0];
  console.log (input);
  console.log(file)

    alert('tem arquivo');
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    console.log('vou definir o event load')
    console.log(reader);
    reader.addEventListener('load',(evt)=>{
      console.log('fdsfadfd')
      const readerTarget = evt.target;
      imgImage.setAttribute('src',readerTarget.result)
    });

});





