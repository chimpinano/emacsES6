var result=Array.from(document.querySelectorAll('*')) // Returns a real Array
console.log(result);

var m = new Map([[1, 2], [2, 4], [4, 8]]);

console.log(Array.from(m));  
console.log(Array.from("foo"));   

var arr=Array.of(1, 2, 3) // Similar to new Array(...), 
                          //but without special one-arg behavior
var intArr = Array.of(42);
var numArr=new Array(42);

console.log(intArr);
console.log(numArr);

console.log(arr);

console.log([0, 0, 0].fill(7, 1)); // [0,7,7]

console.log([1, 2, 3].findIndex(x => x == 2)); // 1

console.log([1, 2, 3, 4, 5].copyWithin(3, 1)); // [1, 2, 3, 2, 3]
