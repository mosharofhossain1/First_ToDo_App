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
        li.style.background  = 'gray'
        li.style.color = 'white'
        li.style.padding  = '6px'
        li.style.width = 'calc(100% - 200px)'
        li.style.borderRadius = '7px'
        li.style.marginBottom = '20px' 
        li.innerHTML = `${text} <button style='float:right;' id='delete'>X</button>`;
        listAdd.append(li);
        inputField.value = '';
    }
    else{
        alert('Please Provide Valid Task & Then Click Btn')
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
        li.style.background  = 'gray'
        li.style.color = 'white'
        li.style.padding  = '6px'
        li.style.width = 'calc(100% - 200px)'
        li.style.borderRadius = '7px'
        li.style.marginBottom = '20px' 
        li.innerHTML = `${text} <button style='float:right;' id='delete'>X</button>`;
        listAdd.append(li);
        inputField.value = '';
    }
    
})
 