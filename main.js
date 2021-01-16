const inputAdd = document.querySelector('input.add')
const btnAdd = document.querySelector('button.add');
const ul = document.querySelector('ul');
let number = 0;
let listLi;

//Function removing tasks from list by click to button 
const rmvBtn = (e) => {
    e.target.parentElement.remove();
    number--;
    document.querySelector('h2 span').textContent = number;
    listLi = [...document.querySelectorAll('li')];
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
    number++;
    document.querySelector('h2 span').textContent = number;
    inputAdd.value = '';
    listLi = [...document.querySelectorAll('li')];
}

btnAdd.addEventListener('click', addTask);

//Search function
const inputSrc = document.querySelector('input.search')

const searchTask = (e) => {
    let result = listLi.filter(li =>
        li.textContent.toLowerCase().includes(e.target.value.toLowerCase())
    )
    console.log(result);
    ul.textContent = '';
    result.forEach(li => {
        ul.appendChild(li)
    })

}


inputSrc.addEventListener('input', searchTask);