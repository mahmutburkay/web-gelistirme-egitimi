// EVENTS (OLAY)

//**--------addEventListener()----------------------------*/



// önce butonu yakala 
const clearButton = document.querySelector("#todoClearButton");


// butona tıklandığında fonk çalışsın
clearButton.addEventListener("click",changeTitle);



// tıklandığında başlık değiştirme 
function changeTitle(){
    document.querySelectorAll('.card-title')[1].textContent="Todo Listesi Başlığı Değişti"
    console.log("Başlık Değişti");
} 



// event ı yakalama 
// function changeTitle(e){ 
//     console.log(e); // eventi yakalama
//     console.log(e.type); // event ın tipi 
//     console.log(e.target); // tetiklenmiş html elementi verir
//     console.log(e.target.textContent);
//     console.log(e.target.className);
    
//     }    




