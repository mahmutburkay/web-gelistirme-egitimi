//Tüm Elementleri Seçmek (yakala)

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");

let todos = [];

runEvents();


function runEvents() {     // ilk çalışacak metod (herşeyi çalıştıracak metod)
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);

}


function addTodo(e) {

    const inputText = addInput.value.trim(); // içine girilen değeri yakala tıraşla(sağ ve soldan)
    if (inputText == null || inputText == "") {
        showAlert("danger", "Lütfen Todo Giriniz.");
    } else {
        // arayüze ekleme
        addTodoToUI(inputText);

        // storage ekleme
        addTodoToStorage(inputText);

        // alert gösterme
        showAlert("success", "Todo Eklendi");

    }

    e.preventDefault();   // sayfa yenileme engelleme

}





//! -------------- ARAYÜZE TODO EKLEME ------------------------------------------

function addTodoToUI(newTodo) {

    //  kopya için bak
    // <li class="list-group-item d-flex justify-content-between">Todo 1
    //     <a href="#" class="delete-item">
    //         <i class="fa fa-remove"></i>
    //     </a>
    // </li>

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;  // değeri yukardan geldi 

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";


    a.appendChild(i);   // A sen içine İ yi koy 
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}





//! -------------- STORAGE'A TODO EKLEME -----------------------------------------

function addTodoToStorage(newTodo) {
    checkTodosFromStorage();

    todos.push(newTodo); // diziye eleman ekleme
    localStorage.setItem("todos", JSON.stringify(todos)); ////* yeni diziyi array olarak storage a kaydet
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {  //* local de todos var mı 
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); ////* diziyi array olarak getir
    }
}





//! ---------------- ALERT GÖSTERME -------------------------------------------------

function showAlert(type, message) {

    /* kopya için bak
    <div class="alert alert-warning" role="alert">
    This is a warning alert—check it out!
    </div>*/

    const div = document.createElement("div");
    // div.className = "alert alert-" + type;
    div.className = `alert alert-${type}`; //litirel template 
    div.textContent = message;

    //cardbody sonuna ekle
    firstCardBody.appendChild(div);

    // 2.5 saniye sonra alert ü kaldır 
    setTimeout(function () {
        div.remove();
    }, 2500);


}






//! -------------- STORAGE DAN TODO LARI GETİRME -------------------------------------

function pageLoaded() {
    checkTodosFromStorage();

    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}