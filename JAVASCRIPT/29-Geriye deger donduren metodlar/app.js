// Geriye değer döndüren metot tanımlamak -- return : geriye döndürmek




let donenDeger = cube(2);
kareAl(donenDeger);



function kareAl(sayi){
    let sonuc = sayi*sayi;
    console.log(sonuc);
}


function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}