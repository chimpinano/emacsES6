// Arrow Functions------------------------------------------------------------
/*
var helloWorld=function(name, greeting){
	return name + " " + greeting;
}
console.log(helloWorld("SkillBakery", "Start Learning Today!"));

var newGretting = (name, gretting) => {
	return name + " " + gretting;
}
console.log(newGretting("SkillBakery!", "Start Learning Today!"));

var gretting = (name, gretting) => name + " " + gretting;
console.log(newGretting("SkillBakery!", "Start Learning Today!"));

var greetingDefault = greeting => greeting;
console.log(greetingDefault("Start Learning Today!"));

var greetingNoParam = () => "Hello SkillBakery";
console.log(greetingNoParam());

var courses = ["Una","Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"];
console.log(
	courses.map(course => {
		return course.toUpperCase();
	})
);

var numberArr = [1,2,3,4,5,6,7,8,9,10];
var sortedArr = numberArr.sort( (a,b) => a < b? 1: -1);
console.log(sortedArr);

function Course(){
	this.name = "Master ES6";
	this.description = "The Next Level";
	this.author = "Skillbakery";
	this.getSummary = function(){
		return this.name + ", " + this.description;
	};

	this.getDetails = function(){
		window.setTimeout( ()=>{
			console.log(this.getSummary() + " " + this.author);
		}, 1000);
	}
}

var course = new Course();
course.getDetails();
console.log("...........................");

var [d,m,y] = [15,7,2015];
console.log(m);
[m,y] = [y,m];
console.log(y);
console.log(m);

function getDate(){ return [15,07,2015];}
var [d,m] = getDate();
console.log(d);
console.log(m);

function currentDate(){ return {d:15, m:07, y:2015}; }
var { m:month, y:year } = currentDate();
console.log("--------");
console.log(month);
console.log(year);

var {m,y} = currentDate();
console.log(m);
console.log(y);
*/
//Parameters------------------------------------------------------------
/*
function assignCourseES5(courseName, publishedBy){
	courseName = courseName || "Master Javascript & JQuery"
	publishedBy = publishedBy || "SkillBakery"
	console.log(courseName);
}
assignCourseES5();
assignCourseES5("AX");
assignCourseES5("A","B");

function assignCourseES6(courseName="Master Javascript & JQuery", publishedBy="SkillBakery"){
	console.log(courseName + " " + publishedBy);
}
assignCourseES6();
assignCourseES6("C","D");
console.log("...........................");

function resParametersES6(firstName, lastName, ...details){
	console.log(firstName + " " + lastName);
	console.log(details);
	for (contac in details) {
		console.log(details[contac])
	}
}
resParametersES6("Skillbakery", "Studio", "http://testx.com", "http://testy.com");
console.log("...........................");

var number = [1,2,3,4,5];

max = Math.max(...number);
console.log(max);

function logMessages(message,...args)
{
    console.log(message,...args);
}
//console.log("SkillBakery Studio Presents %s : %s","Master JavaScript & jQuery","Learn JavaScript & jQuery");
logMessages("SkillBakery Studio Presents %s : %s","Master JavaScript & jQuery","Learn JavaScript & jQuery");
console.log("...........................");

//Proper Tail Calls - In ES5 the previous call stacks were not cleared
//In ES6 the previous call stacks are reused
function wellcome(name){
	return "Hello " + name;
}
function nameTitle(name){
	return getName(name);//tail call
}
function getName(name){
	return "Mr. " + name; //tail position
}
*/

//Destructuring Parameters,Arrays and Objects----------------------------------------------------
/*
function logMessage(msg,{name:courseName, publisher:publisherName})
{
    console.log(msg + " " + courseName + " by "  + publisherName);
}
logMessage("I am learning", {name:"Master ES6", publisher:"SkillBakery"});
console.log("...........................");

var numbers = [1,2,3,4,5];
var [uno,dos,tres,cuatro,cinco] = numbers;
console.log(cinco);

function arrayDestructuring([uno,dos,...loDemas]){
	console.log(uno);
	console.log(dos);
	console.log(loDemas);
}
arrayDestructuring(numbers);
console.log("...........................");

var numbers_nested = [1,2,[3,4,5]];
var [uno_n,dos_n,[tres_n,,cinco_n]]=numbers_nested;
console.log(uno_n);
console.log(dos_n);
console.log(cinco_n);
console.log("|...........................|");

"use strict";
var course = {
	name: "Master JavaScript & JQuery",
	publisher: "SkillBakery"
};
function courseDetails(c){
	let {name,publisher,price} = c;
	console.log(name + " " + publisher);
}
courseDetails(course);
*/

//iterators------------------------------------------------------------
/*
"use strict";
var words = ['skill', 'Backery', 'Studio'];
	//entries
for(let word of words.entries())
	console.log(word);
	//values
for (let word of words)
	console.log(word);
for (let word of words.keys())
	console.log(word);

for (var ch of 'test')
	console.log(ch);	
*/

