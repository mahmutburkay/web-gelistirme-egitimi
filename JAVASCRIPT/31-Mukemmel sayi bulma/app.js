// Mükkemmel Sayi Uygulamasi

//    6 = 23 = 496
//6 =1,2,3,6 =12 = 6*2
// 28 = 1,2,4,7,14,28 = 56 = 28%2
/* */



function isPerfectNumber(number){
    let toplam = 1;
    
    for(let i =2 ; i<=number/2 ; i++){

        if (number%i==0){
            toplam+=i;
            }

    }

    if(toplam==number){

        console.log("Mükemmel sayıdır. ");

    }
    else{

        console.log("Mükemmel sayı değildir. ");

    }
}


isPerfectNumber(51);