const todoinput = todo.querySelector('input'),
    list = document.querySelector('.js-list');

let datalist = [];

function saveDatalist(datalist) {
    localStorage.setItem('currentList', JSON.stringify(datalist));
}

function handleClick(e) {
    const todoQeus = document.querySelector('.todoQeus');
    const todoHead = todo.querySelector('.todoHead');
    const parentButton = e.target.parentNode;

    datalist = datalist.filter(function (data) {
        return data.data != e.target.previousSibling.data;
    })
    saveDatalist(datalist);
    todoQeus.classList.remove('hiding');
    todoinput.classList.remove('hiding');
    todoHead.remove();
    parentButton.remove();
}

function createlist(value) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.innerHTML = value;
    btn.innerHTML = 'x';
    list.appendChild(li);
    li.appendChild(btn);
    btn.addEventListener('click', handleClick);
}

function createHead() {
    const todoQeus = document.querySelector('.todoQeus');
    const todoHead = document.createElement('h1');
    todoHead.innerHTML = 'TODAY';
    todoHead.className = 'todoHead';
    todoQeus.classList.add('hiding');
    todoinput.classList.add('hiding');
    todo.appendChild(todoHead);
}
function handleTodoSubmit(e) {
    e.preventDefault();
    createHead();
    createlist(todoinput.value);
    const addList = {
        data: todoinput.value
    }
    datalist.push(addList);
    saveDatalist(datalist);
    todoinput.value = '';    
}

function paintingList(currentList) {
    createHead();
    currentList.forEach(function (data) {
        createlist(data.data);
    })

    datalist = currentList;
}

function getList() {
    const currentList = localStorage.getItem('currentList');
    if (currentList !== null) {
        paintingList(JSON.parse(currentList));
    } else if( currentList.length === 0){

    }
}

function init() {
    getList();
    todo.addEventListener('submit', handleTodoSubmit)
}
init();