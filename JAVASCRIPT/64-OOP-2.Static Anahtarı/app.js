//!STATİC NEDİR ?

//!Bir function veya özellik static ise CLASS'a özgüdür
//!değilse nesneye özgüdür.

// class StringUtil {
//     static isNull() {

//     }
//     static getCharacterLength() {

//     }
// }



//? -----------------------------------------------------------------

class Insan {

    static languagesCount = 10;

    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }


    writeInfo() {
        console.log(this.firstName, this.lastName,
            this.salary, this.languagesCount)
    }
}

const insan1 = new Insan("Enes", "Bayram", "50000");
insan1.writeInfo();

console.log(Insan.languagesCount);  //* static olduğu için sınıf üzerinden eriş

console.log("------------------------------------------------------");





//? -----------------------------------------------------------------

class Matematik {

    static topla(a, b) {
        console.log(a + b)
    }

    cikar(a, b) {
        console.log(a - b)
    }

    carp(a, b) {
        console.log(a * b)
    }

    bol(a, b) {
        console.log(a / b)
    }

}
// TypeScript

const matematik = new Matematik(); //* nesne türetme
matematik.carp(5, 7) // nesne üzerinden eriş (statik değil )

Matematik.topla(10, 5); // class ismi üzerinden eriş (statik olduğu için)


//!Static değilse NESNE üzerinden erişilir.
//!Static ise CLASS ismi üzerinden erişilir.



//! const stringUtil = new StringUtil();





