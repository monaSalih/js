'use strict'


let apiURL="https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?rmat=json";//url

fetch(apiURL).then(response=>
    {
        return response.json();}
).then(data=>{
//    console.log(data);
   const result=data.Results;
   console.log(result);
   
    
})
.catch(
    err=>{
        console.log(err);
        
    }
)