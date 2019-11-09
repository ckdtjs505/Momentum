const todoinput = todo.querySelector('input'),
    list = document.querySelector('.js-list');

function handleTodoSubmit (e){
    e.preventDefault();
    console.log();

    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.innerHTML = todoinput.value;
    btn.innerHTML = 'x';
    todoinput.value = '';
    list.appendChild(li);
    li.appendChild(btn);
}

function init(){
    todo.addEventListener('submit', handleTodoSubmit) 
}
init();