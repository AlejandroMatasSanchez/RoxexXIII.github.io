const operacion = {
    SUMAR: 1,
    RESTAR: 2,
    MULTIPLICAR: 3,
    DIVIDIR: 4,
    PORTENCIA: 5
}

var num2 = 0;
var num1 = 0;  
var operador;
var canOperate = false;

//Coloca el numero presionado
function ponerNumero(numero){
    if(num2 == 0 && num2 !== '0.')
        num2 = numero;
    else
        num2+= numero;
    actualizarValor2();
}

function moverNumero(){
    if(num1==0){
        num1 = num2;
        num2 = 0;
        actualizarValor1()
        actualizarValor2()
    }
}

//Coloca el numero presionado
function ponerComa(){
    if(num2 == 0)
        num2 = '0.';
    else if(num2.indexOf('.') == -1)//Comprobamos que no exista una coma ya
        num2 += '.';
    actualizarValor2();
}

//Reinicia la calculadora
function reset(){
    num2 = 0;
    num1 = 0;
    canOperate = false;
    actualizarValor1();
    actualizarValor2();
}

function borrar(){
    num2 = 0;
    actualizarValor2();
}

//Recibimos la operacion segun el boton pulsado
function operar(operacion){
    if(canOperate){
        operador = operacion;
        calcular();
    }
}

//Calculamos el resultado en base a la operacion seleccionada
function calcular(){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(operador){
        case operacion.SUMAR:
            num1+=num2;
            break;
        case operacion.RESTAR:
            num1 = num1-num2;
            break;
        case operacion.MULTIPLICAR:
            num1*=num2;
            break;
        case operacion.DIVIDIR:
            num1 = (num1/num2);
            break;
        case operacion.PORTENCIA:
            num1 = Math.pow(num1,num2);
        break;
    }
    actualizarValor1();
    num2 = 0;
    actualizarValor2();
}

//actualiza la pantalla de valor cada vez que se realiza un cambio
function actualizarValor1(){
    canOperate = true;
    document.getElementById("valor1").value = num1;
}

function actualizarValor2(){
    document.getElementById("valor2").value = num2;
}