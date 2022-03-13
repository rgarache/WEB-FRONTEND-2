const taskList = [];

const todoElements = document.querySelector("#myUL");

document.getElementById("button").addEventListener("click", addTask);
document.getElementById("myInput").addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    addTask()
  }
});

function addTask() {
  const textInput = document.getElementById("myInput").value;

  if (textInput == "") {
    alert("You did not enter any item");
  } else {
    const todoObject = {
      id: taskList.length,
      textInput: textInput,
      doneTask: false,
    };

    taskList.unshift(todoObject);
    showList();
  }
}

function deleteItem(x) {
  taskList.splice(
    taskList.findIndex((item) => item.id == x),
    1
  );
  showList();
}

function showList() {
  todoElements.innerHTML = "";
  document.querySelector("#myInput").value = "";

  taskList.forEach((item) => {
    const listElement = document.createElement("li");
    const buttonDelete = document.createElement("i");

    listElement.innerHTML = item.textInput;
    listElement.setAttribute("data-id", item.id);

    buttonDelete.setAttribute("data-id", item.id);
    buttonDelete.classList.add("far");
    buttonDelete.classList.add("fa-trash-alt");
    buttonDelete.setAttribute("data-id", item.id);

    if (item.doneTask) {
      listElement.classList.add("done");
    }

    listElement.addEventListener("click", function (e) {
      const selectedTask = e.target.getAttribute("data-id");
      markDone(selectedTask);
    });

    buttonDelete.addEventListener("click", function (e) {
      const deleteIdTask = e.target.getAttribute("data-id");
      deleteItem(deleteIdTask);
    });

    todoElements.appendChild(listElement);
    listElement.appendChild(buttonDelete);
  });
}

function markDone(task) {
  const markedAsDone = taskList.findIndex((item) => item.id == task);

  taskList[markedAsDone].doneTask
    ? (taskList[markedAsDone].doneTask = false)
    : (taskList[markedAsDone].doneTask = true);
  showList();
}



