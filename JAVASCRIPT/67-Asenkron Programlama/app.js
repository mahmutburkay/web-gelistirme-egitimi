/*
* 1-Javascript senkron çalışan bir programlama dilidir.



* asenkron çalışanlar 

    1-Timing
    
    2-Event (Olay)
    
    3-Http isteklerinde

    
——— CALLBACK — PROMISE — ASYNC & AWAIT —————————
—--> Asenkron yapilari senkrona çevirip yönetiyoruz...
*/

//? ------------------------------------------------------------- 

//* senkron örnek

// selamla()
// console.log("1")
// console.log("2")
// console.log("Enes")


// function selamla(){
// console.log("Selam")}




//? -------------------------------------------------------------

//* Asenkron örnek

// setTimeout(() => {

// }, an timeout); 



console.log("Enes");

setTimeout(() => {
    console.log("Süre doldu ve çalıştı")
}, 1000); /// 1 saniye sonra çalış  

setTimeout(() => {
    console.log("500 ms bekledi ve calıştı")
}, 560);

console.log("Bayram");
