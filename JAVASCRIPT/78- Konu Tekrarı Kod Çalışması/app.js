//todo BU SAYFA SADECE TEKRAR VE KOD ÇALIŞMASI İÇERİR


//! --------------------- GENEL NOTLAR (ÖZET) ----------------------------------------

/*

Senkron : Sırayla çalışan işlem parçacıkları.
Asenkron : Eş zamanlı birden fazla iş yapmak için kullanılır.

=> Javascript SENKRON çalışan bir programlama dilidir...

ASENKRON ÇALIŞMASINA SEBEP OLAN DURUMLAR

1-Timing(Zaman)
2-Event(Olay)
3-HTTP İSTEKLERİ
    -XmlHttpReguest  (ajax)
    -Fetch Api
    —Axios -  (REACT için geçerli)

    
ASENKRONU YÖNETMEK İÇİN;

1-CALLBACK — (ES6 ÖNCESİ)
2-PROMISE —   (ES6 2015)
3-ASYNC AWAİT - (ES7)

*/


//?----------------------- 1-CALLBACK -----------------------------------







//?------------------------------------------------------------------------------
//?------------------------------------------------------------------------------
//?------------------------------------------------------------------------------
//?------------------------------------------------------------------------------

//?----------------------- 2-AJAX -----------------------------------------------

// //todo ---------------- 1. örnek ---------------------------------------------

// function prepareURL(url, id) {

//     if (id == null) {
//         return url;
//     }
//     return `${url}?postId=${id}`
// }


// function getComments(url, id) {

//     let newURL = prepareURL(url, id);

//     const xhr = new XMLHttpRequest();

//     xhr.addEventListener("readystatechange", () => {

//         if (xhr.readyState == 4 && xhr.status == 200) {

//             console.log(`Post ID si ${id} olan yorumlar getirildi. `);
//             console.log(JSON.parse(xhr.responseText));
//         }
//     })

//     xhr.open("GET", newURL);
//     xhr.send();
// }

// getComments("https://jsonplaceholder.typicode.com/comments", 1);







// //todo -------- 2. örnek userların id, name, username i getir. ------------

// function getUsers(url) {

//     const xhr = new XMLHttpRequest();

//     xhr.addEventListener("readystatechange", () => {

//         if (xhr.readyState == 4 && xhr.status == 200) {

//             const users = JSON.parse(xhr.responseText);


//             const newUsers = users.map(user => {  // map() ise her kullanıcıyı dönüp yeni bir nesne oluşturur.
//                 return {
//                     id: user.id,
//                     name: user.name,
//                     username: user.username
//                 };
//             });

//             console.log(newUsers);

//         }
//     })

//     xhr.open("GET", url);
//     xhr.send();
// }

// getUsers("https://jsonplaceholder.typicode.com/users");















//?------------------------------------------------------------------------------
//?------------------------------------------------------------------------------
//?------------------------------------------------------------------------------
//?------------------------------------------------------------------------------

//?----------------------- 3-PROMİSE ---------------------------------------------


// //todo ---------- 1. örnek Promise yapısı aşağıdaki gibi ------------------------


// let check = false;


// function createPromise() {
//     return new Promise((resolve, reject) => {

//         if (check) {
//             resolve("Promis başarılı ")
//         } else (
//             reject("sıkıntı var reis. ")
//         )

//     })
// }

// createPromise() // ; koymuyoruz çünkü promis döndü onu yakalamamız lazım

//     .then((response) => {
//         console.log(response);
//     })

//     .catch((error) => {
//         console.log(error);
//     })

//     .finally(() => {
//         console.log("Her zaman çalışır");
//     })







// //todo ---------- 2. örnek PROMİSE + XMLHTTPREQUEST yapısı ------------------------


//// *PROMISE + XMLHTTPREQUEST ÖRNEK


// function readStudents(url) {
//     return new Promise((resolve, reject) => {

//         const xhr = new XMLHttpRequest();

//         try {
//             xhr.addEventListener("readystatechange", () => {
//                 if (xhr.readyState === 4 && xhr.status === 200) {

//                     try {
//                         const studens = JSON.parse(xhr.responseText);
//                         resolve(studens);
//                     } catch {
//                         console.log("JSON Hatası oluştu, JSON da problem var.")
//                     }
//                 }
//             })
//         } catch (error) {
//             reject(error);
//         }

//         xhr.open("GET", url);
//         xhr.send();
//     })
// }


// readStudents("students.json")
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))






// //todo ---------- 3. örnek PROMİSE + XMLHTTPREQUEST URL yapısı ---------------------


// function readStudents(url) {

//     return new Promise((resolve, reject) => {

//         const xhr = new XMLHttpRequest();

//         try {
//             xhr.addEventListener("readystatechange", () => {
//                 if (xhr.readyState === 4 && xhr.status === 200) {

