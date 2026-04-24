// Parametreli metod tanımlamak 


// function yazdir(isim,soyisim){
//     debugger;
//     console.log(isim+ " " +soyisim);
// }

// debugger;
// yazdir("Mahmut","Burkay");
// yazdir("Metin", "Gür");




// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }

// cube(5);
// cube(3);



let yas = Number(prompt("Yaşınızı giriniz : "));
kontrolEt(yas);

function kontrolEt(yas){

    if(yas>18){
        console.log("Ehliyeti alabilirsiniz.");
    }else{
        console.log("Ehliyeti alamazsınız");
    }

}

