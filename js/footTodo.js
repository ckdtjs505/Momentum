const footTodoButton = document.querySelector('#js-todoButton'), 
    settings = document.querySelector('#js-setting');
    closeFootTodoButton = document.querySelector('.js-closeFootTodoButton');
function handelfootTodoButton(e) {
    const footTodolist = document.querySelector('.js-footTodolist');
    footTodolist.classList.remove('hiding');
    
    closeFootTodoButton.addEventListener('click', function HandlecloseFootTodoButton(e) {
        e.preventDefault();
        footTodolist.classList.add('hiding');      
    })
}

function handelsettings(e) {
    alert('setting Todo');
}
function init() {
    console.log('object')
    footTodoButton.addEventListener('click', handelfootTodoButton);
    settings.addEventListener('click', handelsettings);
}

init();