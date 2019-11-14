const nameInputForm = document.querySelector('.js-name'),
    input = nameInputForm.querySelector('input'),
    greetingUser = document.querySelector('.js-user'),
    todoForm = document.querySelector('.js-todo');


function saveUser(user) {
    localStorage.setItem('currentUser', user);
}

function handleNameInputFormSubmit(e) {
    e.preventDefault();
    painting(input.value);
    saveUser(input.value);
}

function handleUserSubmit(e) {
    e.preventDefault();
    const inputUserName = document.querySelector('.inputUserName');
    const user = localStorage.getItem('currentUser');
    const userValue =  inputUserName.value.replace(/(^\s*)|(\s*$)/g, "") ;
    if( userValue === ''){
        createUser(user);
    }else {
        createUser(userValue);
        saveUser(userValue);
    }
    inputUserName.remove();
}


function handleuserClick() {
    const userName = greetingUser.querySelector('.userName');
    createNewUserName(userName.innerHTML);
    userName.remove();   // deleteNewUserName;
}

function createTodoForm() {
    todoForm.classList.remove('hiding');
}

function createGreeting() {
    const greeting = document.createElement('span');
    const hour = (new Date).getHours();
    greeting.innerHTML = `${(hour >= 18) ? `Good evening` : 
    (hour <18 && hour >= 12) ? `Good afternoon` :
    (hour < 12) ? `Good Morning` : '' }, `;

    greetingUser.prepend(greeting);
}

function createNewUserName(user) {
    const greeting = greetingUser.querySelector('span');
    const form = document.createElement('form');
    const inputUserName = document.createElement('input');
    inputUserName.value = user;

    form.className ="inline";
    inputUserName.className = 'inputUserName';
    greeting.appendChild(form);
    form.appendChild(inputUserName);
    form.addEventListener('submit',handleUserSubmit)
}

function createUser(user) {
    const userName = document.createElement('strong');
    userName.innerHTML = `${user}`
    userName.className = 'userName';  

    greetingUser.appendChild(userName);
    userName.addEventListener('click', handleuserClick)
}

function deleteNameInputForm() {
    nameInputForm.className = 'hiding';
}

function painting(user) {
    deleteNameInputForm();
    createGreeting();
    createUser(user);
    createTodoForm(); 
}

function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    if ( user !== null ) {
        painting(user);
    }
}

function init() {
    getCurrentUser();
    nameInputForm.addEventListener('submit', handleNameInputFormSubmit);
}

init();