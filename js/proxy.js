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

// An object with an accessor property and a method
var o = { get property() { 
        return map.get(this); 
    }, 
    method: function() { 
        return map.get(this); 
        } 
};

var map = new WeakMap(); 
map.set(o, "SkillBakery");

// Both the getter function and method are invoked on o 
console.log(o.property); // prints "SkillBakery" 
console.log(o.method()); // prints "SkillBakery"

// This works for inherited properties and methods, too 
var p = Object.create(o); 
map.set(p, "ES6 Next Level"); 
console.log(p.property); // prints "ES6 Next Level" 
console.log(p.method()); // same as above

// When we create a proxy with a forwarding handler
//the this value is different in the two cases

var handler = { target: o, get: function(receiver, name) {
     return this.target[name]; // Same as Proxy.Handler.prototype.get 
    } 
 }

var q = Proxy.create(handler); 
map.set(q, "Receiver"); 
console.log(q.property); // Prints "SkillBakery" 
console.log(q.method()); // Prints "Receiver"

// In order to invoke the getter function on the same object as the method
// we have to go to more trouble and use code that is probably much slower. 
// And, we need that first receiver argument.

var handler2 = { target: o, get: function(receiver, name) { 
    var d = Object.getOwnPropertyDescriptor(this.target, name); 
    if (d.value) 
        return d.value; 
    else 
        return d.get.call(receiver);
    } 
};

var r = Proxy.create(handler2); 
map.set(r, "Example"); 
console.log(r.property); // Prints "Example" 
console.log(r.method()); // Prints "Example"

