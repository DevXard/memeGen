const form = document.querySelector('#meme-form')
const link = document.querySelector('#link')
const upperText = document.querySelector('#up-text')
const botomText = document.querySelector('#down-text')
const container = document.querySelector('#container')

// Get Values from form and Appeend new meme to the meme wall
form.addEventListener('submit', function(e){
    e.preventDefault()
    // console.log(memeCrator(link.value, upperText.value, botomText.value))
    container.append(memeCrator(link.value, upperText.value, botomText.value))
    link.value = ''
    upperText.value = ''
    botomText.value = ''
})

// Delete button for Mene
container.addEventListener('click', function(e){
    console.log(e.target.tagName)
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove()
    }
})

// Create New Meme function
function memeCrator(link, upText, downText){
    //create all elements for the meme
    const image = document.createElement('img');
    const textUo = document.createElement('div');
    const textDown = document.createElement('div');
    const div = document.createElement('div');
    const button = document.createElement('button')

    //add content to the image and text

    image.setAttribute('src', link);
    image.setAttribute('crossorigin', 'anonymous');
    textUo.innerText = upText;
    textUo.setAttribute('class', 'up');
    textDown.innerText = downText;
    textDown.setAttribute('class', 'down');
    button.innerText = 'X';
    button.setAttribute('class', 'button')

    div.setAttribute('class', 'div-container');

    //append img and thext to the div
    div.append(textUo, image, textDown, button);
    return div
}