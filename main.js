document.getElementById('testList').addEventListener('change', function(e){
    if(e.target && e.target.ClassList.contains('eask-checkbox')){
        const li =   e.target.closest('li');
        if(e.target.checked){
            li.classList.add('completed')
        }

        else{
            li.ClassList.remove('completed');
        }
    }
});