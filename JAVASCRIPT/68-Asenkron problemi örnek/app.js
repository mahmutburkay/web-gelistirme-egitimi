//ASENKRON PROBLEMI

//http istekleri

const users = [
    {
        userId: 5,
        post: "Enes Post 1"
    },

    {
        userId: 5,
        post: "Enes Post 2"
    },

    {
        userId: 5,
        post: "Enes Post 3"
    },

    {
        userId: 6,
        post: "Ali Post 1"
    },

    {
        userId: 7,
        post: "Betül Post 1"
    }
]

// user id
// post by user id




//Senkrona çevireceğiz.
//callback — promise — async await  --önce sen çalış mantığını uygular.

function getUserId() {
    setTimeout(() => {
        //Servise gittik ve cevabi aldık.
        return 5;
    }, 1000);
}

function getPostByUserId(userId) {
    console.log(userId); // userId süre yetişmediği için undefined 
    //Gergek bir rest api ya istek atace
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId === userId) {
                console.log(user.post);
            }
        })
    }, 500);
}

let userId = getUserId();
getPostByUserId(userId);



