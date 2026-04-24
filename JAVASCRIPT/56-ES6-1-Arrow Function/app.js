//*-------- ESKİ FONK TANIMLAMA ŞEKLİ -------------------------
// function yaz() {
//     console.log("Merhaba")
// }

// yaz();


//!------------------ ARROW FUNCTİON ------------------------------

// const yazdir = () => {
//     console.log("Merhaba Dünya")
// }
// yazdir();




// const yazdir = (firstName,lastName)=>console.log("Merhaba",firstName,lastName)
// yazdir("Enes","Bayram")


//* ARROW FUNCTİON KISALTMA //  
const yazdir = firstName => console.log("Merhaba", firstName)
yazdir("Enes")


// TODO (TEK BİR PARAMETREDEN OLUŞUYORSA PARANTEZLERİ SİLEBİLİRSİN)
// TODO (TEK BİR SATIRLIK İŞLEM YAPIYORSA KIVIRCIKLARI DA SİLEBİLİRSİN)


const kupAl = x => x * x * x
const kareAl = (x) => x * x

console.log("Değer ", kareAl(3))