// "C:\Users\SHAFAQQAT\Desktop\FJP 6\module2\node\path.js"

let path = require('path');
// console.log(path);

let extensionName = path.extname("C:\Users\SHAFAQQAT\Desktop\FJP 6\module2\node\path.js");
console.log(extensionName);

let baseName  = path.basename("C:\Users\SHAFAQQAT\Desktop\FJP 6\module2\node\path.js");
console.log(baseName);

console.log(__dirname);     // gives directery oath

console.log(__filename);     // file path 

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath,"test.js");
console.log(newFilePath);