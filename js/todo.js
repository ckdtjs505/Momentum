const todoinput = todo.querySelector('input'),
    list = document.querySelector('.js-list');

let datalist = [];

function saveDatalist(datalist){
    localStorage.setItem('currentList', JSON.stringify(datalist));
}

function handleClick(e){
    const parentButton = e.target.parentNode;
    // console.log(e.target.previousSibling.data);
    datalist = datalist.filter(function(data){
        return data.data != e.target.previousSibling.data;
    })
    saveDatalist(datalist);
    parentButton.remove();
}

function createlist(value){
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.innerHTML = value;
    btn.innerHTML = 'x';
    list.appendChild(li);
    li.appendChild(btn);
    btn.addEventListener('click', handleClick);
}

function handleTodoSubmit (e){
    e.preventDefault();
    createlist(todoinput.value)
    const addList = {
        data : todoinput.value
    }
    datalist.push(addList);
    saveDatalist(datalist);
    todoinput.value = '';
}

function paintingList(currentList){
    currentList.forEach(function(data){
        createlist(data.data);
    })

    datalist = currentList;
}

function getList(){
    const currentList = localStorage.getItem('currentList');
    if(currentList !== null){
        paintingList(JSON.parse(currentList));
    }
}

function init(){
    getList();
    todo.addEventListener('submit', handleTodoSubmit) 
}
init();