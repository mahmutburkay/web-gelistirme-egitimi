// Elementleri Değiştirmek

const cardBody = document.querySelectorAll(".card-body")[1];

// <h5 class="card-title">Todo Listesi</h5>

// YENİ ELEMENTİ OLUŞTURMA   
const newTitle = document.createElement("h2");
newTitle.className="card-title";
newTitle.textContent = "Todo Listesi - Yeni";



cardBody.replaceChild(newTitle,cardBody.childNodes[1]);

