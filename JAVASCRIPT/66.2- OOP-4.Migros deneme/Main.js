// Ana Sınıf

let mesaj =
    `
Migros'a hoşgeldiniz. 
Money Kartınız var mı ?
1- Evet ("Tamam")
2- Hayır ("İptal")
`;

const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 100
    },
    {
        urunIsmi: "Bebek Bezi",
        fiyat: 300
    },
    {
        urunIsmi: "Kuşbaşı",
        fiyat: 400
    }
]


let sonuc = confirm(mesaj);  // true veya false dönecek

let odenecekTutar;

if (sonuc) {

    let isim = prompt("Lütfen adınızı giriniz : ");
    let soyisim = prompt("Lütfen soyadınızı giriniz : ");

    const musteri = new Musteri(isim, soyisim, sonuc, urunler)
    odenecekTutar = musteri.hesapla();


    alert(
        `Müşteri Bilgileri : ${isim} ${soyisim}
        Ödenecek Tutar : ${odenecekTutar} 
        `);


} else {
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar}`)
}