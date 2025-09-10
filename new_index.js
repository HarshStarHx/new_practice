// let os = require('os')
// console.log(os.arch())
// // console.log(__filename)
// // console.log(__dirname)
// console.log(os.platform)
// console.log(__dirname)
// console.log(__filename)
// console.log(os.freemem())
// console.log(os.release())
// console.log(os.type())
// console.log(os.cpus())


// let path= require('path')
// console.log(path)
// console.log(path.basename(__filename , ".js"))
// const full_path = path.join("/Desktop/","/exports/" , "/new_index.js");
// console.log(full_path)
let  data = require("./new_data");
let  hello = require("./5-hello");
let  names= require("./4-names");

console.log(data , hello , names)

require("./withou"); //default
console.log(__dirname);

console.log(__filename);

let os = require("os");
console.log(os.arch())
console.log(os.type())
console.log(os.cpus())
console.log(os.platform())
console.log(os.freemem())
console.log(os.homedir())
console.log(os.release())


let path = require("path");
let join_new= path.join("Express/")