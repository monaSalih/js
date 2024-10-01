'use strict'


let apiURL="https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json";//url

fetch(apiURL).then(response=>
    {
        return response.json();}
).then(banana=>{
   console.log(banana);
   const result=banana.Results;
   console.log(result);
   
    
})