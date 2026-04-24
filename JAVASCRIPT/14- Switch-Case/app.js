
// let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz : ");


// switch(sayi)
// {
//     case "1" : 
//         // kodlar
//         console.log("girilen sayı 1'dir ");
//     break;

//     case "2" : 
//         console.log("girilen sayı 2'dir ");
//     break;

//     case "3" : 
//         console.log("girilen sayı 3'tür ");
//     break;

//     case "4" : 
//         console.log("girilen sayı 4'tür ");
//     break;

//     case "5" : 
//         console.log("girilen sayı 5'tir ");
//     break;

//     default : 
//         console.log("girilen sayı geçersizdir");
//     break;


// }




//------------YENİ ÖRNEK---------------------------------------



let yeniSatir = "\r\n";

let metin = "1-Pazartesi" + yeniSatir
    + "2-Salı" + yeniSatir
    + "3-Çarşamba" + yeniSatir
    + "4-Perşembe" + yeniSatir
    + "5-Cuma" + yeniSatir
    + "6-Cumartesi" + yeniSatir
    + "7-Pazar" + yeniSatir
    +"Lütfen bir seçim yapınız : ";





let değer = prompt(metin);

switch (değer) {

    case "1":
        console.log("Pazartesi Günü");
        break;

    case "2":
        console.log("Salı Günü");
        break;

    case "3":
        console.log("Çarşamba Günü");
        break;

    case "4":
        console.log("Perşembe Günü");
        break;

    case "5":
        console.log("Cuma Günü");
        break;

    case "6":
        console.log("cumartesi Günü");
        break;

    case "7":
        console.log("Pazar Günü");
        break;

    default:
        console.log("Lütfen geçerli bir değer giriniz. ");
        break;

}