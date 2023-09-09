const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoForm input");
const toDoList = document.getElementById("todDoList");

const toDoArray = [];


//main event handler comprised of three minor funcs
function toDoHandler(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDoArray.push(newToDoObj);
  paintToDos(newToDoObj);
  saveToDos();
}

//show todos on the user screen
function paintToDos(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span")
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteToDo)
    li.appendChild("span");
    li.appendChild("button");
    todDoList.appendChild("li");
  }
  
//save todos in the local storage
function saveToDos() {
  localStorage.setItem("savedToDoList", JSON.stringify(toDoArray));
}

//remove func
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

toDoForm.addEventListener("submit", toDoHandler);

const savedToDos = localStorage.getItem("savedToDoList");

if(savedToDos !== null) {
   const parseToDo = JSON.parse(savedToDos);
    toDoArray = parseToDo;
    parseToDo.forEach(paintToDos)
}


