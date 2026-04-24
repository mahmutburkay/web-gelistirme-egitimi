//Tüm Elementleri Seçmek (yakala)

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

let todos = [];

runEvents();


function runEvents() {     // ilk çalışacak metod (herşeyi çalıştıracak metod)
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", removeAllTodos);
    filterInput.addEventListener("keyup", filter);
}


function addTodo(e) {

    const inputText = addInput.value.trim(); // içine girilen değeri yakala tıraşla(sağ ve soldan)
    if (inputText == null || inputText == "") {
        showAlert("danger", "Lütfen bir değer giriniz.");
    } else {
        // arayüze ekleme
        addTodoToUI(inputText);

        // storage ekleme
        addTodoToStorage(inputText);

        // alert gösterme
        showAlert("success", "Todo Eklendi");

    }

    e.preventDefault();   // sayfa yönlendirme engelleme

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








//todo --------------------------------------------------------------------------------------
//* -----------------------------------------------------------------------------------------
//todo --------------------------------------------------------------------------------------
//? -----------------------------------------------------------------------------------------
//* -----------------------------------------------------------------------------------------











//todo ---------------------- EKRANDAN ÇARPIYLA TODO SİLME  ----------------------------------

function removeTodoToUI(e) {

    /* kopya için bak
    <li class="list-group-item d-flex justify-content-between">Todo 1
        <a href="#" class="delete-item">
            <i class="fa fa-remove"></i>     //* çarpı işareti 
        </a>
    </li> */

    if (e.target.className === "fa fa-remove") {
        console.log("Çarpıya basıldı.");  // çarpıya bastı mı kontrol et 


        //* EKRANDAN SİLME 
        const todo = e.target.parentElement.parentElement; //* li yi yakala 
        todo.remove();

        //* STORAGE DAN SİLME 
        removeTodoToStorage(todo.textContent);  //* todo içindeki değeri parametre al


        showAlert("warning", "Todo Başarıyla silindi");
    }
}






//todo ------------------------ STORAGE DAN TODO SİLME (ÇARPIYLA)  --------------------------

function removeTodoToStorage(removeTodo) {

    checkTodosFromStorage();

    todos.forEach(function (todo, index) {

        if (removeTodo === todo) {
            todos.splice(index, 1);   //* EŞİTSE İNDEX TEN İTİBAREN 1 ADET SİL
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));  //* yeni diziyi (dizi olarak) kaydet (Stringify)
}







//todo -------------------------- TÜM  TODO LARI SİLME  -------------------------------------

function removeAllTodos() {

    if (todoList.children.length === 0) {
        showAlert("danger", "Silmek için en az bir todo olmalıdır.");
    } else {

        //* EKRANDAN SİLME
        todoList.innerHTML = "";  //* todolist ekranı temizle


        //* STORAGE DAN SİLME 
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));  //* yeni diziyi kaydet


        showAlert("info", "Tüm Todo lar başarıyla silindi");
    }
}






//! HOCA FARKLI ÇÖZMÜŞ ONA DA BAK
//*------------------------ ARAMA FİLTRELEME --------------------------------------------

function filter(e) {


    const filterValue = e.target.value.toLowerCase().trim();  // hepsini küçük harfe çevir, traşla
    todoList.innerHTML = ""; // List Ekranı temizle

    checkTodosFromStorage();
    todos.forEach(function (todo) {

        if (todo.toLowerCase().trim().includes(filterValue)) {
            addTodoToUI(todo); // Sadece eşleşenleri göster
        }

    });

} 