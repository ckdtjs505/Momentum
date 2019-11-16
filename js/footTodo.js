const footTodo = document.querySelector('#js-todoButton'), 
    settings = document.querySelector('#js-setting');

function handelFootTodo(e) {
    alert('click Todo');
}

function handelsettings(e) {
    alert('setting Todo');
}
function init() {
    footTodo.addEventListener('click', handelFootTodo);
    settings.addEventListener('click', handelsettings);
}

init();