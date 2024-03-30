// Step:- 1

const inputField = document.querySelector('.input_area input');
const addBtn = document.querySelector('.input_area button');
const listAdd = document.querySelector('.add_list');



// Step :- 2

addBtn.addEventListener('click', function(){
    const text = inputField.value;
    if(text){
        const li = document.createElement('li');
        li.style.listStyleType = 'hiden'

        li.innerHTML = `${text} <button id='delete'>X</button>`;
        listAdd.append(li);
        inputField.value = '';
    }
    
});

// Step:- 3
listAdd.addEventListener('click', function(event){
    const removeElement = event.target;
    if(removeElement.id === 'delete'){
        removeElement.parentElement.remove()
    }

})

// Step:- 4
inputField.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        
        const text = inputField.value;
        const li = document.createElement('li');
        li.style.listStyleType = 'hiden'
        li.innerHTML = `${text} <button id='delete'>X</button>`
        listAdd.append(li);
        inputField.value = '';
    }
})
 