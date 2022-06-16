const memePic = document.querySelector('#picture');
const topText = document.querySelector('#top');
const bottomText = document.querySelector('#bottom');
const form =  document.querySelector('#add-meme');
const container = document.querySelector( "#container");
const body = document.querySelector('body');
const row = document.getElementById('row');




form.addEventListener('submit',function(e) { 
    e.preventDefault();
    const memeContainer = document.createElement('div');
    const newMeme = document.createElement('img');
    const memeTextTop  = document.createElement('p');
    let tBelow = document.createElement("p");
    tBelow.classList.add('bottom-class')
    memeContainer.classList.add("meme-container");
    const memeWrapper = document.createElement('div');
    memeTextTop.innerText = topText.value;
    tBelow.innerText = bottomText.value;
    const net = document.createElement('div');
    memeContainer.appendChild(tBelow);
    newMeme.src = memePic.value;
    memeContainer.appendChild(memeTextTop);
    newMeme.classList.add('memeContainer');
    memeContainer.appendChild(newMeme);
    memeWrapper.appendChild(memeContainer);
    row.appendChild(memeWrapper)
    e.target.reset()
});

body.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG'){
        event.target.parentElement.remove();
    }
});