//Generators ------------------------------------------------------------
/*
function* logMessages(){
	console.log("Learning ES6");
	yield "FFGFGSDGSDG";
	yield "ES6"
	yield "XXXX"
}
let msg = logMessages();
for(let word of msg)
	console.log(word)
//let msg = logMessages();console.log(msg);let output = msg.next();console.log(output);
//let result = msg.next();console.log(result);
*/

//Collections ------------------------------------------------------------
/*
"use strict";
let s = new Set([10,20,30]);
console.log(s.has(40));
s.add(40);
console.log(s);
s.add(20);
console.log(s);
s.delete(30);
console.log(s);
console.log("...........................");

var m = new Map();
var sb = {name:'SkillBakery'};
m.set(sb, 'Learning ES6');

console.log(m.has(sb));
console.log(m.get(sb));
console.log(sb);
for(var item of m.values())
	console.log(item);
console.log("...........................");

//A symbol is unique and immutable.
//We can use symbols as identifiers when adding properties to an object
let key = Symbol("A Secret Key");
let sample = Symbol("A Secret Key");

let a = new Map();
{
	let key = Symbol();
	a.set(key, "SkillBakery");
	console.log(a.get(key));
}
console.log(a.get(key));
console.log(a.size);
console.log("...........................");

let courseName = Symbol();
let course = {
	publisher: "SkillBakery",
	[courseName]:"ES6"
};
console.log(course);
console.log(JSON.stringify(course));
console.log(Object.getOwnPropertySymbols(course)[0]);
let keySymbol = Object.getOwnPropertySymbols(course)[0];
console.log(course[keySymbol]);

var myObj = {};
var fooSym = Symbol('foo');
var otherSym = Symbol('bar');
myObj['foo'] = 'bar';
myObj[fooSym] = 'baz';
myObj[otherSym] = 'bing';

var props = [];
for(var p in course){
	console.log(p);
	props.push(p);
}
console.log(props.length);
console.log(props);
console.log("...........................");

var weak = new WeakMap();
//weak.set('publisher', 'Skillbakery');
//console.log(weak.get('publisher'));
var course2 = {name:'ES6 Next Level',publisher:'SkillBakery'};
var company = {name:'Skillbakery'};
weak.set(course2, {price:59});
weak.set(company, "SB");
console.log(weak.get(company));
console.log(weak.get(course2));

//console.log(weak.length);
console.log(weak.has(course2));
weak.delete(course2);
//weak.clear(course2);
console.log("...........................");

//Map examples
var yourMap = new Map();
yourMap.set("person", { name: "Paul Shan" });
yourMap.set(13, "Unlucky number");
yourMap.set(null, "I am null");
yourMap.get("person"); //{ name: "Paul Shan" }
yourMap.get(13); //Unlucky number
yourMap.get(null); //I am null

var theirMap = new Map([
    ["president", "David Palmer"],
    ["country", "United States"]
]);
 
theirMap.get("president"); //David Palmer
theirMap.get("country"); //United States
console.log("...........................");
//WeakMap examples
var myWeakMap = new WeakMap();
//set things in WeakMap 
//* myWeakMap.set(someObjectAsKey, somethingElseAsValue);
//get the value back from WeakMap
//* weakWeakMap.get(someObjectAsKey);
var dummyObject = {a:1};

var yourWeakMap = new WeakMap();
yourWeakMap.set({a:1}, "I am for new object");
yourWeakMap.get({a:1}); //undefined
yourWeakMap.set(dummyObject, "I am for dummy object");
yourWeakMap.get(dummyObject); //I am for dummy object
//ERRORS
//yourWeakMap.set(dummyFunc, "I am for dummy function"); //ERROR
//yourWeakMap.set("person", { name: "Paul Shan" }); // ERROR

var theirMap = new Map([
    [dummyObject, "David Palmer"]
]);
 
theirMap.get(dummyObject); //David Palmer

//Map vs WeakMap 
//*Map	
//	Key in Map can be anything.	
//	Map has .size
//	.forEach() is available.
//	Nothing is auto destroyed.
//*WeakMap
//	Key in WeakMap must be of type Object (not null).
//	WeakMap has .length
//	No .foreach() here.
//	If a key object is deleted, the value assigned against that key in any WeakMap will also be destroyed.
*/

//Template Strings ------------------------------------------------------------
/*
var name = "Skillbakery", tag = "Start \` Learning Today";
var s = `${name}, tag line is ${tag}`
console.log(s);
var s2 = `Uno
Dos
Tres`
console.log(s2);
*/

