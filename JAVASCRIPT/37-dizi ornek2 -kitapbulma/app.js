let kitap1 = { isim: "Her Şeyi Düşünme", yazar: "Anne Bogel", fiyat: 25, raf: "1.5.RAF" }
let kitap2 = { isim: "Hicbir Karşılaşma Tesadüf Değildir", yazar: "Hakan Mengiic", fiyat: 56, raf: "2.3.RAF" }
let kitap3 = { isim: "İnsan Neyle Yaşar", yazar: "Tolstoy", fiyat: 34, raf: "3.4.RAF" }
let kitap4 = { isim: "Zafer Sızlanarak Kazanılmaz", yazar: "Haluk Tatar", fiyat: 45, raf: "4.1.RAF" }
let kitap5 = { isim: "Şeker Portakalı", yazar: "José Mauro de Vasconcelos", fiyat: 22, raf: "5.3.RAF" }


let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];


let raf11 = { kod: "1.1.RAF", goster: false }
let raf12 = { kod: "1.2.RAF", goster: false }
let raf13 = { kod: "1.3.RAF", goster: false }
let raf14 = { kod: "1.4.RAF", goster: false }
let raf15 = { kod: "1.5.RAF", goster: false }


let raf21 = { kod: "2.1.RAF", goster: false }
let raf22 = { kod: "2.2.RAF", goster: false }
let raf23 = { kod: "2.3.RAF", goster: false }
let raf24 = { kod: "2.4.RAF", goster: false }
let raf25 = { kod: "2.5.RAF", goster: false }



let raf31 = { kod: "3.1.RAF", goster: false }
let raf32 = { kod: "3.2.RAF", goster: false }
let raf33 = { kod: "3.3.RAF", goster: false }
let raf34 = { kod: "3.4.RAF", goster: false }
let raf35 = { kod: "3.5.RAF", goster: false }



let raf41 = { kod: "4.1.RAF", goster: false }
let raf42 = { kod: "4.2.RAF", goster: false }
let raf43 = { kod: "4.3.RAF", goster: false }
let raf44 = { kod: "4.4.RAF", goster: false }
let raf45 = { kod: "4.5.RAF", goster: false }


let raf51 = { kod: "5.1.RAF", goster: false }
let raf52 = { kod: "5.2.RAF", goster: false }
let raf53 = { kod: "5.3.RAF", goster: false }
let raf54 = { kod: "5.4.RAF", goster: false }
let raf55 = { kod: "5.5.RAF", goster: false }






// ** 00 01 02 03 04 raf dizaynı bu şekilde 
// ** 10 11 12 13 14 

let raflar = [
    [raf51, raf52, raf53, raf54, raf55],
    [raf41, raf42, raf43, raf44, raf45],
    [raf31, raf32, raf33, raf34, raf35],
    [raf21, raf22, raf23, raf24, raf25],
    [raf11, raf12, raf13, raf14, raf15]];



function rafOlustur() {
    console.clear();
    let satir = "";

    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---") + "";

        }
        console.log(satir);
        console.log("-------------------------")
        satir = "";
    }
}


function kodBul(kitapIsmi) {
    let rafKod=null;
    kitaplar.forEach(function (kitap) {

        if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(), 0)) {

            rafKod = kitap.raf;

        }

    })
    return rafKod;;
}


function raftaGoster(rafKodu){
    for(let i =0 ; i<raflar.length; i++){
        for(let j =0; j<5; j++){
            if(raflar[i][j].kod==rafKodu){
                raflar[i][j].goster=true;
                break;
            }
        }
    }
}


//*****  kodların çalışma sırası *******

rafOlustur();

let kitapIsmi = prompt("Lütfen bir kitap ismi giriniz. ");
let rafKod = kodBul(kitapIsmi);


 

if(rafKod!=null){
    raftaGoster(rafKod);
    rafOlustur();
}else{
    alert("girdiğiniz kitap kütüphanemizde bulunmamaktadır.")
}
































//-----------------------------------------------------------------
// 2. örnek

/*
let kitap1 = { isim: "Savaş ve Barış", yazar: "Lev Tolstoy", raf: 1, sıra: 3, fiyat: 60 }
let kitap2 = { isim: "1984", yazar: "George Orwell", raf: 2, sıra: 4, fiyat: 45 }
let kitap3 = { isim: "Küçük Prens", yazar: "Antoine de Saint-Exupéry", raf: 3, sıra: 1, fiyat: 30 }
let kitap4 = { isim: "Suç ve Ceza", yazar: "Fyodor Dostoyevski", raf: 4, sıra: 2, fiyat: 55 }
let kitap5 = { isim: "Şeker Portakalı", yazar: "José Mauro de Vasconcelos", raf: 5, sıra: 5, fiyat: 50 }

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];
let sonucKitaplar = [];
let arananKitap = prompt("kitap ismi giriniz: ");

kitaplar.forEach(function(urun) {
    if (urun.isim.toLocaleLowerCase().includes(arananKitap.toLocaleLowerCase(), 0)) {
        sonucKitaplar.push(urun);
    }
});

rafBulucu(sonucKitaplar);

function rafBulucu(urun) {
    urun.forEach(function(urun1) {
        let a = urun1.raf;
        let b = urun1.sıra;
        let raflar = "";
        let bosluk = "|-----------|";
        for (let i = 5; i > 0; i--) {  // 5x5 boyutunda
            for (let j = 1; j <= 5; j++) {
                if ((i == a) && (j == b)) {
                    raflar += "|" + i + ".raf " + j + ".sıra|";
                } else {
                    raflar += "|------------|";
                }
            }
            console.log(raflar);     
            raflar = "";   
        }
        console.log("---------------------"); // Her raf arasında boşluk
    })
}
*/