//Add
const inputAdd = document.querySelector('input.add')
const btnAdd = document.querySelector('button.add');
const ul = document.querySelector('ul');

const addTask = (e) => {
    e.preventDefault();
    const task = inputAdd.value;
    if (task === '') {
        return alert('You have to enter task')
    }
    const li = document.createElement('li');
    li.textContent = task;
    const buttonRmv = document.createElement('button');
    buttonRmv.classList = 'delete';
    buttonRmv.textContent = 'Remove';
    li.appendChild(buttonRmv)
    ul.appendChild(li);
    inputAdd.value = '';
}

btnAdd.addEventListener('click', addTask);