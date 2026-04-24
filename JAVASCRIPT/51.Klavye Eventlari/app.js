//KLAVYE EVENTLARI

//keypress : sadece harf ve sayılarda tetiklenen eventtır.

//keydown : tab caps lock keypress hepsinde aynı çalışır.

//keyup : tuştan elini kaldırdığında çalışan eventtır.



// keypress ile tıkladığın harfi konsola yazma 
// document.addEventListener("keypress", run);
// function run(e) {

//     console.log(e.key);

// }


// keydown tıkladığın harf
// document.addEventListener("keydown", run);
// function run(e) {

//     console.log(e.key);

// }


// keyup : elini kaldırdığında 
// document.addEventListener("keyup",run);
// function run(e){

//     console.log(e.key);

// }




/*/***************************************************************** */

// ** f5 e basınca güncelleme yapmasın örnek

// document.addEventListener("keydown",run);

// function run(e){
//   console.log(e.keyCode);
//   if(e.keyCode ==116){
//     alert("Sayfa yenileme engellendi!");
//   }

//   e.preventDefault();
// }






//******************* input içine yazınca konsolda yazma örnek  **************************************/


const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keyup", run);



function run(e) {
    console.log(e.target.value); // konsola yazma 
    cardTitle.textContent = e.target.value;   // kartın içine yazma text
}




