const footTodoButton = document.querySelector('#js-todoButton'), 
    settings = document.querySelector('#js-setting');

let currentFootTodolist = [];
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
        todolist.querySelectorAll('*').forEach( n => n.remove());
        const currentlistData = JSON.parse(localStorage.getItem('currentFootData'));
        
        currentlistData.forEach(function(data) {
            const datali = document.createElement('li'); 
            datali.innerText = data.data;
            todolist.appendChild(datali);
        }) 
        todolist.classList.remove('hiding');

        inputTodo.parentElement.addEventListener('submit', function HandleinputTodo(e) {
            e.preventDefault();
            askTodo.classList.add('hiding');
            
            const data = {
                data : inputTodo.value
            }
            
            inputTodo.value = ''; 
            if(data.data !== ''){
                currentFootTodolist.push(data);
                localStorage.setItem('currentFootData', JSON.stringify(currentFootTodolist));
            }
            //painting
            let todolist = document.querySelector('#js-todolist');
            todolist.querySelectorAll('*').forEach( n => n.remove());
            const currentlistData = JSON.parse(localStorage.getItem('currentFootData'));
            
            currentlistData.forEach(function(data) {
                const datali = document.createElement('li'); 
                datali.innerText = data.data;
                todolist.appendChild(datali);
            }) 
            todolist.classList.remove('hiding');
        })

    }else {
        inputTodo.parentElement.addEventListener('submit', function HandleinputTodo(e) {
            e.preventDefault();
            askTodo.classList.add('hiding');
            
            const data = {
                data : inputTodo.value
            }
            
            inputTodo.value = ''; 
            currentFootTodolist.push(data);
            localStorage.setItem('currentFootData', JSON.stringify(currentFootTodolist));
            
            //painting
            let todolist = document.querySelector('#js-todolist');
            todolist.querySelectorAll('*').forEach( n => n.remove());
            const currentlistData = JSON.parse(localStorage.getItem('currentFootData'));
            
            currentlistData.forEach(function(data) {
                const datali = document.createElement('li'); 
                datali.innerText = data.data;
                todolist.appendChild(datali);
            }) 
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