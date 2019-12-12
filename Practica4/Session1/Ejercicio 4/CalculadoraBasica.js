const operacion = {
    SUMAR: 1,
    RESTAR: 2,
    MULTIPLICAR: 3,
    DIVIDIR: 4,
    PORTENCIA: 5
}

class Calculadora{

    constructor(){
        this.num1 = 0;
        this.num2 = 0;
        this.operador;
    }

    //Coloca el numero presionado
    ponerNumero(numero){
        if(this.num1 == 0 && this.num1 !== '0.')
            this.num1 = numero;
        else
            this.num1+= numero;
        this.actualizarValor();
    }

    //Coloca el numero presionado
    ponerComa(){
        if(this.num1 == 0)
            this.num1 = '0.';
        else if(this.num1.indexOf('.') == -1)//Comprobamos que no exista una coma ya
            this.num1 += '.';
        this.actualizarValor();
    }
    //Reinicia la calculadora
    reset(){
        this.num1 = 0;
        this.num2 = 0;
        this.actualizarValor();
    }

    borrar(){
        this.num1 = 0;
        this.actualizarValor();
    }
    
//Recibimos la operacion segun el boton pulsado
    operar(operacion){
        if (this.num1 == 0)
        this.num1 = parseFloat(document.getElementById("valor").value);
        
        this.num2 = parseFloat(this.num1);
        this.num1 = 0;
        this.operador = operacion;
    }


    //Calculamos el resultado en base a la operacion seleccionada
    calcular(){
        this.num1 = parseFloat(this.num1);
        switch(this.operador){
            case operacion.SUMAR:
                this.num1+=this.num2;
                break;
            case operacion.RESTAR:
                this.num1 = this.num2-this.num1;
                break;
            case operacion.MULTIPLICAR:
                this.num1*=this.num2;
                break;
            case operacion.DIVIDIR:
                this.num1 = (this.num2/this.num1);
                break;
            case operacion.PORTENCIA:
                this.num1 = Math.pow(this.num2,this.num1);
            break;
        }
        this.actualizarValor();
        this.num2 = parseFloat(this.num1);
        this.num1 = 0;
    }


    //actualiza la pantalla de valor cada vez que se realiza un cambio
    actualizarValor(){
        document.getElementById("valor").value = this.num1;
    }
}

calculadora = new Calculadora();