// PATH IS A BUILT IN MODULE 
const path = require("path");
console.log(path.sep); //seperator
//path.join - joins the path segements use to join the realtive patg 
val = path.join("/contents",  "/subfolder" , "text.txt");
console.log(path.join("/contents",  "/subfolder" , "text.txt"));
//path.basename - gives the last portion of the path
let baseName=path.basename(val , ".txt");
console.log(baseName );
console.log("the dirname is" , path.dirname(val));
//path.resolve - convert the path into absolute path
let resolve= path.resolve(__dirname , "contents" ,"subfolder" , "text.txt" );
console.log(resolve);

// The path module in Node.js is a built-in core module that helps you work with file and directory paths in a safe and consistent way.
// 📌 Why we need path
// Different operating systems use different path separators:
// Windows → \ (backslash)
// Linux/macOS → / (forward slash)
// If you hard-code paths, your program may break when moved.
// The path module solves this by handling paths in a cross-platform way.
// 🔑 Common Uses of path
// 1. Joining paths
// const path = require('path');

// const fullPath = path.join('users', 'harsh', 'documents', 'file.txt');
// console.log(fullPath);
// 👉 On Windows → users\harsh\documents\file.txt
// 👉 On Linux/macOS → users/harsh/documents/file.txt
// 2. Getting directory name
// const filePath = '/users/harsh/index.js';
// console.log(path.dirname(filePath));   // /users/harsh
// 3. Getting file name
// console.log(path.basename('/users/harsh/index.js'));   // index.js
// 4. Getting file extension
// console.log(path.extname('/users/harsh/index.js'));   // .js
// 5. Resolving absolute paths
// console.log(path.resolve('folder', 'file.txt'));
// // Outputs absolute path depending on current directory
// ✅ In short:
// path module = utility for working with file paths.
// Makes code portable across OS.
// Provides helpers: join(), resolve(), dirname(), basename(), extname().
