// Faktöriyel Hesaplama 

let sayi = Number(prompt("Faktöriyelini hesaplamak istediğiniz sayıyı giriniz : "));
carpım = 1;

for (let i = 1; i <= sayi; i++) {
    carpım = carpım * i;

}

alert(sayi + "! sonucu = " + carpım);
