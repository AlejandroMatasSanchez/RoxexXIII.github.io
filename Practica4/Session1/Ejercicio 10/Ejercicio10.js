function changeCoin(){
    $(document).ready(function(){
        var euros = document.getElementById("euros").value;
        $.ajax({
            type: "GET",
            url: "https://api.exchangeratesapi.io/latest",
            dataType: "json",
            success:function(data){
                console.log(data)
                $("#dolares").text("Dolar Estadounidense: " + data.rates.USD*euros);
                $("#libras").text("Libra esterlina: " + data.rates.GBP*euros);
                $("#yenes").text("Yen japones: " + data.rates.JPY*euros);
                $("#rupias").text("Rupia india: " + data.rates.INR*euros);
                $("#pesos").text("Peso filipino: " + data.rates.PHP*euros);
            }
        })
    });
}