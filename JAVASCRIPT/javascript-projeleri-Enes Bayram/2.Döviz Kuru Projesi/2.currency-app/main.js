//Elementleri Seçelim.

const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();  //* Currency sınıfındaki metodları kullanabilmek için o sınıfta nesne türet

runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", exchange);
}


function exchange() {
  const amount = Number(amountInput.value.trim()); // input içindeki değeri number a çevir al 
  const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent; // seçili olanı al 
  const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent; // seçili olanı al 

  // console.log(amount, firstOptionValue, secondOptionValue); // doğru seçtik mi dene konsolda




  // 3 değeri currency sınıfına gönder 
  currency.exchange(amount, firstOptionValue, secondOptionValue)
    .then((result) => {
      resultInput.value = result.toFixed(2) // currency den gelen değeri sonuca yazdır.
    })

}

