const inputAdd = document.querySelector('input.add')
const btnAdd = document.querySelector('button.add');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h2 span');
let listLi;

//Function removing tasks from list by click to button 
const rmvBtn = (e) => {
    e.target.parentElement.remove();
    listLi = [...document.querySelectorAll('li')];
    taskNumber.textContent = listLi.length;
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
    listLi = [...document.querySelectorAll('li')];
    taskNumber.textContent = listLi.length;
}

btnAdd.addEventListener('click', addTask);

//Search function
const inputSrc = document.querySelector('input.search')

const searchTask = (e) => {
    let result = listLi.filter(li =>
        li.textContent.toLowerCase().includes(e.target.value.toLowerCase())
    )
    ul.textContent = '';
    result.forEach(li => {
        ul.appendChild(li)
    })
    taskNumber.textContent = [...document.querySelectorAll('li')].length;
}

inputSrc.addEventListener('input', searchTask);