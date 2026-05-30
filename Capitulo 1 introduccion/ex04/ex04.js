let nombre, edad, direccion, telefono, correo;

//prompt("Ingrese su nombre:");
//prompt("Ingrese su edad:");
//prompt("Ingrese su dirección:");
//prompt("Ingrese su teléfono:");
//prompt("Ingrese su correo electrónico:");

nombre= prompt("Ingrese su nombre:"); //prompt es una función que muestra un cuadro de diálogo que solicita al usuario que ingrese un valor. El valor ingresado se asigna a la variable correspondiente. En este caso, se solicita al usuario que ingrese su nombre, edad, dirección, teléfono y correo electrónico, y cada uno de estos valores se almacena en las variables respectivas.
edad= prompt("Ingrese su edad:");
direccion= prompt("Ingrese su dirección:");
telefono= prompt("Ingrese su teléfono:");
correo= prompt("Ingrese su correo electrónico:");
document.write("Nombre: " + nombre + "<br>", "Edad: " + edad + "<br>", "Dirección: " + direccion + "<br>", "Teléfono: " + telefono + "<br>", "Correo electrónico: " + correo);
  