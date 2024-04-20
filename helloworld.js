let x = BigInt(999999999999999);
let type = typeof x;

console.log(type)


let xx = 5n;
let y = Number(xx) / 2;

let xxx = Number.MAX_SAFE_INTEGER;
let n = 123;
console.log(Number.isSafeInteger(x));




let xxxx = 9.442;
xxxx.toFixed(0);
xxxx.toFixed(2);
//xxxx.toFixed(4);
//xxxx.toFixed(6);
console.log(xxxx.toFixed(2));
console.log(xxxx.toPrecision(3));

console.log(Number(new Date()));


console.log(Number.isInteger(parseInt("-10")));
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");

console.log(Number.MAX_SAFE_INTEGER)



console.log("-------ARRAY------")
const cars = ["Saab", "Volvo", "BMW"]
cars[0] = "test"
console.log(cars[0]);

const person = {firstName:"John", lastName:"Doe", age:46};
console.log(person.firstName);
console.log(cars.sort());

cars.push("new value");
console.log(cars)



const pers = [];
pers["firstName"] = "John";
pers["lastName"] = "Doe";
pers["age"] = 46;
pers.length;     // Will return 0
pers[0];         // Will return undefined
console.log(pers[0])
console.log(`pers is an ${typeof(pers)}`)

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.join(" * "));
console.log(fruits.shift())
fruits.pop();
console.log(`using pop ["Banana", "Orange", "Apple", "Mango"]: ${fruits}`)

fruits.unshift("Lemon");
console.log(`using unshift: ${fruits}`)


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(`using concat: ${myChildren}`)


let newCopy = fruits.copyWithin(2, 0);
console.log(`using array copy: ${newCopy}`)


const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(`using array flat: ${newArr}`)

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss.splice(2, 0, "Lemon", "Kiwi");
console.log(`using array splice: ${fruitss}`)

const fruitsn = ["Banana", "Orange", "Apple", "Mango"];
const newfruitsn = fruitsn.slice(0, 2);
console.log(`using slice: ${newfruitsn}`);