//*---------------- AJAX Örnek ---------------------------------

// yeni url oluşturma (url ye id ekleme)
function prepareURL(url, id) {
    if (id === null) {
        return url;
    }
    return `${url}?postId=${id}` // post ıd sadece 1 olanı ver yeni ıd 
}


//* POST ID = (ÖR = 7) OLAN COMMENTLERİ GETİR

function getComments(url, id) {
    let newURL = prepareURL(url, id);

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET", newURL)
    xhr.send();
}


//*  USER LARI GETİR 

function getUsers(url) {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET", url);
    xhr.send();
}


getComments("https://jsonplaceholder.typicode.com/comments", 1)
getUsers("https://jsonplaceholder.typicode.com/users");

