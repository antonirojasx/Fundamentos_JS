// operadores matematicos
let a, b;
let c, d;
let suma, resta, multiplicacion, division, modulo, potencia;
// Asignar valores a las variables
a= parseFloat(prompt("Ingrese el primer número:")); //parseFloat es una función que convierte una cadena de texto en un número decimal. En este caso, se utiliza para convertir el valor ingresado por el usuario a través del prompt en un número que se pueda utilizar en las operaciones matemáticas.
b= parseFloat(prompt("Ingrese el segundo número:"));
// resultados de las operacones matematicas
suma = parseFloat(a) + parseFloat(b);
resta = a - b;
multiplicacion = a * b;
division = a / b;
modulo = a % b;
potencia = a ** b;
document.write("Suma: " + suma + "<br>", "Resta: " + resta + "<br>", "Multiplicación: " + multiplicacion + "<br>", "División: " + division + "<br>", "Módulo: " + modulo, "<br>", "Potencia: " + potencia);
 