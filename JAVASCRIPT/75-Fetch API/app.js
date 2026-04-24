//todo       callback - promise (callback yerine asenkronu yönetmek için)

//todo        ajax (xmlhttprequest) - fetch api (xmlhttprequest yerine istek atmak için)

// console.log(this); // window objesini consola yazdırma

//?   fetch() ile isteği at.  Response tipinde Promise döner. 
//?   .json() metoduyla promise çevir. promise i de .then() ve .catch() ile yakala


//? -------------------------- FETCH API ---------------------------------------------

// //todo ---------------- 1. örnek --------------------------------------

//* response tipinde promise döner.

// function getStudents(url) {
//     const promise = fetch(url);
//     console.log(promise);
// }

// getStudents("students.json");





// //todo ---------------- 2. örnek --------------------------------------

function getStudents(url) {
    fetch(url)
        .then((response) => response.json()) // response u json ile promise çevir
        .then((data) => console.log(data)) // promise i data ile yakala

        .catch((error) => console.log(error));
}


getStudents("students.json");







// //todo ---------------- 3. örnek --------------------------------------

//* User ları getirme (jsonplaceholder dan )

function getUsers(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))

        .catch((error) => console.log(error));
}


getUsers("https://jsonplaceholder.typicode.com/users");






// //todo ---------------- 4. örnek --------------------------------------

// rest e veri gönderme
// rest olmadığı için çalışmaz şimdi

// function insertStudents(){
//     fetch("https://jsonplaceholder.typicode.com/albums",{
//         method: "POST",
//         headers : {
//             "Content-Type": "application/json"
//         },

//         body: JSON.stringify( {
//             "id" : 4,
//             "firstname" : "Metin",
//             "lastname" : "Kaymazalp"
//         })
//     })
// }