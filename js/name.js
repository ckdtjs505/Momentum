const name = document.querySelector('.js-name'),
    input = name.querySelector('input'),
    output = document.querySelector('.js-user'),
    todo = document.querySelector('.js-todo');

function saveUser(){
    localStorage.setItem('currentUser', input.value);
}

function handleSubmit(e){
    e.preventDefault();
    painting(input.value);
    saveUser();
}

function painting(user){
    const div = document.createElement('div');
    const hour = (new Date).getHours();
    div.innerHTML = `${(hour >+ 18) ? `Good evening` : 
    (hour <18 && hour >+ 12) ? `Good afternoon` :
    (hour < 12) ? `Good Morning` : '' }, ${user}.`;
    name.className = 'hiding';
    todo.classList.remove('hiding');
    output.appendChild(div);
}

function getCurrentUser(){
    const user = localStorage.getItem('currentUser');
    if(user !== null){
        painting(user);
    }
}

function init(){
    getCurrentUser();
    name.addEventListener('submit', handleSubmit);
}

init();