// AJAX Nedir 

// ilk xmlhttp de nesne oluştur 
// const xhr = new XMLHttpRequest();


//* ------------------- AJAX ÖRNEK -------------------------------

// div i yakala 
const demo = document.querySelector("#demo");




function loadDoc() {

    let url = "ajax_info.txt";
    const xhr = new XMLHttpRequest();  // xhr nesnesi oluşturma


    xhr.addEventListener("readystatechange", () => {

        if (xhr.readyState == 4 && xhr.status == 200) {

            demo.innerHTML = xhr.responseText;
            console.log("Text başarılı bir şekilde değiştirildi ");

        }

    })

    // isteği almak için get kullan 
    xhr.open("GET", url);
    xhr.send();
}








//!  2. yol ama yukarıdakini öğren

// // readystate tetiklendiğinde değiştiğinde fonk çalıştır
//     xhr.onreadystatechange = function () {

//         // readystate 4 se(sonuç hazır başarılı) ve
//         // statüs 200 se(hiç sıkıntı yoksa çalış )
//         if (xhr.readyState == 4 && xhr.status == 200) {

//             // dönen cevabı al ve innerhtml ile ekrana bas
//             document.getElementById("demo").innerHTML = xhr.responseText;


//             console.log("Text başarılı bir şekilde değiştirildi ");

//         }
//     };