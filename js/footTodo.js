const footTodoButton = document.querySelector('#js-todoButton'), 
    qt = document.querySelector('#js-qt'),
    inputTodo = document.querySelector('.js-inputTodo'),
    askTodo = document.querySelector('#js-askTodo');

let currentFootTodolist = [];

function HandleinputTodo(e) {
    e.preventDefault();
    askTodo.classList.add('hiding');
    const data = {
        data : inputTodo.value,
        value : false
    }
    
    inputTodo.value = ''; 
    if(data.data !== ''){
        currentFootTodolist.push(data);
        localStorage.setItem('currentFootData', JSON.stringify(currentFootTodolist));
    }

    //painting
    paintingList(currentFootTodolist);
}

function paintingList(Data) {
    let todolist = document.querySelector('#js-todolist');
    todolist.querySelectorAll('*').forEach( n => n.remove());
    
    Data.forEach(function(data) {
        const checkbox = document.createElement('input')
        const datali = document.createElement('li'); 
        const button = document.createElement('button');
        
        checkbox.type ="checkbox";
        if(data.value === true){
            datali.className = "checkClicked";
            checkbox.checked = true;
        }else {
            datali.className = "";
            checkbox.checked = false;
        }
        button.innerText = 'x'
        datali.innerText = data.data;
        todolist.appendChild(datali);
        datali.prepend(checkbox);
        datali.appendChild(button);

        button.addEventListener('click', function handelClickEvent(e) {
            button.parentNode.remove();
            
            currentFootTodolist = currentFootTodolist.filter( function (data) {
                return data.data !== button.parentNode.textContent.slice(0,-1);
            })
            if(currentFootTodolist.length === 0){
                askTodo.classList.remove('hiding'); 
                inputTodo.classList.add('hiding');
            }
                
            localStorage.setItem('currentFootData', JSON.stringify(currentFootTodolist));
        })

        checkbox.addEventListener('click', function handleCheckbox() {
            if(checkbox.parentNode.className === ""){
                checkbox.parentNode.className = "checkClicked"; 
                currentFootTodolist.forEach(function (data) {
                    if(data.data === checkbox.nextSibling.data)
                        data.value = true;
                })
            } else {
                checkbox.parentNode.className = ""; 
                currentFootTodolist.forEach(function (data) {
                    if(data.data === checkbox.nextSibling.data)
                        data.value = false;
                })
            }
           
            localStorage.setItem('currentFootData', JSON.stringify(currentFootTodolist));
        })
    }) 
    todolist.classList.remove('hiding');
}

function handelfootTodoButton(e) {
    const currentFootData = localStorage.getItem('currentFootData');
    const closeFootTodoButton = document.querySelector('.js-closeFootTodoButton');
    const footTodolist = document.querySelector('.js-footTodolist');
    const askTodoButton = askTodo.querySelector('button');
    
    // 데이터가 있을 시     
    if(currentFootData !== null && currentFootData.length !== 2){
        // 데이터가 있으므로 물어보는 html 숨기기
        askTodo.classList.add('hiding');

        // todolist html 등장
        footTodolist.classList.remove('hiding'); 
        inputTodo.classList.remove('hiding');
        
        // js-tododolist dom 초기화
        let todolist = document.querySelector('#js-todolist');
        todolist.querySelectorAll('*').forEach( n => n.remove()); // 기존의 데이터 삭제

        // currentlistData 데이터 가져오기
        const currentlistData = JSON.parse(localStorage.getItem('currentFootData')); 
        currentFootTodolist = currentlistData;

        // currentlistData 데이터 그리기
        paintingList(currentlistData);

        // todolist datalist를 html 보이기 
        todolist.classList.remove('hiding');
        
        // inputTodo data input event
        inputTodo.parentElement.addEventListener('submit', HandleinputTodo );

        closeFootTodoButton.addEventListener('click', function HandlecloseFootTodoButton(e) {
            e.preventDefault();
            inputTodo.value = '';
            inputTodo.classList.add('hiding');
            footTodolist.classList.add('hiding');      
        })

    }else {
        // 데이터 없을 시 

        // todolist html 등장
        footTodolist.classList.remove('hiding'); 

        // inputTodo data input event
        inputTodo.parentElement.addEventListener('submit', HandleinputTodo);
        
        // askTodoButton event
        askTodoButton.addEventListener('click', function HandleAsktodoButton(e) {
            e.preventDefault();
            inputTodo.classList.remove('hiding');
        })

         // askTodoButton event
        closeFootTodoButton.addEventListener('click', function HandlecloseFootTodoButton(e) {
            e.preventDefault();
            inputTodo.value = '';
            inputTodo.classList.add('hiding');
            footTodolist.classList.add('hiding');      
        })
    }
}

function handelsettings(e) {
    window.location.href ='https://sum.su.or.kr:8888/bible/today';
}

function init() {
    footTodoButton.addEventListener('click', handelfootTodoButton);
    qt.addEventListener('click', handelsettings);
}

init();