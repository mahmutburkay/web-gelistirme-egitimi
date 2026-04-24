//SET

const set = new Set();




//? add metodu ile atama yapma 

set.add(true)
set.add(3.14)
set.add("Enes")
// set.add("Enes")
// set.add("Enes")
// set.add("Enes")
// set.add("Enes")
// set.add("Enes")
set.add(7)
set.add({ username: "enes", password: "1" });
set.add([1, 2, 3, 4])  // referans tip silmesi farklı 




//? Size dizi büyüklüğü (eleman sayısı))
// console.log(set.size)



//? delete silme

// set.delete("Enes")
// set.delete(7)
// set.delete([1,2,3,4])
// console.log(set.size)


//? Has dizide var mı yok mu
// console.log(set.has("Ali"))



//? For of döngüsü ile üzerinde gezme
// for(let value of set){
//     console.log(value)
// }

// const values = Array.from(set);
// values.forEach((value)=>{
//     console.log(value)
// })


//? SET DEN ARRAY OLUŞTURMA
// const values = Array.from(set);


//? ARRAY DEN SET OLUŞTURMAK

// let array = [1,"Enes",true,"Mustafa",15,[1,2,3]]

// const newSet = new Set(array);
// console.log(newSet)


