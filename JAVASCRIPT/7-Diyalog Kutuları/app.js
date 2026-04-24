/*--------DİYALOG KUTULARI-------------------
-Alert
-Prompt
-Confirm

*/

// console.log(window);




alert("Merhaba");


// alert("İşleminize devam etmeden önce kaydetmelisiniz!");
//Prompt(); Kullanıcıdan değer alabiliyoruz...

let isim = prompt("İsminizi Giriniz :");
let yas = prompt("Yaşınızı giriniz : ");

console.log("İsminiz :" + isim);
console.log("Yaşınız :" +yas);


console.log(typeof isim);
console.log(typeof yas);


let sonuc =confirm("Silmek istediğinize emin misiniz ?");
console.log(sonuc);