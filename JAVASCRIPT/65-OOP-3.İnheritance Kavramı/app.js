//!INHERİTANCE (MİRAS ALMA) KAVRAMI



//!Inheritance ile hayatımıza giren kelimeler.
//super : Üst sınıfı gösterir.
//super()

//this : bu sınıfta tanımlı 


class Person {

    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo() {
        console.log(this.firstName, this.lastName, this.salary)
    }

}


class Student extends Person {

    constructor(firstName, lastName, salary) {
        super(firstName, lastName, salary);  // miras aldığın sınıfa gönder
    }

    writeInfo() {
        super.writeInfo(); // üst sınıftaki metodu çalıştır
    }

}


// person sınıfından miras al 
class Engineer extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName, salary);
    }
    writeInfo() {
        super.writeInfo();
    }
}




const student1 = new Student("Enes", "Bayram", 50000);
const engineer1 = new Engineer("Aysun", "Meral", 45000);

student1.writeInfo();
engineer1.writeInfo();
