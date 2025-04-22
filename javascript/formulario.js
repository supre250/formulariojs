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

// Crear un programa en js donde se ingrese las cinco notas del primer parcial, verificar si el promedio es mayor o igual a 7 pasa de año
// Si el promedio es mayor o igual a 3.5 y menor a 7 se queda suspenso y si el promedio es menor a 3.5 pierde el semestre
// Verficar que las notas ingresadas esten en un rango de 0 a 10

function promedioNotas(){
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
    var nota4 = Number(document.getElementById("nota4").value);
    var nota5 = Number(document.getElementById("nota5").value);

    // Verificar que las notas estén en el rango de 0 a 10
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10 || nota5 < 0 || nota5 > 10) {
        document.writeln("Las notas deben estar en el rango de 0 a 10.")
        return;
    }
    // Calcular el promedio
    var promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    // Verificar el estado del estudiante según el promedio
    if (promedio >= 7) {
        document.writeln("El estudiante pasa de año con un promedio de: " + promedio);
    } else if (promedio >= 3.5) {
        document.writeln("El estudiante se queda en suspenso con un promedio de:" + promedio);
    } else {
        document.writeln("El estudiante pierde el semestre con un promedio de:" + promedio)
    } 
}
 
