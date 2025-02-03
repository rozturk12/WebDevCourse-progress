// Number

let balance = 120;
let anotherBalance = new Number(120);

//console.log(balance);
//console.log(anotherBalance.valueOf());

//console.log(typeof balance);
//console.log(typeof anotherBalance);

//boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

//null and undefined

let firstName = null;
let lastName;
//console.log(lastName); //undefined
//console.log(firstName); //null

//string

let myString = "hello";
let myStringOne = "salve";
let username = "Ramazan";

let oldGreet = myString + " Ramazan";
//console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demoOne = `value is ${2 * 2}`;
//console.log(greetMessage);
//console.log(demoOne);

let sm1 = Symbol("Ramazan");
let sm2 = Symbol("Ramazan");

console.log(sm1 == sm2);
