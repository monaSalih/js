'use strict'

let formEmployee=document.getElementById("employeeForm");
formEmployee.addEventListener('submit',addEmployee);

function addEmployee(event){
    event.preventDefault();
    console.log(event , "form event");
    
    let name=event.target.empNameId.value;
    // console.log(name , "form name");
    
}