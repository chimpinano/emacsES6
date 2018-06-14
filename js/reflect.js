
var dynamic = { number: 1 };

Reflect.defineProperty(dynamic, "student", { name: "john" });
dynamic[Symbol("price")] = 49;

console.log(Reflect.ownKeys(dynamic));

var course = new Proxy({}, {

    get: function (target, name, receiver) {
        console.log("Property " + name);
        return Reflect.get(target,name,receiver);
    },
    set: function (target, name, value, receiver) {
        console.log('Assignment on Property ' + name);
        return Reflect.set(target,name,value,receiver);
    }

});//first parameter is target, second is the handler

course.name = "ES6 - The Next Level";
course.publisher = "SkillBakery";

console.log(course.publisher);
console.log(course.name);