//Promises ------------------------------------------------------------
/*
// with ajax
$.ajax("http://services.odata.org/v4/Northwind/Northwind.svc/",{
	success: function(data){
		console.log(data.value);
	},
	error:function(){
		console.log("failed to fetch data");
	}
});
// with Out ajax
fetch("http://services.odata.org/v4/Northwind/Northwind.svc/",{
	method: 'get'
	}).then(function(response){
		return response.json();
	}).then(function(data){
		console.log(data.value);
	}).catch(function(){
		console.log("failed to fetch data");
	});
// Promise
var promise = new Promise(function(resolve, reject){
	$.ajax("http://services.odata.org/v4/Northwind/Northwind.svc/",{
		success: function(data){
			resolve(data);
		},
		error:function(){
			reject("Error");
		}
	});
});

promise.then(function(result){
	console.log(result);
}, function(err) {
	console.log(err);
});

//Promise.all([promise])
//Promise.race([promise])
//Promise.reject([promise])
//Promise.resolve([promise])
Promise.all([promise, obj]).then(function(results){
	//results[0];
	//results[1];
	}, function(){
});
*/

//Classes ------------------------------------------------------------
/*
"use strict";
class Shape{
	constructor(a,b){
		this.a = a;
		this.b = b;
	}

	render(){
		console.log("Rendering Shape");
	}
}

class Circle extends Shape{
	constructor(a,b,radius){
		super(a,b);
		this.radius = radius;
	}
	static get pi(){
		return 3.14;
	}
	get area(){
		return Circle.pi * this.radius * this.radius;
	}
	render(){
		console.log("Rendering Circle");
	}
}

var obj = new Circle(0,0,20);
console.log("Length: " + obj.a);
obj.a = 40;
console.log("Length: " + obj.a);

console.log("Breadth: " + obj.b);
console.log("Radius: " + obj.radius);

console.log("Pi: " + Circle.pi);
console.log("Area of Circle: " + obj.area);
obj.render();
*/

//Using Export--------------------------------------------------------------------
/*
// module "my-module.js"
function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
var graph = {
    options:{
        color:'white',
        thickness:'2px'
    },
    draw: function(){
        console.log('From graph draw function');
    }
}
export { cube, foo, graph };
*/

//Modules ------------------------------------------------------------
/*
//https://babeljs.io/docs/setup/

class Maths{
	rectArea(x,y){
		return x*y;
	}
}

module.exports = Maths;
*/

//New Built-In Methods ------------------------------------------------------------
/*
"use strict";
//repeating strings
console.log("SkillBakery ".repeat(2));

//checking containment
console.log("World".includes("rl"));
console.log("SkillBakery ES6".startsWith("Skill"));
console.log("SkillBakery ES6".endsWith("Bakery"));

//unicode point escapes
console.log('\uD83D\uDE80');

//iteration over strings
 for (var ch of 'SkillBakery') {
        console.log(ch);
 }
console.log("...........................");

//Number Truncation
//Truncate a floating point number to its integral part, 
//completely dropping the fractional part.
console.log("---------Number Truncation-------------");
console.log(Math.trunc(39.7)); // 39
console.log(Math.trunc( 0.5)); // 0
console.log(Math.trunc(-0.3)); // -0

console.log("---------Number Type Checking-----------");
//Number Type Checking
//New functions for checking for non-numbers and finite numbers.
console.log(Number.isNaN(45) === false);
console.log(Number.isNaN(NaN) === true);

console.log(Number.isFinite(Infinity) === false);
console.log(Number.isFinite(-Infinity) === false);
console.log(Number.isFinite(NaN) === false);
console.log(Number.isFinite(156) === true);

//Sign Determination
//Now we can determine the sign of a number including 
//special cases of signed zero and non-number
console.log("---------Sign Determination-----------");
console.log(Math.sign(10));  // 1
console.log(Math.sign(0));   // 0
console.log(Math.sign(-0));  // -0
console.log(Math.sign(-10)); // -1
console.log(Math.sign(NaN)); // NaN

//Number Safety Checking
//Checking whether an integer number is in the safe range, i.e., 
//it is correctly represented by JavaScript.
console.log("---------Number Safety Checking-----------");
console.log(Number.isSafeInteger(42) === true); //true
console.log(Number.isSafeInteger(90081992547408822) === false); //true
console.log("...........................");

//New function for assigning enumerable properties of one or more 
//source objects onto a destination object.

var destination = { start: 0 };
var source_mid = { interval: 10, duration: 20 };
var source_end = { distance: 40 };

Object.assign(destination, source_mid, source_end);
source_mid.interval = 30;

console.log(destination);
console.log(source_mid.interval);
*/

//Extended Literals ------------------------------------------------------------
/*
console.log(parseInt("00110010",2)); //50
console.log(0b00110010); // 50
console.log(parseInt("062", 8)); // 50
console.log(0062); // 50
*/

//Meta Programming ------------------------------------------------------------

var course = new Proxy({}, {

    get: function (target, name, receiver) {
        console.log("Property " + name);
        return name;
    },
    set: function (target, name, value, receiver) {
        console.log('Assignment on Property ' + name);
        return value;
    }

});//first parameter is target, second is the handler

course.name = "ES6 - The Next Level";
course.publisher = "SkillBakery";

console.log(course.publisher);
console.log(course.name);
console.log("...........................");

// => js/proxy.js

console.log("...........................");

// => js/reflect.js
