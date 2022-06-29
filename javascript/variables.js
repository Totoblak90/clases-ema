/**
 * Variable:
 *  Un espacio de código donde yo guardo un dato.
 *  const (constante); esta variable tiene un valor definido y no lo puedo cambiar
 *  let; es una variable que puede cambiar el dato que tiene guardado;
 *  var;
 */
const nombre = 'Ema';
let nombre2 = 'Ema';
var nombre3 = 'Perro'




// nombre = 'Tobias' No se puede reasignarle un valor a una constante;
nombre2 = 'Tobias' // Como es una variable creada con "let" si le puedo cambiar el valor;

/**
 * Partes de una variable
 * Declaración de una variable (const, let o var)
 * Nombre de la variable (una palabra con la que yo me refiero/identifico a esa variable). aceptan letras, números y guíones bajos
 * Valor (Lo que está despues del igual y es el valor que yo le asigno a esa variable. Puede ser cualquier tipo de dato que acepte javascript)
 */

 const variableConOtraVariableAdentro = nombre;
 const numero = 1;
 const string = 'Un texto';
 const boolean = true;
 const array = ['Hola', 1, true];
 const object = {
    nombre: 'Ema'
 }
 const funcion = function(saludo) {
    console.log(saludo)
 }

 const texto = 'alkdjsalksjdlksajdlkasjdkljaskdjaksjdoiewuroiquralkdjsalksjdlksajdlkasjdkljaskdjaksjdoiewuroiquralkdjsalksjdlksajdlkasjdkljaskdjaksjdoiewuroiquralkdjsalksjdlksajdlkasjdkljaskdjaksjdoiewuroiquralkdjsalksjdlksajdlkasjdkljaskdjaksjdoiewuroiquralkdjsalksjdlksajdlkasjdkljaskdjaksjdoiewuroiquralkdjsalksjdlksajdlkasjdkljaskdjaksjdoiewuroiquralkdjsalksjdlksajdlkasjdkljaskdjaksjdoiewuroiquralkdjsalksjdlksajdlkasjdkljaskdjaksjdoiewuroiqur';
const alumnosFacultad = [
    {
        nombre: 'Marcos',
        edad: 25,
    },
    {
        nombre: 'Juana',
        edad: 19,
    },    {
        nombre: 'Ema',
        edad: 19,
    },    {
        nombre: 'Tobias',
        edad: 32,
    },    {
        nombre: 'Juan',
        edad: 31,
    },    {
        nombre: 'Mariana',
        edad: 26,
    },
]

console.log(alumnosFacultad)