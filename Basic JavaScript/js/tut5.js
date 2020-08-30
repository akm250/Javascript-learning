// Type conversion
console.log('Welcome to tut5');
let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr = String([1,2,3,4,5,6,7]);
// console.log(arr.length, (typeof arr));

let i = 75;
// console.log(i.toString());

let stri = Number("3435");
stri = Number("343d5");
stri = Number([1,2,3,4,5,6,7,8]);
// console.log(stri, (typeof stri));

let number = parseFloat('36.285');
console.log(number.toFixed(2), (typeof number));

// Type cooerction

let mystr = Number("598");
let mynum = 55;
console.log(mystr + mynum);