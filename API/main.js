'use strict'
const express=require("express");
const app=express();
const axios=require("axios");

app.get('/',(req,res)=>{
    axios.get("https://serpapi.com/search?engine=google_food&q=food&location=Paris&gl=fr&hl=fr&api_key=4aeb969512187a7ab21add959f833e939eee0764eb0942ac2f99f28bc15e4700").then(response=>{ res.header("Access-Control-Allow-Origin","http://127.0.0.1:5500/API/index.html")
        res.send(response.data)
    }).catch(error=>{
        console.log(error)
    })
});

// let apiURL="";//url

// fetch(apiURL).then(response=>
//     {
//         return response.json();}
// ).then(banana=>{
// //    console.log(banana);
//    const result=banana.local_results;
//    console.log(result);

// })