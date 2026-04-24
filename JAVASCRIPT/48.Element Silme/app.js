//***********************Element Silmek*************************


// todo 1 i yakalamak MAHMUT ÖRNEK 

const todoListesi = document.querySelector(".list-group");
const todo = todoListesi.children[0];
console.log(todo);



//-- todos ta tüm li leri getir 
const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");
// const todo1 = document.querySelector(".list-group-item");

console.log(todos);
// todos[0].remove();
// todos[1].remove();
// console.log(todos);

// todos[todos.length-1].remove(); // son çocuğu sil 

// todo1.remove();



//----------------------------------------------
// 2. YÖNTEM 
// anne üzerinden silme removeChild();

// todoList.removeChild(todos[todos.length-1]);
// todoList.removeChild(todos[0]);  // annesi todolist olan 0. todos u sil
todoList.removeChild(todoList.lastElementChild); // todolist son elemanı sil

