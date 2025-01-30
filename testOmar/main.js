// Creating JSON object
const jsonObject = '{"firstName": "Hamzeh", "lastName" : "Mowaiah", "age": 42, "City": "Blue City"}';

console.log(jsonObject); // Output: string
// {"firstName": "Hamzeh", "lastName" : "Mowaiah", "age": 42, "City": "Blue City"}
// it should covert to object and after that you can access json data
const convertJson=JSON.parse(jsonObject);
console.log(convertJson);

// Accessing JSON Data
console.log(convertJson.firstName); // Output Hamzeh // the result i got in console is undefined
console.log(convertJson["lastName"]); // Output Mowaiah // the result i got in console is undefined

// Converting JSON to JS Object
ParsedJsonObject = JSON.parse(jsonObject);



console.log(ParsedJsonObject.firstName); 
console.log(ParsedJsonObject["lastName"]);