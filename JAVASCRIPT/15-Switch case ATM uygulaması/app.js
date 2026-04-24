/* 

1-Bakiye görüntüleme
2-Para çekme
3-Para yatırma
4-Çıkış

ATM UYGULAMASI

*/


var bakiye = Number(prompt("Bakiyenizi giriniz :"));

function atmUygulamasi(){


let yeniSatir = "\r\n";


let metin = "1-Bakiye görüntüleme " + yeniSatir
    + "2-Para çekme" + yeniSatir
    + "3-Para yatırma" + yeniSatir
    + "4-Çıkış" + yeniSatir + yeniSatir
    + "Lütfen bir değer seçiniz :";

// alert(metin);

let secim = prompt(metin);

switch (secim) {

    case "1":
        alert("Bakiyeniz : " + bakiye);
        atmUygulamasi();
        break;

    case "2":

        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tuttarı giriniz : "));

        if (cekilecekTutar < bakiye) {
            // para varsa 
            bakiye = bakiye - cekilecekTutar;
            alert("Kalan bakiyeniz : " + bakiye);
            atmUygulamasi();
        }

        else {
            // para yetersizse 
            alert("bakiyeniz yetersizdir." + yeniSatir
            + "Bakiyeniz : " + bakiye + yeniSatir+ "Çekilecek tutar : " + cekilecekTutar);
            atmUygulamasi();
        }

        break;

    case "3":

        let yatirilacakTutar = Number(prompt("Yatırmak istediğiniz tuttarı giriniz : "));
        bakiye = bakiye + yatirilacakTutar;
        alert("Güncel Bakiyeniz : " + bakiye);
        atmUygulamasi();
        break;

    case "4":
        alert("Sistemden çıkış yapılmıştır.")
        break;

    default:
        alert("Lütfen 1-4 arası değer giriniz. ");
        atmUygulamasi();
}

}


atmUygulamasi();

