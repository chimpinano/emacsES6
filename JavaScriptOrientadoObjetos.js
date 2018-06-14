//http://www.cristalab.com/tutoriales/programacion-orientada-a-objetos-con-ecmascript-6-clases-c114380l/

// Crear las "clases"

class Persona{
	constructor(nombre, edad){
		this.nombre = nombre;
		this.edad = edad;
	}
	presentarse(){
		return 'Hola me llamo ' + this.nombre + ' y tengo ' + this.edad + ' años';
	}
}

//var persona1 = new Persona("Andres", 27);
//console.log(persona1.presentarse());


// Extender clases
// Como se puede ver la sintaxis es: indicar el nombre de la nueva clase y que extiende a otra clase. Luego si se desea extender algún método ya existente como el constructor se reciben los mismo parámetros que en la clase padre más los nuevos y luego se usa la función super().

class Desarrollador extends Persona {
	constructor(nombre, edad, cargo) {
		super(nombre, edad);
		this.cargo = cargo;
	}

	presentarse() {
		return super.presentarse() + ' y soy desarrollador ' + this.cargo;
	}
}

var Andres = new Desarrollador('Andres', 22, 'Backend');
console.log(Andres.presentarse());

// Como se puede ver la sintaxis es: indicar el nombre de la nueva clase y que extiende a otra clase. Luego si se desea extender algún 
// método ya existente como el constructor se reciben los mismo parámetros que en la clase padre más los nuevos y luego se usa la 
// función super().

// Getters y Setters

// En algunos lenguajes de programación (como Java) existen los getters y setters, que son lo que se llama mutator method, estos métodos 
// que se usan para controlar variables internas de un objeto (propiedades). Para usarlos simplemente se agrega get o set delante del 
// nombre del método de la siguiente forma:
console.log('--------------------------');

class Personas {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
	get verNombre(){
		return this.nombre;
	}
	set nuevoNombre(nuevo){
		this.nombre = nuevo.toUpperCase();
	}
}

var Sergio = new Personas('Sergio', 22);
console.log(Sergio.verNombre); // devuelve Sergio
Sergio.nuevoNombre = 'Daniel'; // cambia el valor de nombre a Daniel
console.log(Sergio.verNombre); // devuelve Daniel

// Los generadores de ES6

function* quips() {
   yield "hello " + name + "!";
   yield "i hope you are enjoying the blog posts";
  if (name.startsWith("X")) {
     yield "it's cool how your name starts with X, " + name;
  }
   yield "see you later!";

	for (var index = 0; index < 5; index++) {
		yield "VALUE " + index;
	}   
}

var iter = quips("jorendorff");
/*console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())// for
console.log(iter.next())*/

function* range(start, stop){
	for(var i = start; i < stop; i++){
		yield i;
	}
}

var iter = range(0, 2);
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

// Ejemplo generador de ids
function* generadorIds(){
    var index = 0;
    while(true) {
        yield index++;
    }
}

var gen = generadorIds();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// continuar hasta el infinito...

//*********************************************************************************************
//http://blog.codeando.org/articulos/clases-herencia-y-objetos-en-es6-javascript.html

//	Clases, herencia y objetos en es6 (javascript)

//*********************************************************************************************

//https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos

//JavaScriptOrientadoObjetos.js

/* La propiedad (atributo del objeto)
function Persona(primerNombre){
	this.primerNombre = primerNombre;
	console.log('Una instancia de Persona');
}
var persona1 = new Persona("Alicia");
console.log("persona1 es " + persona1.primerNombre);
*/

/* Los métodos
function Persona(primerNombre){
	this.primerNombre = primerNombre;
}
Persona.prototype.diHola = function(){
	console.log("Hola, Soy " + this.primerNombre);
}
var persona1 = new Persona("Alicia");
// Llamadas al método diHola de la clase Persona.
persona1.diHola();
*/

/* Los métodos
function Persona(primerNombre){
	this.primerNombre = primerNombre;
}
Persona.prototype.diHola = function(){
	console.log("Hola, Soy " + this.primerNombre);
}
var persona1 = new Persona("Alicia");
var funcionSaludar = persona1.diHola;

persona1.diHola();
funcionSaludar();
funcionSaludar.call(persona1);//de forma explicita
*/