//                     try {
//                         const studens = JSON.parse(xhr.responseText);
//                         resolve(studens);
//                     } catch {
//                         console.log("JSON Hatası oluştu, JSON da problem var.")
//                     }
//                 }
//             })
//         } catch (error) {
//             reject(error);
//         }

//         xhr.open("GET", url);
//         xhr.send();
//     })
// }


// readStudents("https://jsonplaceholder.typicode.com/users")
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))















//?----------------------------------------------------------------------
//?----------------------------------------------------------------------
//?----------------------------------------------------------------------
//?----------------------------------------------------------------------

//?----------------------- 4-FETCH API ----------------------------------


// //todo ---------------- 1. örnek --------------------------------------


// function getStudents(url) {

//     fetch(url)

//         .then((response) => {
//             return response.json()  //* PROMİSE ÇEVİR     // .then((response) => response.json())   
//         })

//         .then((data) => console.log(data))  //*  promise i data ile yakala
//         .catch((error) => console.log(error))
// }

// getStudents("students.json");






// //todo ---------------- 2. örnek --------------------------------------

//* User ları getirme (jsonplaceholder dan )

// function getUsers(url) {
//     fetch(url)
//         .then((response) => response.json()) //* tek satırdan oluştuğu için return yazmana gerek yok
//         .then((data) => console.log(data))

//         .catch((error) => console.log(error));
// }


// getUsers("https://jsonplaceholder.typicode.com/users");








// //todo ---------------- 3. örnek --------------------------------------

//* rest e veri gönderme-yükleme   (109- 17.25 dk)
//* rest olmadığı için çalışmaz şimdi


// function insertStudents() {
//     fetch("https://jsonplaceholder.typicode.com/albums", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },

//         body: JSON.stringify({
//             "id": 8,
//             "firstname": "Metin",
//             "lastname": "Yıldırım"
//         })
//     })
// }




















//?------------------------------------------------------------------------------
//?------------------------------------------------------------------------------
//?------------------------------------------------------------------------------
//?------------------------------------------------------------------------------

//?----------------------- 5- ASYNC - AWAIT -------------------------------------


// //todo ------------------------ 1. örnek -FETCH APİ İLE  -------------------------------------

// document.querySelector("#button").addEventListener("click", () => {

//     fetch("https://jsonplaceholder.typicode.com/posts/1")  //*  postu 1 olanı getir
//         .then((response) => response.json())   //* response u json ile promise çevir
//         .then((post) => {

//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//                 .then((response) => response.json())
//                 .then((comments) => console.log(comments));
//         })
// })





// //todo ------------------------ 2. örnek ASYNC - AWAIT İLE  -------------------------------------

//* ÖNEMLİ =>  Promise dönüyorsa await ile beklet.

document.querySelector("#button").addEventListener("click", async () => {

    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")  //*  postu 1 olanı getir (bekle)
    const post = await responsePost.json();

    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const comments = await responseComments.json()

    console.log(post, comments)
})


// 2 VE 3. ÖRNEK AYNI BİRİ THEN BİRİ ASYNC AWAİT SADECE

// //todo -------------------- 3. örnek ASYNC - AWAIT ( En Kısa Hali )  -------------------------------------

document.querySelector("#button").addEventListener("click", async () => {

    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comment = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()

    console.log(post, comment);

})





//! ---------------------------------- Chat GPT örnekler ------------------------------------------------------

//* try catch örnek

// document.querySelector("#button").addEventListener("click", async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//         if (!response.ok) {
//             throw new Error(`HTTP Hatası: ${response.status}`);
//         }

//         const post = await response.json();
//         console.log(post);
//     } catch (error) {
//         console.error("Bir hata oluştu:", error.message);
//     }
// });


// **************************************************************************************************************** //



//* POST İsteği (Veri Gönderme):

// document.querySelector("#button").addEventListener("click", async () => {
//     try {
//         const newPost = {
//             title: "Burkay'dan Selamlar",
//             body: "Bu bir deneme gönderisidir.",
//             userId: 1
//         };

//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newPost)
//         });

//         if (!response.ok) {
//             throw new Error(`Gönderim başarısız: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log("Gönderilen veri:", result);
//     } catch (error) {
//         console.error("Bir hata oluştu:", error.message);
//     }
// });



//* DELETE  isteği

// document.querySelector("#button").addEventListener("click", async () => {
//     try {
//         const postIdToDelete = 1; // Silmek istediğin post'un ID'si

//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//             method: "DELETE"
//         });

//         if (!response.ok) {
//             throw new Error(`Silme başarısız: ${response.status}`);
//         }

//         console.log(`Post ${postIdToDelete} başarıyla silindi.`);
//     } catch (error) {
//         console.error("Bir hata oluştu:", error.message);
//     }
// });
