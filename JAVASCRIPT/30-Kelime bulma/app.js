// Kelime sayısı bulma uygulaması 

let metin ="Şu anda Yalova da Javascript eğitimi çekmekteyim.";

let harf = prompt("Harfi giriniz");

let sonuc = bul(harf);
alert("Harf Sayısı : "+sonuc);


function bul(harf){

    let toplam = 0;

    for(let i=0; i<metin.length; i++){

        if(metin.charAt(i).toLocaleLowerCase()===harf){
            toplam+=1;

        }

    }
    return toplam;

}