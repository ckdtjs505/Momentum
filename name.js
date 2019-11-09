const name = document.querySelector('.js-name'),
    input = name.querySelector('input'),
    output = document.querySelector('.js-div');

function saveUser(){
    localStorage.setItem('currentUser', input.value);
}
function handleSubmit(e){
    e.preventDefault();
    painting(input.value);
    saveUser();
}

function painting(user){
    const h1 = document.createElement('h1');
    h1.innerHTML = `Hello ${user}`;
    name.className = 'hiding';
    output.appendChild(h1);
}

function getCurrentUser(){
    const user = localStorage.getItem('currentUser');
    // console.log(user);
    if(user !== null){
        painting(user);
    }
}
function init(){
    getCurrentUser();
    name.addEventListener('submit', handleSubmit);
}
init();