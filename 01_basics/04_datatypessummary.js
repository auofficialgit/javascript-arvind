// Primitive-7 types

// String, Number, Boolean, null, undefined, Symbol and BigInt

const score=200
const scoreValue=30.6
const ishere=true
const temp=null
let userEmail;
const id1= Symbol('111')
const id2=Symbol('111')
// console.log(id1==id2);



// Reference/Non-Primitive

// Array, Objects, Functions

const heroes=["Superman", "Batman", "Spiderman"];
let obj=
{
    name: "Arvind",
    age:29
}

const myFunction = function(){
    console.log("Hello Arvind");
}
// https://262.ecma-international.org/5.1/#sec-11.4.3


//-------------Memories-------------
// Stack (Primitive) and Heap (Non-Primitive)

let currentCity = "Tundla"

let anotherCurrentCity = currentCity
anotherCurrentCity ="Bangalore"
console.log(currentCity);
console.log(anotherCurrentCity);

let user1 ={
    email: "arvind@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email="monu@google.com"

console.log(user1);
console.log(user2);



