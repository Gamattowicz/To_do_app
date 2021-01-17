const inputAdd = document.querySelector('input.add')
const btnAdd = document.querySelector('button.add');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h2 span');
let listLi;

//Function removing tasks from list by click to button 
const rmvBtn = (e) => {
    e.target.parentNode.remove();
    listLi = [...document.querySelectorAll('li')];
    taskNumber.textContent = listLi.length;
}

//Function adding strikethrough
const taskDone = function (e) {
    e.target.parentNode.classList.toggle('done');
}

//Function adding tasks to list
const addTask = (e) => {
    e.preventDefault();
    const task = inputAdd.value;
    if (task === '') {
        return alert('You have to enter task')
    }
    const li = document.createElement('li');
    li.innerHTML = task + `<i class="fas fa-minus-circle"></i> <i class="far fa-check-circle"></i>`;
    li.querySelector('i.fas').addEventListener('click', rmvBtn);
    li.querySelector('i.far').addEventListener('click', taskDone);
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