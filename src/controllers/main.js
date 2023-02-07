function get(id) {
  return document.getElementById(id);
}

var list = new List();
var validation = new Validation();

function getTask() {
  var task = get("newTask").value;
  var isValid = true;
  isValid &=
    validation.isEmpty(task, "notiInput", "Please input a task") &&
    validation.isExist(task, "notiInput", "Task is existed", list.arr);
  if (!isValid) return null;
  var item = new Item(task);
  return item;
}

function renderTask(data) {
  todo = "";
  complete = "";
  data.forEach(function (task) {
    if (!task.status) {
      todo += `
      <li>
        <span>${task.name}</span>
        <div class="buttons">
          <button class="remove" data-index="0" data-status="todo" onclick="deleteToDo('${task.name}')">
            <i class="fa fa-trash-alt"></i>
          </button>
          <button class="complete" data-index="0" data-status="todo" onclick="completeToDo('${task.name}')">
            <i class="far fa-check-circle"></i>
          </button>
        </div>
      </li>
      `;
    } else {
      complete += `
      <li>
        <span>${task.name}</span>
        <div class="buttons">
          <button class="remove" data-index="0" data-status="todo" onclick="deleteToDo('${task.name}')">
            <i class="fa fa-trash-alt"></i>
          </button>
          <button class="complete" data-index="0" data-status="todo" onclick="completeToDo('${task.name}')">
            <i class="fas fa-check-circle"></i>
          </button>
        </div>
      </li>
      `;
    }
  });
  get("todo").innerHTML = todo;
  get("completed").innerHTML = complete;
}

get("addItem").addEventListener("click", function () {
  var task = getTask();
  task.status = false;
  list.addItem(task);
  get("newTask").value = "";
  renderTask(list.arr);
  setLocalStorage();
});

function deleteToDo(task) {
  list.deleteItem(task);
  renderTask(list.arr);
  setLocalStorage();
}

function completeToDo(name) {
  var task = list.getByItem(name);
  task.status = !task.status;
  renderTask(list.arr);
  setLocalStorage();
}

function setLocalStorage() {
  var dataString = JSON.stringify(list.arr);
  localStorage.setItem("todo", dataString);
}

function getLocalStorage() {
  var dataString = localStorage.getItem("todo");
  list.arr = JSON.parse(dataString);
  renderTask(list.arr);
}

getLocalStorage();
