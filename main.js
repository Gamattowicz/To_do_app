const inputAdd = document.querySelector('input.add')
const btnAdd = document.querySelector('button.add');
const ul = document.querySelector('ul');


//Function removing tasks from list by click to button 
const rmvBtn = (e) => {
    e.target.parentElement.remove();
}

//Function adding strikethrough
const taskDone = function () {
    this.style.textDecoration = 'line-through';
}

//Function adding tasks to list
const addTask = (e) => {
    e.preventDefault();
    const task = inputAdd.value;
    if (task === '') {
        return alert('You have to enter task')
    }
    const li = document.createElement('li');
    li.textContent = task;
    const btnRmv = document.createElement('button');
    btnRmv.classList = 'delete';
    btnRmv.textContent = 'Remove';
    btnRmv.addEventListener('click', rmvBtn);
    li.addEventListener('click', taskDone);
    li.appendChild(btnRmv)
    ul.appendChild(li);
    inputAdd.value = '';
}

btnAdd.addEventListener('click', addTask);