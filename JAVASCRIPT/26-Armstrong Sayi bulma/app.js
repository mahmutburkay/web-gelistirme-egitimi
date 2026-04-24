// 153  - -  370 --  407  sayısı armstrong sayısı 

// 153 = 1*1*1 + 5*5*5 + 3*3*3 = 153


let sayi = prompt("Sayıyı giriniz : ");
let toplam = 0;

for (let i = 0; i < sayi.length; i++) {
    let rakam = sayi.charAt(i);
    toplam+=rakam*rakam*rakam;
    
}

if(toplam==Number(sayi)){
    alert("Armstrong sayısıdır.");
}else{
    alert("Armstrong sayısı değildir.");

}