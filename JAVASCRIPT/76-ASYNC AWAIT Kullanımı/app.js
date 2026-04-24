// ? --------------------------------- ASYNC AWAIT -------------------------------------------------------
// PROMISE THEN ZINCIRI

// then(){
//      then() {
//          then() {
//          console. log("sdfsfs")
//          }
//      }
//  }


// ASYNC Kullanımı  ...... async Promise Döner 
// async function hello() {
//     return "Hello World";
// }
// //  console.log(hello())
// hello()
//     .then((res) => console.log(res));



//todo ASYNC AWAIT Kullanımı Örnek 
//! 1. yöntem Promise lerle yapılan then zinciri 

document.querySelector("#button").addEventListener("click", () => {


    fetch("https://jsonplaceholder.typicode.com/posts/1")    // postu 1 olanı getir
        .then((response) => response.json())   // promise çevir
        .then((post) => {

            // console.log(post);      ///buradayiz.
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`) //postıd 1 olan yorumları getir

                .then((response) => response.json()) // promise  e çevir
                .then((comments) => console.log(comments))  // comments yerine istediğini yazabilirsin
        })
})



//! 2. Yöntem ASYNC Await ile yapılan uzun

document.querySelector("#button").addEventListener("click", async () => {

    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const post = await responsePost.json();

    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);

    const comments = await responseComments.json();
    console.log(post, comments);

})





//! 3. Yöntem ASYNC Await ile yapılan kısa    post id 1 olanın yorum ve post ve posta gelen yorumlar

// document.querySelector("#button").addEventListener("click", async () => {

//     const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()

//     const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()

//     console.log(post, comments)
// })




