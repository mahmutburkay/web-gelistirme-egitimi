//----------------------Dizinin Metotlari--------------------------------

/*
push : dizinin sonuna eleman ekler , ayrica dizinin uzunlugunu doner
unshift : dizinin basina eleman ekler , eleman sayisini geriye doner

pop : dizinin sonundan eleman siler , eleman sayisini doner
shift : dizinin basindan eleman sile , eleman sayisini doner

splice(index,incdex) :eleman eklemek ve silmek icin kullanilir.

toString: diziyi stringe cevirebiliriz.
join : diziyi stringe cevirir . Farka ise araya eleman ekleyebiliriz

concat : dizileri birlestirmek i¢in kullanilir.

slice(dilimlemek) : diziyi istenilen yerden bölüp yeni bir dizi olusturmak
length : dizinin uzunlugunu verir.

reverse : dizinin elemanlarini ters cevirmek

split(bölmek) : belirli bir ifadeye gore bölüp diziye cevirmek.

indexOf : elemanin index numarasini verir.

includes: verilen elemani iceriyor mu ona bakar

*/


let arabalar = ["bmw", "toyata", "renault", "mercedes", "porsche"];
let arabalar2 = ["hyundai","tofaş"]
console.log(arabalar);
console.log(arabalar2);

console.log("--------------------------------------------------------------")

// PUSH METOT --- sona ekleme 

// console.log(arabalar.length);
// arabalar.push("opel");
// console.log(arabalar);



// UNSHIFT METOT ---- başa ekleme 

// arabalar.unshift("hundai");
// console.log(arabalar);




// POP METOT ---- sondan silme 

// let silinenEleman = arabalar.pop();
// console.log(arabalar);
// console.log(silinenEleman);



// SHIFT METOT ---- baştan silme 

// let silinenEleman =arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman);



//******************************************************************* */
// SPLICE METOT ------- istediğin indekse ekleme silme 

// 1. indeksine ekleme 

// arabalar.splice(1,0,"hyundai");
// console.log(arabalar);



// 1. İNDEKSTEN BAŞLA 2 ELEMAN SİL 

// arabalar.splice(1,2);
// console.log(arabalar);



// 2.İNDEKSTEN BAŞLA 2 ELEMAN SİL HUNDAİ EKLE

// arabalar.splice(2,2, "hyundai");
// console.log(arabalar);






// TOSTRING METOT

// console.log(typeof arabalar);
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);
// console.log(stringArabalar);





// JOIN METOT ---- stirng e çevir araya - koy 

// let stringArabalar = arabalar.join("-");
// console.log(stringArabalar);






// CONCAT ---- İKİ DİZİYİ BİRLEŞTİRME

// let birlesmisDizi = arabalar.concat(arabalar2);
// console.log(birlesmisDizi);





// SLICE METOT ------ iki diziyi ayırma 

// console.log(arabalar);
// let ayriDizi = arabalar.slice(2);
// console.log(ayriDizi);





// LENGTH OZELLIK ---- dizi uzunluğu

// console.log(arabalar.length);






// REVERSE METOT----- ters çevirme 

// arabalar.reverse();
// console.log(arabalar);




//SPLIT METOT ---- , e göre bölüp dizi yapar

// let isimler = "Enes,Ali,Veli";

// let isimlerDizi = isimler.split(",");
// console.log(isimlerDizi);





//INDEXOF METOT

// let index = arabalar.indexOf ("bmw");
// if(index==0){
//   console.log("belirtilen eleman vardir");
// }else{

// console.log("elaman yoktur");
//}






//INCLUDES METOT

let sonuc = arabalar.includes("renault");
console.log(sonuc);
