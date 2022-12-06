let name = "Isan";

let lastName = "Franco";

let estudiante = `${name} ${lastName}`;

console.log("The student's name is: " + estudiante);

let estudianteMayus =  estudiante.toUpperCase();
let estudianteMinus =  estudiante.toLowerCase();

console.log("The name in upper case is: " + estudianteMayus);
console.log("The name in lower case is: " + estudianteMinus);

let nameLength = estudiante.length;

console.log("The student's name length is: " + nameLength);

let firstLetter =  estudiante[0];

console.log("The student's name first letter is: " + firstLetter);

let lastLetter =  estudiante[nameLength-1]; 

console.log("The student's name last letter is: " + lastLetter);

let nameWOSpace =  estudiante.replace(" ", "");

console.log("The name without spaces is: " + nameWOSpace);

let isName = estudiante.includes(name);

console.log("String estudiante contains string name? " + isName);