function changeCity(){
    $(document).ready(function(){
        var city = document.getElementById("list").value;   
        $.ajax({
            type: "POST",
            url: "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&mode=xml&units=metric&appid=833de617f5013a98440b9df40d7811df",
            dataType: "xml",
            success:function(data){
                console.log(data)
                  $("#ciudad").text("Ciudad: " + city);
                  $("#tiempo").text("Tiempo: " + data.getElementsByTagName("weather")[0].getAttribute("value"));
                  $("#temperatura").text("Temperatura: " + data.getElementsByTagName("temperature")[0].getAttribute("value"));
                  $("#temperaturaMin").text("Temperatura minima: " + data.getElementsByTagName("temperature")[0].getAttribute("min"));
                  $("#temperaturaMax").text("Temperatura maxima: " + data.getElementsByTagName("temperature")[0].getAttribute("max"));
                  $("#presion").text("Presion: " + data.getElementsByTagName("pressure")[0].getAttribute("value"));
                  $("#humedad").text("Humedad: " + data.getElementsByTagName("humidity")[0].getAttribute("value"));
                  $("#vientoVel").text("Velocidad del viento: " + data.getElementsByTagName("wind")[0].getElementsByTagName("speed")[0].getAttribute("value"));
                  $("#icon").attr("src", "http://openweathermap.org/img/wn/"+data.getElementsByTagName("weather")[0].getAttribute("icon")+"@2x.png");
            }
        })
    });
}