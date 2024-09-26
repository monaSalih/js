"use strict"
// toString
let fruits=["banana","orange","apple","mango"];
// let new_fruit=fruits.toString();
// console.log(new_fruit);
// at

let fruits2=["banana","orange","apple","mango"];
// console.log(fruits2.at(2));

// join
let fruits3=["banana","orange","apple","mango"];
console.log(fruits3.join("|"),"join");
// pop
let fruits4=["banana","orange","apple","mango"];
let fruit_new=fruits4.pop()
console.log(fruits4.pop(), " pop", "fruits4:" , fruits4);
// push
let fruits5=["banana","orange","apple","mango"];
let fruit_new1=fruits5.push("Kiwi");
console.log(fruits5 ,"fruit_new1");

// shift
let fruits6=["banana","orange","apple","mango"];
console.log(fruits6.shift(),"shift");
console.log(fruits6.unshift("graps"),"unshift");
// concat

let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];
let new_arr=arr1.concat(arr2,arr3);
console.log(new_arr,"concat");

// splice
let fruits8 = ["Banana", "Orange", "Apple", "Mango"];
// let fru_new=fruits8.splice(2,0, "lemon","kiwi");
let new_arr_fru=fruits8.splice(2,1)
console.log(fruits8);

// slice

let fruits9 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits9.slice(1), "slice");
console.log(fruits9.slice(-2),"slice -");





