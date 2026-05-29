/*
var se utiliza para declarar variables globales o locales, y se puede reasignar su valor posteriormente.
let se utiliza para declarar variables que pueden ser reasignadas, pero no pueden ser redeclaradas dentro del mismo ámbito.
const se utiliza para declarar constantes, es decir, variables cuyo valor no puede ser reasignado después de su inicialización.

*/
var nombre = "nombre";  
nombre= "Gonzalo"; // Se puede reasignar el valor de la variable 'nombre' porque fue declarada con 'var'
var nombre = "otro nombre"; // Se puede redeclarar la variable 'nombre' porque fue declarada con 'var'
otroNombre = "perez"; // Se puede declarar una variable con 'var', 'let' o 'const', y es recomendable
console.log(nombre); // Imprime "otro nombre" en la consola, ya que la variable 'nombre' fue redeclarada y reasignada
console.log(otroNombre); // Imprime "perez" en la consola, ya que la variable 'otroNombre' fue declarada sin 'var', 'let' o 'const', lo que la convierte en una variable global y es una mala práctica
let edad = 30;
edad = 31; // Se puede reasignar el valor de la variable 'edad' porque fue declarada con 'let'
// let edad = 32; // No se puede redeclarar la variable 'edad' porque fue declarada con 'let', lo que generaría un error
console.log(edad); // Imprime "31" en la consola, ya que la variable 'edad' fue reasignada a 31 después de su declaración inicial