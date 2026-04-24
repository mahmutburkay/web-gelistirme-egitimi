
//!     Session Storage            

//? Değer Ekleme
sessionStorage.setItem("350", "Enes");
sessionStorage.setItem("216", "Yasin");
sessionStorage.setItem("154", "Bilal");
sessionStorage.setItem(552, 37);


//? Değer Silme
// sessionStorage.removeItem("154");


//? Değer Getirme 
// let value =  sessionStorage.getItem("350");    ////** key 350 olanın value sunu getir.
// if(value ===null){
//     console.log("Değer bulunamadı.");
// }else{
//     console.log("Değer bulundu :",value);
// }


//?  Hepsini Silme
// sessionStorage.clear();

//? tipi yazdırma 
// let value = sessionStorage.getItem(552);
// console.log(typeof value);


//? Session Storage - Array Yazdırma

// let names = ["Ali","Enes","Kübra","Adem","Ayşenur"];
// sessionStorage.setItem("names",JSON.stringify(names));  ////* dizi(array gibi ama string) olarak kaydetmek için stringify

// let value = JSON.parse(sessionStorage.getItem("names"));   ////* diziyi array olarak çekebilmek için parse kullan

// value.forEach(function(name){
//     console.log(name);
// })



// ***************************  todo *****************************************
//*******---------------------------------------------------------*/
//?-----------------------------------------------------------------

//!!    Local Storage Kullanımı

//? Değer Ekleme
// localStorage.setItem("motion1","Push up");
// localStorage.setItem("motion2","Barfix");
// localStorage.setItem("motion3","Burpee");
// localStorage.setItem("motion4","Squat");


//? Değeri Almak
// let value = localStorage.getItem("motion1");
// console.log(value);

//? Değer Silmek
// localStorage.removeItem("motion4");

//? Tümünü Temizle
// localStorage.clear();




//*****  array şeklinde yazma 
let motions = ["Push up", "Barfix", "Burpee", "Squat", "Chin Up"];
localStorage.setItem("motions", JSON.stringify(motions)); ////* dizi(array gibi ama string) olarak kaydetmek için stringify

let value = JSON.parse(localStorage.getItem("motions")); ////* diziyi array olarak çekebilmek için parse kullan

value.forEach(function (yazdir) {
    console.log(yazdir);
});