const footTodoButton = document.querySelector('#js-todoButton'), 
    settings = document.querySelector('#js-setting');

function handelfootTodoButton(e) {
    const footTodolist = document.querySelector('.js-footTodolist');
    footTodolist.classList.remove('hiding');
    console.log(footTodolist)
}

function handelsettings(e) {
    alert('setting Todo');
}
function init() {
    footTodoButton.addEventListener('click', handelfootTodoButton);
    settings.addEventListener('click', handelsettings);
}

init();