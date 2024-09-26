"use strict"

function std_fun_details(name_std2, age, majo){
    this.std_name=name_std2;
    this.age_std=age;
    this.majo_std=majo
}
let omar=new std_fun_details("Omar", 22, "Software eng");
let Naser=new std_fun_details("Naser", 25, "computer science")

// std_name=banana, std_age, std_major, std_number, std_email
console.log(omar, "Omar");
Object.defineProperty(omar,"std_email",{value:"omar@gmail.com"})
console.log(omar,"new prop");

console.log(Naser,"Naser");
Object.defineProperty(Naser,"majo_std",{value:"cs"})
console.log(Naser,"Naser updated");




