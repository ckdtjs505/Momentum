const nameInputForm = document.querySelector('.js-name'),
    input = nameInputForm.querySelector('input'),
    greetingUser = document.querySelector('.js-user'),
    todo = document.querySelector('.js-todo');

let userNameValue = '';
function saveUser() {
    localStorage.setItem('currentUser', input.value);
}

function handleSubmit(e) {
    e.preventDefault();
    painting(input.value);
    saveUser();
}

function handleUserSubmit(e) {
    e.preventDefault();
    const inputUserName = document.querySelector('.inputUserName');
    const user = localStorage.getItem('currentUser');
    const userValue =  inputUserName.value.replace(/(^\s*)|(\s*$)/g, "") ;

    if( userValue === ''){
        paintUser(user);
    }else {
        paintUser(userValue);
        localStorage.setItem('currentUser', userValue);
    }
    inputUserName.remove();
}

function userClickHandle(e) {
    const userName = greetingUser.querySelector('.userName');
    const greeting = greetingUser.querySelector('span');
    const form = document.createElement('form');
    const inputUserName = document.createElement('input');
    inputUserName.value = userName.innerHTML;
    userName.remove();
    inputUserName.className = 'inputUserName'
    // greeting.appendChild(inputUserName);
    form.className ="inline";
    greeting.appendChild(form);

    form.appendChild(inputUserName);
    form.addEventListener('submit',handleUserSubmit)
}

function paintGreeting() {
    const greeting = document.createElement('span');
    const hour = (new Date).getHours();
    greeting.innerHTML = `${(hour >= 18) ? `Good evening` : 
    (hour <18 && hour >= 12) ? `Good afternoon` :
    (hour < 12) ? `Good Morning` : '' }, `;
    greetingUser.prepend(greeting);
}

function paintUser(user) {
    const userName = document.createElement('strong');
    userName.innerHTML = `${user}`
    userName.className = 'userName';
    nameInputForm.className = 'hiding';
    todo.classList.remove('hiding');
    greetingUser.appendChild(userName);
    userName.addEventListener('click', userClickHandle)
}
function painting(user) {
    paintGreeting();
    paintUser(user);
}

function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    if ( user !== null ) {
        painting(user);
    }
}

function init() {
    getCurrentUser();
    nameInputForm.addEventListener('submit', handleSubmit);
}

init();