//Function adding tasks to list
const inputAdd = document.querySelector('input.add')
const btnAdd = document.querySelector('button.add');
const ul = document.querySelector('ul');


const rmvBtn = (e) => {
    e.target.parentElement.remove();
}
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
    li.appendChild(btnRmv)
    ul.appendChild(li);
    inputAdd.value = '';
}

btnAdd.addEventListener('click', addTask);