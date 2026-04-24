// Asal sayi bulma uygulamasi 
// sayiyi önce ikiye böl daha sonra 2 den başlayarak yarısına kadar artarak böl

let sayi = Number(prompt("Lütfen sayınızı giriniz : "));
let sonuc =true;


for(let i= 2; i<= Math.floor(sayi/2); i++){
    if(sayi%i==0){
        // ASAL DEĞİLDİR.
        sonuc=false;
        break;
    }
}

    if(sonuc){
        alert(sayi+" asaldır.");
    }

    else{
        alert(sayi+" asal değildir.");
    }

    
