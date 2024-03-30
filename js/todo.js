// Step -1

const inputArea = document.querySelector('.input_area input');
const inputBtn = document.querySelector('.input_area button');
const todoList = document.querySelector('.todo_list');

// Step - 2

inputBtn.addEventListener('click', function(e){
    const taskName = inputArea.value;
    if(taskName){
        const li = document.createElement('li');
        li.innerHTML = `${taskName} <button id='delete'>X</button>`;
        todoList.append(li)
        inputArea.value = '';
    }
    
})

// Steop - 3 

todoList.addEventListener('click', function(e){
    const el = e.target;
    if(el.id === 'delete'){
        el.parentElement.remove();
    }
})

// Step - 4

inputArea.addEventListener('keydown', function(e){
    const enterAdd = e.target.value;
    if(e.key === 'Enter'){
        e.preventDefault();
        const li = document.createElement('li');
        li.innerHTML = `${enterAdd} <button id='delete'>X</button>`;
        todoList.append(li)
        inputArea.value = '';
    }
    else if(e === ' ' ){
       alert('please provide valid info')
    }
})