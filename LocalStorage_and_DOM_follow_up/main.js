'use strict'

let formEmployee=document.getElementById("employeeForm");
formEmployee.addEventListener('submit',addEmployee);


// declare array of object
let employeeArr=[]
// read data from form

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
// ad new employee
function Employee(nameEmp, emailEmp, empDep){
    this.employeeName=nameEmp;
    this.employeeEmail= emailEmp;
    this.employeeDep=empDep;
    this.empSalary=salaryMount(260, 500)

    employeeArr.push(this);
    console.log(employeeArr, "employe array result");
    
    }

    // calculate salary
    function salaryMount(min, max) {
        return Math.floor(Math.random() * (max - min) + min); 
      }

