const footTodoButton = document.querySelector('#js-todoButton'), 
    settings = document.querySelector('#js-setting');

function handelfootTodoButton(e) {
    const currentFootData = localStorage.getItem('currentFootData');
     
    const closeFootTodoButton = document.querySelector('.js-closeFootTodoButton');
    const footTodolist = document.querySelector('.js-footTodolist');
    const askTodo = document.querySelector('#js-askTodo');
    const askTodoButton = askTodo.querySelector('button');
    const inputTodo = document.querySelector('.js-inputTodo');

    footTodolist.classList.remove('hiding');

    closeFootTodoButton.addEventListener('click', function HandlecloseFootTodoButton(e) {
        e.preventDefault();
        inputTodo.value = '';
        inputTodo.classList.add('hiding');
        footTodolist.classList.add('hiding');      
    })

    if(currentFootData !== null){
        
        askTodo.classList.add('hiding');
        inputTodo.classList.remove('hiding');

        let todolist = document.querySelector('#js-todolist');
        const currentlistData = localStorage.getItem('currentFootData');
        const datali = document.createElement('li'); 
        datali.innerText = currentlistData;
        todolist.appendChild(datali);
        todolist.classList.remove('hiding');
    }else {
        
    
        inputTodo.parentElement.addEventListener('submit', function HandleinputTodo(e) {
            e.preventDefault();
            askTodo.classList.add('hiding');
            localStorage.setItem('currentFootData', inputTodo.value);
            inputTodo.value = '';

            
            // painting 
            let todolist = document.querySelector('#js-todolist');
            const currentlistData = localStorage.getItem('currentFootData');
            const datali = document.createElement('li'); 
            datali.innerText = currentlistData;
            todolist.appendChild(datali);
            todolist.classList.remove('hiding');
            
            
        })
    
        askTodoButton.addEventListener('click', function HandleAsktodoButton(e) {
            e.preventDefault();
            inputTodo.classList.remove('hiding');
        })

        
    }
}

function handelsettings(e) {
    alert('setting Todo');
}

function init() {

    footTodoButton.addEventListener('click', handelfootTodoButton);
    settings.addEventListener('click', handelsettings);
}

init();