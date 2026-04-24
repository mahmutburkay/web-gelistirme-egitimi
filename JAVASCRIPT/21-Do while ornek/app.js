// 1 den 10 kadar yazdırma 


// let sayac =1;

// do{

//     console.log(sayac);
//     sayac++;

// }while(sayac<=10);


//...........KOŞUL SAĞLAMASA DA 1 KERE ÇALIŞIR.......

// let yas=23;

// do {
//     console.log("Ehliyeti alabilirsiniz.");
    
// } while (yas>=25);


// 1 den 20 ye kadar olan tek sayıları yazdırma 

let sayac =1;
let toplam =0;

do {
    if(sayac%2==1){

        toplam+=sayac;
    }

    sayac++;
    
    
} while (sayac<=20);
console.log("Toplam = "+toplam);