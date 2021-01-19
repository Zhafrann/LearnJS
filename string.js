let firstName = "Zhafran" //"Zhafran" adalah string
let lastName = "Ammar"

let fullName = firstName + " " + lastName // " " biar ada spasinya
console.log(fullName);

let statement = 'Kata Bapak Saya "BAPAK BAPAK" -bapak' //String jika ingin mengandung " " (petik dua) atau sebaliknya ' ' (petik satu)
console.log(statement);

let explanation = `Coba tes pakai " dan '` //String jika ingin mengandung " " (petik dua) dan  ' ' (petik satu)
console.log(explanation);

let fullNameWithLiteral = `${firstName} ${lastName}`
console.log(fullNameWithLiteral);

let longExplanation = `kita pengen 
makan nasi`
console.log(longExplanation);