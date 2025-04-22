/*Procesar los datos del formulario mediante una funcion*/
function procesarDatos(){
    // Obtener los valores de los campos del formulario
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    //Imprimo el dato obtenido en el formulario
    document.writeln("La nota ingresada es: " + nota1 + "<br>");
    document.writeln("La nota ingresada es: " + nota2 + "<br>");

    
}

function aproImpar(){

    var numero = document.getElementById("numero").value;
    var resultado = numero; // Variable para almacenar el resultado
    if (numero % 2 == 0){
        resultado = "El número es par";
    } else {
        resultado = "El número es impar";
    }
    document.writeln("El resultado es: " + resultado + "<br>");
}

function numMayor(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
}

//crear un programa que se ingrese las 5 notas del primer parcial, verificar si el promedio 
// es mayor o igual a 7 pasa de anio, si el promedio es igual o mayor 3.5 
// y menor a 7 queda a suspenso y si es menor a 3 pierde el semestre 
// verificar que las notas ingresadas esten en un rango dde 0 a 10
 
