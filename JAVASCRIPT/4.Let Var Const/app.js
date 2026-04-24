// Var - Let - Const


/* 
 -------- SCOPE (KAPSAM)  ------

-> Global Scope :  her yerden erişilebilir en geniş sınırı yok 
-> Function Scope : kıvırcık parantez içinde tanımlı değişken   
-> Block Scope : if ,for,while içinde tanımlı mor

*/



// var degiskenIsmi = 10;
// console.log(degiskenIsmi);



// var : function scope özelliği gösterir. heryerden erişilebilir
// let ve const : block scope özelliğine sahiptir.kıvırcık parantez içi erişilir. 
// var global scope
// let const block kıvırcık parantez
// if while for mor block 


// function selamVer(){
//     var selam = "Herkese selam";  // function scope
//     if(true){
//         const b = 10;
//         console.log(b);
//     }
//     console.log(selam);
// }

// selamVer();




// var a = 5;
// var a = 10;
// console.log(a);


// block ve let  ise a 2 defa yazılamaz.
// if(true){

//     let a = 5;
//     let b = 10;
//     console.log(a);
// }




// LET & CONST arasındaki fark 
// const :  sabittir değişmez 
// let değeri sonradan değiştirilebilir ama const asla değiştirilmez.




// let b = 5;
// b = 7;
// b = 12;

// console.log(b);



const user = {
    username : "mehmet mahmut",
    password : "1234"
}

// user = {} boş yapamazsın const değiştirilmez içi değişir sadece
user.username = "M.Mahmut";
user.password = "12345"

console.log(user);