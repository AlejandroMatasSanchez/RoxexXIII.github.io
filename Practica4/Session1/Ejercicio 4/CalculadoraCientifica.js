const opCientifica = {
    SENO: 6,
    COSENO: 7,
    TANGENTE: 8,
    LOGARITMO: 9,
    RAIZ: 10,
    COSECANTE: 11,
    SECANTE: 12,
    COTANGENTE: 13
}

class CalculadoraCientifica extends Calculadora{
    constructor(){
        super();
    }

    operarCientifico(operacion){
        if (this.num1 == 0)
            this.num1 = parseFloat(document.getElementById("valor").value);
        
        this.operador = operacion;
        this.calcularCientifico();
    }

    calcularCientifico(){
        switch(this.operador){
            case opCientifica.SENO:
                this.num1=Math.sin(this.num1);
                break;
            case opCientifica.COSENO:
                this.num1 = Math.cos(this.num1);
                break;
            case opCientifica.TANGENTE:
                this.num1 = Math.tan(this.num1);
                break;
            case opCientifica.LOGARITMO:
                this.num1 = Math.log(this.num1);
                break;
            case opCientifica.RAIZ:
                this.num1 = Math.sqrt(this.num1);
                break;
            case opCientifica.SECANTE:
                this.num1=(1/Math.sin(this.num1));
                break;
            case opCientifica.COSECANTE:
                this.num1 = (1/Math.cos(this.num1));
                break;
            case opCientifica.COTANGENTE:
                this.num1 = (1/Math.tan(this.num1));
                break;
           }
        this.actualizarValor();
        this.num2 = parseFloat(this.num1);
        this.num1 = 0;
    }

}

calculadoraCientifica = new CalculadoraCientifica();