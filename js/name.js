const name = document.querySelector('.js-name'),
    input = name.querySelector('input'),
    output = document.querySelector('.js-user'),
    todo = document.querySelector('.js-todo');

function saveUser() {
    localStorage.setItem('currentUser', input.value);
}

function handleSubmit(e) {
    e.preventDefault();
    painting(input.value);
    saveUser();
}

function userClickHandle(e) {
    const userContext = document.createElement('strong');
    console.dir(userContext)
}

function painting(user) {
    const div = document.createElement('div');
    const hour = (new Date).getHours();
    const userContext = document.createElement('strong');
    div.innerHTML = `${(hour >+ 18) ? `Good evening` : 
    (hour <18 && hour >+ 12) ? `Good afternoon` :
    (hour < 12) ? `Good Morning` : '' }, `;
    userContext.innerHTML = `${user}.`

   
    userContext.className = 'userName';
    name.className = 'hiding';
    todo.classList.remove('hiding');
    div.appendChild(userContext);
    output.appendChild(div);


    userContext.addEventListener('click', userClickHandle)
}

function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    if (user !== null) {
        painting(user);
    }
}

function init() {
    getCurrentUser();
    name.addEventListener('submit', handleSubmit);
}

init();