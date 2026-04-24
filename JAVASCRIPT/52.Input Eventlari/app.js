//İNPUT EVENTLARI

//focus : input içinde bastığında 
//blur : inputtan çıktığında 
//copy : input içinde kopyalanan metni yakalar
//paste : input içinde yapıştırılan metni yakalar
//cut : ctrl+x ile keserse
//select : mavi ile seçme yapılırsa 

const todo = document.querySelector("#todoName");

// console.log(todo);  DOĞRU SEÇTİN Mİ EMİN OLMAK İÇİN ÖNCE CONSOLA YAZ !!!!!!!



todo.addEventListener("focus", run);
todo.addEventListener("blur", run);
todo.addEventListener("copy", run);
todo.addEventListener("paste", run);
todo.addEventListener("cut", run);
todo.addEventListener("select", run);


function run(e) {
    console.log(e.type);
}