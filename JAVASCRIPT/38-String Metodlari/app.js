// String Sinifinin Metotlari
 
let kurs = "Modern Web Geliştirme Kursu";
let tarih = "2024";

// charAt() : verdiğin indeksin stringini verir.
// concat() : iki stringi birleştirme 
// indexof() : charit tersi karakteri ver indeksi al
// lastindexof() : kelimeyi ver indeksi al index kullan bunun yerine
// toUpperCase() : büyük harfe çevirme tüm metni
// toLowerCase() : küçük harfe çevirme 
// trim() : space boş karakterleri temizler
// slice() : slice(22,28) : 22 28 arası kelimeyi yazdır 28 dahil etme
// substring() : slice ile aynı 
// replace() : yer değiştirme  : : şunla değiş
// split() : virgüle boşluğa falan göre ayır yeni dizi yap
// valueOf() : SONRA 
// startsWith() : m ile a ile ... başlıyor mu falan 
// endsWith() : sonu u ile a ile ... bitiyor mu ? harf kelime de olur.


// CHARAT METOD KULLANIMI
// let karakter = kurs.charAt(1); // 1. indeksi ver
// console.log(karakter);

//CONCAT METOD KULLANIMI
// let sonuc = kurs.concat(" ",tarih," Mahmut");
// console.log(sonuc);


//INDEXOF METOT
// let index = kurs.indexOf("W");
// console.log(index);

// lastindex
// let index = kurs.lastIndexOf("K");
// console.log(index);


//TOUPPERCASE METOT
// let sonuc = kurs.toUpperCase();
// console.log(kurs);
// console.log(sonuc);

//TOLOWERCASE METOT
// let sonuc = kurs.toLowerCase();
// console. log(sonuc);

// TRIM METOT
// console.log(kurs.trim());

// SLİCE METOD 
// console.log(kurs);
// console.log(kurs.slice(22,30));

//SUBSTRING METOT
// console.log(kurs);
// console.log(kurs.substring(0,6));

//REPLACE METOT : modern yerine güncel yaz 
// console. log(kurs);
// console. log(kurs.replace("Modern", "Güncel"));


//SPLIT METOT
// console.log(kurs);
// let dizi = kurs.split(" ");
// console.log(dizi);



//VALUEOF METOT
// console.log(kurs.valueOf());




//STARTSWITH METOT: ile başlıyor mu 
// console.log(kurs);
// console.log(kurs.startsWith("M"));
// if(kurs.startsWith("M")){
//     console.log("M harfi ile baslamaktadir.");
// }



//ENDSWITH METOT : ile bitiyor mu 
console.log(kurs);
console.log(kurs.endsWith("Geliştirme Kursu"));
