// ? -----------------  PROMİSE -----------------------------

// todo PROMİSE KULLANIMI 

let cheeck = true;

const promisel = new Promise((resolve, reject) => {

    if (cheeck) {
        resolve("Promise Başarılı")
    } else {
        reject("Promise Başarısız..");
    }
})

console.log(promisel);


//! *********************************************************************** */



// PROMİSE asenkron yapıları senkrona çevirmek için kullanılır. 
//CALLBACK lerin alternatifi

// PROMİSE YAPISI AŞAĞIDAKİ GİBİ 

let check = false;

function createPromise() {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Promis te herhangi bir sıkıntı yok")
        } else {
            reject("Sıkıntı var reis. ");
        }
    })
}

createPromise()

    // YAKALAMA İŞLEMİ 
    .then((response) => {
        console.log(response);
    })

    .catch((error) => {
        console.log(error);
    })

    .finally(() => console.log("Her zaman çalışır."))




//! *********************************************************************** */


// ? PROMISE + XMLHTTPREQUEST ÖRNEK 

////* Promise.all


function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {

                    try {
                        const studens = JSON.parse(xhr.responseText);
                        resolve(studens);
                    } catch {
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


readStudents("students.json")
    .then((data) => console.log(data))
    .catch((error) => console.log(error))






// *  PROMİSE ALL KULLANIMI  // hepsi doğruysa then,  biri hatalıysa catch 

const p1 = Promise.resolve("birinci promise başarılı ")
const p2 = Promise.resolve("ikinci promise başarılı ")
const p3 = new Promise((resolve, reject) => {
    resolve("üçüncü promise başarlılılı!");
})


Promise.all([p1, p2, p3])
    .then((res) => {
        console.log(res);

        for (let value of res) {
            console.log(value);
        }
    })

    .catch()