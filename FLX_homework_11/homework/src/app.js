const addButton = document.getElementById('add');
const inputTask = document.getElementById('toDoEl');
const checkTask = document.getElementById('list');
const notification = document.getElementById('notification');
const maxItems = 10;

let items = [];
let dragSrcEl = null;

function createNewElement(task) {
  const listItem = document.getElementById('item_template').cloneNode(true);
  listItem.hidden = false;
  const label = listItem.querySelector('label');
  label.innerText = task;

  return listItem;
}

function disableAddButton() {
  addButton.disabled = true;
  notification.hidden = false;
  inputTask.disabled = true;
}

function enableAddButton() {
  addButton.disabled = false;
  notification.hidden = true;
  inputTask.disabled = false;
}

function addTask() {
  if (inputTask.value && items.length < maxItems) {
    const listItem = createNewElement(inputTask.value);
    checkTask.appendChild(listItem);
    bindTaskEvents(listItem);
    inputTask.value = '';
    items.push(listItem);

    if (items.length >= maxItems) {
      disableAddButton();
    }
  }
}

function deleteTask() {
  const listItem = this.parentNode.parentNode;
  const ul = listItem.parentNode;
  ul.removeChild(listItem);
  items = items.filter(function (item) {
    return item !== listItem
  });

  if (items.length < maxItems) {
    enableAddButton();
  }
}

function finishTask() {
  const listItem = this.parentNode;
  const checkbox = listItem.querySelector('i.checkbox');
  const isChecked = listItem.classList.contains('checked');

  if (isChecked) {
    checkbox.innerText = 'check_box_outline_blank';
  } else {
    checkbox.innerText = 'check_box';
  }

  listItem.classList.toggle('checked');
}

function bindTaskEvents(listItem) {
  const checkbox = listItem.querySelector('i.checkbox');
  const deleteButton = listItem.querySelector('i.delete');

  checkbox.onclick = finishTask;
  deleteButton.onclick = deleteTask;
  listItem.addEventListener('dragstart', handleDragStart, false);
  listItem.addEventListener('dragover', handleDragOver, false);
  listItem.addEventListener('drop', handleDrop, false);
}

function handleDragStart(e) {
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';

  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  
  if (dragSrcEl !== this) {
    dragSrcEl.parentNode.removeChild(dragSrcEl);
    this.parentNode.insertBefore(dragSrcEl, this);
  }

  return false;
}
