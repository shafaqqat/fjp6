// empty array

let arr = []
console.log(arr);

// Array with element

let eleArr = [1,2,3,"strinh hai", false,'c', 4.5]
console.log(eleArr);


// particular element

console.log(eleArr[3]);

// change in array

eleArr[1]="change ho gaya";
console.log(eleArr);
console.log("#####################################################");


// ARRAY METHODS

// 1. PUSH

console.log("before push "+eleArr);

eleArr.push("new item");

console.log("after push"+ eleArr);

// 2. POP
console.log("before pop "+eleArr);

eleArr.pop();

console.log("after pop"+ eleArr);


// 3.SHIFT
console.log("before shift "+eleArr);

eleArr.shift();

console.log("after shift"+ eleArr);

// 4. UNSHIFT

console.log("before unshift "+eleArr);

eleArr.unshift("add element in start");

console.log("after unshift"+ eleArr);



