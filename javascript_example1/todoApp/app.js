console.log(document.querySelector(".card-body"));
/*
Global Değişkenler
*/
let input = document.querySelector(".input");
let cardBody = document.querySelector(".card-body");
let alertContainer = document.querySelector(".alertContainer");
const successAlert = `<div class="alert alert-success" role="alert">
Basarı ile eklendi
</div>`;
const failAlert = `<div class="alert alert-danger" role="alert">
Todo EKLENEMEDİ!!!!
</div>`;
/*
 todo içeriği boş ise danger bir alert olusturacagız eger dolu ise success bir alert olusturacagız
 bunun için bir metoto yazalım showAlert();
*/
function todoEkle() {
  let todo = input.value;
  if (todo !== "") {
    createTodoElement(todo);
    addTodoToLocalStorage(todo);
    showAlert("success", "Todo Başarı ile eklendi");
  } else {
    showAlert("danger", "Todo  EKLENEMEDİ!!!!");
  }

  // addAlertAnimation();
}
//1.YONTEM ALERT EKLEMEK İÇİN
function showAlert(type, message) {
  /*
<div class="alert alert-success" role="alert">
Basarı ile eklendi
</div>`
*/
  let alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  alertContainer.appendChild(alert);
  setTimeout(() => {
    alertContainer.removeChild(alert);
  }, 3000);
}

//2.YONTEM ALERT EKLEMEK İÇİN
function addAlertAnimation() {
  if (input.value !== "") {
    alertContainer.innerHTML = successAlert;
  } else {
    alertContainer.innerHTML = failAlert;
  }
  setTimeout(() => {
    alertContainer.innerHTML = "";
  }, 3000);
}

function createTodoElement(todo) {
  let childHtml = ` 
    <div class="card-item  d-flex justify-content-between w-100 align-items-center">
          <p class="card-text">${todo}</p>
          <div class="d-flex flex-row">
              <button class="btn checkButton"><i class="fas fa-check-circle"></i>
              </button>
              <button class="btn editButton"><i class="fas fa-edit"></i>
              </button>
              <button class="btn deleteButton"><i class="fas fa-trash"></i>
              </button>
          </div> 
      </div>`;
  //1.yontem
  //   let child = document.createElement("div");
  //      child.className =
  //   //     "card-item  d-flex justify-content-between w-100 align-items-center";
  //   child.innerHTML = childHtml;

  //   cardBody.appendChild(child);

  // 2.yontem
  cardBody.innerHTML += ` <div class="card-item   d-flex justify-content-between w-100 align-items-center">
        <p class="card-text">${todo}</p>
        <div class="d-flex flex-row">
            <button class="btn checkButton"><i class="fas fa-check-circle"></i>
            </button>
            <button class="btn editButton"><i class="fas fa-edit"></i>
            </button>
            <button class="btn deleteButton"><i class="fas fa-trash"></i>
            </button>
        </div>
      </div>`;
}

function loadAllTodos() {
  let todos = getTodos();
  todos.forEach((element) => {
    createTodoElement(element);
  });
}

cardBody.addEventListener("click", deleteTodo);

document.addEventListener("DOMContentLoaded", loadAllTodos);

function deleteTodo(e) {
  let parent = e.target.parentElement.parentElement.parentElement;
  if (e.target.className === "fas fa-trash") {
    parent.remove();

    deleteFromStorage(parent.innerText.trim());
  }
}

/*
Local Storage ile ilgili metotlar

*/

function deleteFromStorage(value) {
  let todos = getTodos();

  //   todos.forEach((x, index) => {
  //     if (x == value) {
  //       console.log(value);
  //       todos.splice(index, 1);
  //     }
  //   });

  todos = todos.filter((x) => x !== value);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodoToLocalStorage(todo) {
  let todosList = getTodos();
  todosList.push(todo);
  // ilk çalıştıgında  localStorage todos olusturur daha sonra setleme işlemleri ile değiştirlir
  localStorage.setItem("todos", JSON.stringify(todosList));
}

function getTodos() {
  let todosList;
  if (localStorage.getItem("todos") === null) {
    todosList = [];
  } else {
    todosList = JSON.parse(localStorage.getItem("todos"));
  }
  return todosList;
}
