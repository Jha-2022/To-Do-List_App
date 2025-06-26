// document.getElementById('testList').addEventListener('change', function(e){
//     if(e.target && e.target.ClassList.contains('eask-checkbox')){
//         const li =   e.target.closest('li');
//         if(e.target.checked){
//             li.classList.add('completed')
//         }

//         else{
//             li.ClassList.remove('completed');
//         }
//     }    
// });


const input = document.getElementById("textinput");
const addBtn = document.getElementById("btn");
const tasks = document.getElementById("taskList")




function addTask(taskText){
    const li = document.createElement('li');
    
    
    
    const delBtn = document.createElement('button');
    // delBtn.textContent = "Delete";
    delBtn.className = "deleter";
    delBtn.onclick = function(e){
        e.stopPropagation();
        // tasks.removeChild(li);
        li.classList.toggle('completed');
    }
    
    li.appendChild(delBtn);

    // Then append the text as a text node
    li.appendChild(document.createTextNode(" " + taskText));
    tasks.appendChild(li);
    // li.textContent = taskText;
    // li.appendChild(delBtn);
    // tasks.appendChild(li);
}


addBtn.onclick = function(){
    const task = input.value.trim();
    if(task){
        addTask(task);
        input.value = '';
    }
}

input.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        const task = input.value.trim()
        if(task){
            addTask(task);
            input.value = '';
        }
    }
})
