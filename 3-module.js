//this file will act as a server for our application
// const express = require('express');// the require function. is used to import  modules in node.js 
// express extracting a function from the express module 
// let app = express(); //creating an instance of express application
// app is an object that has methods for routing HTTP requests,confriguring middleware , rendering HTML views and more
// app will use to create the server side web application
// console.dir(app);
console.log("Hello World");
console.log(__filename);
console.log(__dirname);

let names= require("./4-names");
let hello = require("./5-hello");
let new_val = require("./new_data");
i =0;
let val = setInterval(()=>{
    hello(names[i]);
    i++;

}, 1000);
setTimeout(()=>{
clearInterval(val);} , 4000);
console.log("Finished");
setTimeout(()=>{
    console.log(new_val);
} , 4000);
require("./withou.js");