function changeCity(){
    $(document).ready(function(){
        var city = document.getElementById("list").value;   
        $.ajax({
            type: "POST",
            url: "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=833de617f5013a98440b9df40d7811df",
            dataType: "json",
            success:function(data){
                console.log(data)
                  $("#ciudad").text("Ciudad: " + city);
                  $("#tiempo").text("Tiempo: " + data.weather[0].main);
                  $("#descripcion").text("Descripcion: " + data.weather[0].description);
                  $("#temperatura").text("Temperatura: " + data.main.temp);
                  $("#temperaturaMin").text("Temperatura minima: " + data.main.temp_min);
                  $("#temperaturaMax").text("Temperatura maxima: " + data.main.temp_max);
                  $("#presion").text("Presion: " + data.main.pressure);
                  $("#humedad").text("Humedad: " + data.main.humidity);
                  $("#vientoVel").text("Velocidad del viento: " + data.wind.speed);
                  $("#icon").attr("src", "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");
            }
        })
    });
}

function show(data){
    
}