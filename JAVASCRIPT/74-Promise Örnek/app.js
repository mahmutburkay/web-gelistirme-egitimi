//todo-----------PROMİSE ve XMLHttpRequest Kullanımı------------------

function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {

                    try {
                        const studens = JSON.parse(xhr.responseText);
                        resolve(studens);
                    } catch { // json çevirme hatası olursa 
                        console.log("JSON Hatası oluştu, JSON da problem var.")
                    }


                }
            })
        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
}


// getUsers("https://jsonplaceholder.typicode.com/users")

// .then((data) => {  // sadece name i yazdırma 
    
//         data.forEach((user) => {
//             console.log(user.id + " " + user.name);
//         })

//         // console.log(data)
//         console.log("Daha sonra farklı asenkron kodları çalıştırabiliriz.");
// })

// .catch((error) => console.log(error))
// .finally(()=>{
//         // Mail atma kodlarını yazınız. 
// });






//* id si 3 olanın yorumlarını getir.
// yeni promise oluştur. id e göre getirmek için önce id yakala daha sonra id e göre filtrele


function getCommentByUserID(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {

                    try {
                        const comments = JSON.parse(xhr.responseText);
                        resolve(comments);
                    } catch { // json çevirme hatası olursa 
                        console.log("JSON Hatası oluştu, JSON da problem var.")
                    }


                }
            })
        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
}




// id si 3 olanın yorumlarını getir. //* url ye 3 ekle 

getUsers("https://jsonplaceholder.typicode.com/users/3")

.then((data) => {  // sadece name i yazdırma 

        console.log(data) // id si 3 olan datayı getir

        // return ile promise i yakala then ile yaz //template litterıl
        return getCommentByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
        
        // console.log("Daha sonra farklı asenkron kodları çalıştırabiliriz.");
})
.then((comment)=>console.log(comment))

.catch((error) => console.log(error))

.finally(()=>{   // her türlü çalıştır
        // Mail atma kodlarını yazınız. 
});



//? PROMİSE ALL : 3 ü de resolve ise then biri bile hatalıysa catch e girer 

// const p1 = Promise.resolve("birinci promise başarılı")
// const p2 = Promise.resolve("ikinci promise başarılı")

// const p3 = new Promise((resolve , reject) =>{
//     resolve("üçüncü promise başarılı]")
// })

// const p4 = Promise.reject("Hata var reyiz.")

// Promise.all([p1,p2,p3,p4])

// .then((res)=>{
//     // console.log(res)
//     for(let value of res){
//         console.log(value)
//     }
// })

// .catch((error) => console.log(error))
