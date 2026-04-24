//CALLBACK NEDİR ?

// timing - event - http istekleri asenkron çalışır 

//callback - promise - async await asenkron problemleri yönetmek için kullanılırlar 

//Callback : bir fonksiyonu bir fonksiyona parametre geçerek 
//asenkron yapıyı senkrona çeviririz.



//*  1. örnek simple olan 

// function getName() {
//     setTimeout(() => {

//         console.log("Enes"); //web servisten geldi.

//     }, 1000);
// }

// function getSurname() {
//     setTimeout(() => {
//         console.log("Bayram"); // web servisten geldi

//     }, 500);
// }

// getName();
// getSurname();


//? -----------------------------------------------------------------------

//*  1. örnek callback hali 

// function getName(callback) {

//     setTimeout(() => {

//         let name = "Enes"; // diyelim ki web servisten geldi.
//         callback(name);

//     }, 1000);
// }

// function getSurname(name) {
//     setTimeout(() => {

//         let surname = "Bayram"; // web servisten geldi
//         console.log(name, surname);

//     }, 500);
// }

// getName(getSurname);



// ***********************************************************************/
//? -----------------------------------------------------------------------


//* iç içe callback örneği
//* 2. örnek  18.15 sn özeti 104. video

function getName(callback) {
    setTimeout(() => {

        let name = "Enes"; //web servisten geldi.
        callback(name);
    }, 1000);
}

function getSurname(name, callback) {
    setTimeout(() => {
        let surname = "Bayram"; // name 'e göre soyismi buldu.
        callback(surname);
    }, 500);
}




getName((name) => {

    getSurname(name, (surname) => {
        console.log(name, surname);
    })

})




function getAge(name, surname, callback) {
    setTimeout(() => {
        let age = 23; //ismi Enes ve Soyisimi Bayram olanı servisten yaşını getirdi.
        callback(age);
    }, 300);
}


// getName(getSurname)
getName((name) => {
    getSurname(name, (surname) => {
        getAge(name, surname, (age) => {
            console.log(name, surname, age);
        })
    })
})


// arrow func tanımlama
// const a = () => {

// }
// // getName();
// // getSurname();




//? ------------- CHAT GPT ÖRNEK ----------------------------------------

// function yemekHazirla(callback) {
//     console.log("🍳 Yemek hazırlanıyor...");
//     setTimeout(function () {
//         console.log("✅ Yemek hazır!");
//         callback(); // iş bittikten sonra bu fonksiyonu çağır
//     }, 2000); // 2 saniye beklesin
// }

// function masayaServisYap() {
//     console.log("🍽️ Masaya servis yapıldı.");
// }

// // Fonksiyonu çağırıyoruz ve callback olarak diğer fonksiyonu veriyoruz
// yemekHazirla(masayaServisYap);


/*
yemekHazirla fonksiyonu çalıştı.

İçeride setTimeout ile 2 saniyelik bir iş yapıyor (yani yemek yapılıyor gibi düşün).

İş bitince (callback()), masayaServisYap() fonksiyonu çağrılıyor.
*/