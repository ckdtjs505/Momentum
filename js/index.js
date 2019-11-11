const body = document.querySelector('body');

function init(){
    const img = new Image;
    img.src= `asset/3.jpg`;
    img.classList.add('backgroundImg');
    body.appendChild(img);
    console.log(img)
}

init();