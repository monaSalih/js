'use strict'

let formEmployee=document.getElementById("employeeForm");
formEmployee.addEventListener('submit',addEmployee);


// declare array of object
let employeeArr=[]


function addEmployee(event){
    event.preventDefault();
    // console.log(event , "form event");
    
    let name=event.target.empNameId.value;
    // console.log(name , "form name");

    let email=event.target.emplEmailId.value;
    // console.log(email , "email");

    let depWork=event.target.depEmplId.value;
    // console.log(depWork, "select value");
    
   new Employee(name, email, depWork);//hoisting
}

function Employee(nameEmp, emailEmp, empDep){
    this.employeeName=nameEmp;
    this.employeeEmail= emailEmp;
    this.employeeDep=empDep;

    employeeArr.push(this);
    console.log(employeeArr, "employe array result");
    
    }


