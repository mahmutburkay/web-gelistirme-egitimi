//Selectors (Seçiciler) - Style Özellikleri

//classname , id , tag name  ** yakalama çeşitleri

//** 1-getElementById : id ye göre elementi yakalar.

//** 2- getElementByClassName : class ismine göre yakalar.

//** 3- getElementByTagName : etiket ismine göre yakalar.





//************** ID E GÖRE YAKALAMA *****************************

// const button = document.getElementById("todoAddButton");

// console.log(button);
// console.log(button.id); // alttaki kodla aynuı
// console.log(button.getAttribute("id")); // üstteki ile aynı

// console.log(button.className);
// console.log(button.getAttribute("class"));

// 3. indeksteki class ı ver
// const classListesi = button.classList[3];
// const classListesi = button.classList[2];



// clas listesini al foreach ile dön 
// const classListesi = button.classList;

// classListesi.forEach(function(className){
//     console.log(className);
// })
// console.log(classListesi);




// element içindeki text i ver
// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;

// console.log(buttonText);
// console.log(buttonText2);


//. inner etiketleri algılar textcontent algılamaz.
// button.innerHTML="<b>Todo Ekleyin</b>";
// button.textContent="<b>Todo Ekleyin</b>";


//**/******************************************************************* */
//***************CLASSNAME E GÖRE YAKALAMA *************************** */

// class name ile yakalama

// const todoList = document.getElementsByClassName("list-group-item");
// console.log(todoList);




// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo.textContent);
// })
// console.log(todoList);







//***************TAG E GÖRE YAKALAMA *************************** */


// FORMU YAKALAYIP FOREACH İLE DÖNME 

// const forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(function(form){
//     console.log(form);
// })
// console.log(forms[1]);



// Lİ LERİ YAKALAMA

// const todoList = document.getElementsByTagName("li");
// console.log(todoList);



//****getElementById - getElementByClassName - getElementByTagName







//*****************************************************************/
//*************querySelector - querySelectorAll ***********************/



//querySelector - querySelectorAll


// const clearButton = document.querySelector("#todoClearButton");
// console.log(clearButton); 

// console.log(document.getElementById("todoClearButton")));
// yukarıdaki ile ----------aynı ıd ile seçme 






// class ile seçme 
// const todoList = document.querySelector(".list-group");
// console.log(todoList);

// const todoList = document.querySelector(".list-group");
// console.log(todoList);






// li lerin ilk çocuğu getir.
// const todoList = document.querySelector("li:first-child");
// console.log(todoList);



//**************************************************** */
// odd ve even 
// odd=tek 
// even=çiftleri yakalama 


// tekleri yakala foreach le dön arkapalanlarını değiştir.
const todoList = Array.from(document.querySelectorAll("li:nth-child(odd)"));

todoList.forEach(function (todo) {
    todo.style.backgroundColor = "lightgrey";
})

console.log(todoList);