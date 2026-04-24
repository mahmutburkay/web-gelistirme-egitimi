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

// todoya ekleyin butonuna bastığında çalıştır
function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", allTodosEverywhere);
    filterInput.addEventListener("keyup", filter);
}


//************************************************************ */
// sayfa yenilendiğinde storage ı ekrana yaz

function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}




//************************************************************ */
// todo üzerinde filtreleme yapma 

function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();// yazdığı kelimeyi küçük harfe çevir ve yakala
    const todoListesi = document.querySelectorAll(".list-group-item");// tüm todoları yakala getir.

    if (todoListesi.length > 0) {
        todoListesi.forEach(function (todo) {
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                //setattribute style özelliğiyle ekranda göstr css ile 
                todo.setAttribute("style", "display : block");
            } else {
                todo.setAttribute("style", "display : none !important");
            }
        });

    } else {
        showAlert("warning", "Filtreleme yapmak için en az bir todo olmalıdır!");

    }

}




//*----------------------------------------------------------------------------- */
// tüm todo ları temizleme

function allTodosEverywhere() {
    const todoListesi = document.querySelectorAll(".list-group-item"); // tüm li leri yakala
    if (todoListesi.length > 0) {
        //Ekrandan Silme
        todoListesi.forEach(function (todo) {
            todo.remove();
        });

        //Storage'dan Silme
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos)); // storage a yazdırma
        showAlert("success", "Başarılı bir şekilde silindi");
    } else {
        showAlert("warning", "Silmek için en az bir todo olmalıdır");
    }
}







//************************************************************ */
// çarpıya bastığında todo yu sil ekran ve storage 



//ekran'dan Silme
function removeTodoToUI(e) {
    // bastığı etiketin klas ismi fa fa ise (e.target) {nereye bastığını görme}
    if (e.target.className === "fa fa-remove") {
        //Ekrandan Silme
        const todo = e.target.parentElement.parentElement;//li yi yakala
        todo.remove();

        //Storage'dan Silme
        removeTodoToStorage(todo.textContent);
        showAlert("success", "Todo başarıyla silindi.");
    }
}



//***************************************************** */
//Storage'dan Silme

function removeTodoToStorage(removeTodo) {
    checkTodosFromStorage();
    todos.forEach(function (todo, index) { // todostaki her todonun içeriği ve indeksi yakala
        if (removeTodo === todo) {
            todos.splice(index, 1);
        }
    }); // sildikten sonra arrayi güncelle
    localStorage.setItem("todos", JSON.stringify(todos));
}





//************************************************* */
/// arayüz ve storage a ekleme butona basınca 

function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("warning", "Lütfen boş bırakmayınız!");
    } else {
        //Arayüze ekleme
        addTodoToUI(inputText);
        // storage a ekleme
        addTodoToStorage(inputText);
        showAlert("success", "Todo Eklendi.");
    }

    //storage ekleme
    e.preventDefault();
}


//*************************************************************** */
// todo ekranda yazma 

function addTodoToUI(newTodo) {

    /* kopya çekmek için
<li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
                        */

    // yeni etiket oluşturup içine yaz 
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
    // ekledikten sonra sil 
    addInput.value = "";
}




//************************************************************ */
// todo storage a yazma 

function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// storage ı kontrol et boş mu önce 
function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}





//************************************************************ */
// alert ü ekranda gösterme

function showAlert(type, message) {

    /* kopya için bak
    <div class="alert alert-warning" role="alert">
    This is a warning alert—check it out!
  </div>*/

    // yeni element oluştur
    const div = document.createElement("div");
    //   div.className="alert alert-"+type;
    div.className = `alert alert-${type}`; //litirel template
    div.textContent = message;

    //cardbody sonuna ekle
    firstCardBody.appendChild(div);

    // 2.5 saniye sonra alert ü kaldır 
    setTimeout(function () {
        div.remove();
    }, 2500);
}