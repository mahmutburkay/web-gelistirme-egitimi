// TEMPLATE LİTERALS




function write(firstName, lastName) {

     //* eski yazdırma 
     console.log("İsim : " + firstName + " " + "Soyisim :" + lastName)


     // Template Literals ile kullanmak
     // ALT GR + İKİ KEZ NOKTALI VİRGÜL TUŞU.  TEK TIRNAK 
     console.log(

          `
         İsim : ${firstName}
         Soyisim: ${lastName}
         `
     )
}

// write("Enes" , "Bayram")



function getUserById(userId) {
     console.log(`http://localhost:8080/users/${userId}`)
}

getUserById(10)
