let firstname = "Prathibha";
let lastname = "Sanjana"
console.log(firstname + " " + lastname);
console.log(firstname*10);
console.log(firstname.toUpperCase());
console.log(lastname.toLowerCase());

console.log(firstname.replace('Prathibha','Prathi'))
console.log(firstname[0]);
console.log(lastname.substring(0,4));

let fruits = ['Apple','Banana','Mango','Orange','Pineapple','Grapes','Cherry','Watermelon','Papaya','Strawberry','Blueberry'];
fruits.push('Pineapple')
console.log(fruits)
fruits.pop();
console.log(fruits)
fruits.shift()
console.log(fruits)

fruits=fruits.filter((fruit)=>fruit!='Banana')
console.log(fruits)

fruits=fruits.map((fruit)=>fruit!='Cherry')
console.log(fruits)

let student=
{
    "name":"Swathi",
    "section":"B"
}
console.log(student.name)
