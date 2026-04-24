//**     For in  - For of Döngüleri


//* klasik foreach döngüsü
let names = ["Enes", "Ali", "Yusuf", "Betül", "Ceyda"];

// names.forEach(function(name){
//     console.log(name)
// })

// arrow function ile tanımlama  yukarıdaki ile aynı 
// names.forEach(name=>console.log(name))


// For in Döngüsü

//  in indeksi verir
for (let name in names) {
    console.log(name, names[name])
}


// For of Döngüsü

// değeri verir 
for (let isim of names) {
    console.log(isim, names.indexOf(isim))
}