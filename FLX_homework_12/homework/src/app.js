const addButton = document.getElementById('addButton');
const inputTask = document.getElementById('toDoEl');
const editTask = document.getElementById('editTask');
const checkTask = document.getElementById('list');
const notification = document.getElementById('notification');
const deleteButton = document.getElementById('delete');
const pages = ['index', 'add', 'modify'];
const empty = 0;
let items = [];
let id = [];
let labelToEdit = null;

load();

function load() {
  items = loadFromLocalStorage();
  id = getNextId();
  items.forEach(item => renderItem(item));
}

function show(shown) {
  location.href = '#' + shown;
  pages.forEach(page => {
    document.getElementById(page).style.display = 'none';
  });
  document.getElementById(shown).style.display = 'block';

  return false;
}

function getNextId() {
  for (let i = 0; i<items.length; i++) {
    let item = items[i];
    if (item.id > id) {
      id = item.id;
    }
  }
  id++;

  return id;
}

function loadFromLocalStorage() {
  const localStorageItems = localStorage.getItem('items');

  if (localStorageItems === null) {
    return [];
  }

  return JSON.parse(localStorageItems);
}

function saveToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function setChecked(checkbox, isDone) {
  if (isDone) {
    checkbox.classList.add('checked');
    checkbox.src = 'assets/img/done-s.png';
    
    const listItem = checkbox.parentNode;
    listItem.classList.add('checked');
    checkTask.removeChild(listItem);
    checkTask.appendChild(listItem);
  } else {
    checkbox.classList.remove('checked');
    checkbox.src = 'assets/img/todo-s.png';

    const listItem = checkbox.parentNode;
    listItem.classList.remove('checked');
  }
}

function renderItem(item) {
  const listItem = document.getElementById('item_template').cloneNode(true);
  listItem.style.display = 'block';
  listItem.setAttribute('data-id', item.id);

  const label = listItem.querySelector('label');
  label.innerText = item.description;

  const checkbox = listItem.querySelector('input');
  checkTask.appendChild(listItem);
  setChecked(checkbox, item.isDone);
  notification.style.display = 'none';

  return listItem;
}

function createNewElement(task, isDone) {
  const item = { isDone, id: id++, description: task };
  items.push(item);
  saveToLocalStorage();
  renderItem(item);
}

function addTask() {  
  if (inputTask.value) {
    createNewElement(inputTask.value, false);
    inputTask.value = '';
    show('index');
  }
}

function modifyTask() {  
  if (editTask.value) {
    const item = findItem(labelToEdit);
    item.description = editTask.value;
    labelToEdit.innerText = editTask.value;
    saveToLocalStorage();
    show('index');
  }
}

function findItem(child) {
  const listItem = child.parentNode;
  let id = listItem.getAttribute('data-id');
  id = parseInt(id);
  const item = items.find(item => item.id === id);

  return item;
}

function checkItem(checkbox) {
  const item = findItem(checkbox);

  if (item === null) {
    return;
  }

  item.isDone = !item.isDone;
  saveToLocalStorage();
  setChecked(checkbox, item.isDone);
}

function deleteItem(input) {
  const listItem = input.parentNode;
  let id = listItem.getAttribute('data-id');
  id= parseInt(id);

  for (let i in items) {
    if (items[i].id === id) {
      items.splice(i, 1);
      break;
    }
  }

  if (items.length === empty) {
      notification.style.display = 'block';
  }

  saveToLocalStorage();
  listItem.parentNode.removeChild(listItem);
}

function modifyItem(label) {
  labelToEdit = label;
  editTask.value = label.innerText;
  show('modify');
  editTask.focus();
  editTask.select();
}