/*
La propiedad de prototype de JavaScript le permite agregar nuevas propiedades a los constructores de objetos:

La propiedad del prototype de JavaScript también le permite agregar nuevos métodos constructores de objetos:

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
*/

/* Herencia
La herencia es una manera de crear una clase como una versión especializada de una o más 
clases (JavaScript sólo permite herencia simple). La clase especializada comúnmente se 
llama hija o secundaria, y la otra clase se le llama padre o primaria. En JavaScript la 
herencia se logra mediante la asignación de una instancia de la clase primaria a  la clase 
secundaria, y luego se hace la especialización. 

En el siguiente ejemplo definimos la clase Estudiante como una clase secundaria de Persona. 
Luego redefinimos el método diHola() y agregamos el método diAdios().


function Persona(primerNombre){
	this.primerNombre = primerNombre;
};
// Agregamos un par de métodos a Persona.prototype
Persona.prototype.caminar = function(){
	console.log("Estoy caminando");
};
Persona.prototype.diHola = function(){
	console.log("Hola, Soy " + this.primerNombre);
};
// Definimos el constructor Estudiante
function Estudiante(primerNombre, asignatura){
  // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
  // ha establecido correctamente durante la llamada
  Persona.call(this, primerNombre);
  //Inicializamos las propiedades específicas de Estudiante
  this.asignatura = asignatura;
};
// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
// Nota: Un error común es utilizar "new Persona()" para crear Estudiante.prototype 
// Esto es incorrecto por varias razones, y no menos importante que no le estamos pasando nada
// a Persona desde el argumento "primerNombre". El lugar correcto para llamar a Persona
// es arriba, donde llamamos a Estudiante.
Estudiante.prototype = Object.create(Persona.prototype);
// Establecer la propiedad "constructor" para referencias a Estudiante
Estudiante.prototype.constructor = Estudiante;
// Reemplazar el método "diHola"
Estudiante.prototype.diHola = function(){
	console.log("Hola, Soy " + this.primerNombre + ". Estoy estudiando " + this.asignatura + ".");
}
// Agregamos el método "diAdios"
Estudiante.prototype.diAdios = function(){
	console.log("Adios!");
}
var estudiante1 = new Estudiante("Carolina", "Física Aplicada");
estudiante1.diHola();    // muestra "Hola, Soy Carolina. Estoy estudianto Física Aplicada."
estudiante1.caminar();   // muestra "Estoy caminando!"
estudiante1.diAdios();   // muestra "¡ Adios !"

// Comprobamos que las instancias funcionan correctamente
console.log(estudiante1 instanceof Persona);      // devuelve true
console.log(estudiante1 instanceof Estudiante);   // devuelve true
*/

/*
Encapsulación

En el ejemplo anterior, Estudiante no tiene que saber cómo se aplica el método caminar() de la clase Persona, pero, 
sin embargo, puede utilizar ese método. La clase Estudiante no tiene que definir explícitamente ese método, a menos 
que queramos cambiarlo. Esto se denomina la encapsulación, por medio de la cual cada clase hereda los métodos de su 
elemento primario y sólo tiene que definir las cosas que desea cambiar.
*/

/*
Abstracción

Un mecanismo que permite modelar la parte actual del problema de trabajo. Esto se puede lograr por herencia 
(especialización) o por composición. JavaScript logra la especialización por herencia y por composición al permitir que 
las instancias de clases sean los valores de los atributos de otros objetos.

La clase Function de JavaScript hereda de la clase de Object (esto demuestra la especialización del modelo) y la 
propiedad Function.prototype es un ejemplo de Objeto (esto demuestra la composición)

var foo = function() {};
console.log( 'foo es una Función: ' + (foo instanceof Function) );
console.log( 'foo.prototype es un Objeto: ' + (foo.prototype instanceof Object) );
*/

/*
Polimorfismo

Al igual que todos los métodos y propiedades están definidas dentro de la propiedad prototipo, las diferentes clases 
pueden definir métodos con el mismo nombre. Los métodos están en el ámbito de la clase en que están definidos. 
Esto sólo es verdadero cuando las dos clases no tienen una relación primario-secundario (cuando uno no hereda del 
otro en una cadena de herencia).
*/






