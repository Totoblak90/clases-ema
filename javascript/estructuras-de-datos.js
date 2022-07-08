// Tipos de datos primitivas
1; //Number
true; //Boolean
false; // Boolean
'Hola'; // String (Cadena de texto)
undefined; // Undefined (dato no definido)
null; // Null (valor nulo/ sin valor)

// Estructuras de datos de referencia
[]; // Listas;
{}; // Objetos;

// ---------------------------------------------------------------------------------------------------------------------------------------
// Numbers
// ---------------------------------------------------------------------------------------------------------------------------------------

// Operaciones;
// Sumar, restar, multiplicar, dividir, ver el su módulo y comparar (<, >, <=, >=, ==);
console.log(
    // Operaciones matemáticas
    1 + 2,
    3 - 5,
    3 * 6,
    9 / 3,
    // Operaciones de comparación
    3 > 5,
    9 < 81,
    5 === 5,
    100 === 23,
    3 >= 2,
    105 <= 12,
    5 === '5',
    5 == '5'
)

// Cuando hay un solo igual se llama asignación;
const resultado1 = 500;
const resultado2 = 300;

if (resultado1 > resultado2) {
    console.log('Gano el jugador uno')
}

// ---------------------------------------------------------------------------------------------------------------------------------------
// End Numbers
// ---------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------
// STRINGS (TEXTO)
// ---------------------------------------------------------------------------------------------------------------------------------------
const unString = "Soy un texto. 12387129837 +968686";

const unaOracionConcatenada = "Esto" + " " + "es" + " " + "un" + " " + "string" + " " + "concatenado";
console.log(unaOracionConcatenada)

if ("Hola" === "Hola") {
    console.log('Saludo')
}

console.log("Ema".length);
console.log(unaOracionConcatenada.length);

if ("ema".length < unaOracionConcatenada.length) {
    console.log('hace algo')
}

const subString = unaOracionConcatenada.substring(18, unaOracionConcatenada.length);
console.log(subString)

// ---------------------------------------------------------------------------------------------------------------------------------------
// END STRINGS (TEXTO)
// ---------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------
// Listas (Arrays)
// ---------------------------------------------------------------------------------------------------------------------------------------
const listaDeSuper =
    // 
    ["Tomates", "Jamón", "Agua", 1, true];
//      0          1        2

// console.log(listaDeSuper[1])

// Agrega un valor al final
// listaDeSuper.push('Queso');
// console.log(listaDeSuper);
// Borra el último valor
// listaDeSuper.pop();
// listaDeSuper.pop();
// console.log(listaDeSuper);

// Loop (recorrer un dato);
for (let i = 0; i < listaDeSuper.length; i++) {
    listaDeSuper[i] = listaDeSuper[i] + " comprado";
}

console.log(listaDeSuper)

// ---------------------------------------------------------------------------------------------------------------------------------------
// END Listas (Arrays)
// ---------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------
// Objetos
// ---------------------------------------------------------------------------------------------------------------------------------------
const Estudiante = {
    nombre: 'Tobias',
    apellido: 'Blaksley',
    edad: 32,
    dni: 35227943,
    obj2: {
        lista: [""]
    },
    boolean: true,
    sinDefinir: undefined
}

console.log(
    Estudiante.nombre, Estudiante.edad, Estudiante.dni
)

// ---------------------------------------------------------------------------------------------------------------------------------------
// END Objetos
// ---------------------------------------------------------------------------------------------------------------------------------------