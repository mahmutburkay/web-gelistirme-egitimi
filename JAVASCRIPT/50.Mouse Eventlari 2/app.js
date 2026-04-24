// MOUSE EVENTLARI 2  (OLAY)

//DOMContentLoaded : sayfa ilk yüklendiğinde çalışır. 
//load : Sayfa yüklendiğinde çalışır. WİNDOW ile çağır 
//click : Tıkladığında Çalıştır
//dblclick : çift tıklamada çalıştır. 


//mouseover : üzerinde gezindiğinde arttır sürekli 
//mouseout : verdiğin elementin dışına çıktığında sürekli

//mouseenter : üzerinde gezdiğinde bir kere çalıştır.
//mouseleave : elementin dışına çıktığında bir kere çalıştır



// ***DOMContentLoaded  DOCUMENT İLE ÇAĞIR .
// document.addEventListener("DOMContentLoaded", run);

// function run(){
//     console.log("Sayfa Yüklendi");
// }


//**load DOCUMENT ile aynı fark window 
// document.addEventListener("load", run);

// function run(){
//     console.log("Sayfa Yüklendi.");
// }



// *** CLİCK  ve dblclick
const cardTitle = document.querySelectorAll(".card-title")[1];

cardTitle.addEventListener("dblclick", run);


function run(e) {
    console.log(e.type);
}




//mouseover ve  mouseout
const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);

cardBody.addEventListener("mouseenter", run);
cardBody.addEventListener("mouseleave", run);



function run(e) {
    console.log(e.type);
}