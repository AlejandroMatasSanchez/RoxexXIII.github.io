function getTop(){
    $(document).ready(function(){
        document.body.innerHTML = "";
        document.body.innerHTML = "<h1>Top 10 juegos en Twitch.tv</h1>";
        document.body.innerHTML += "<button onClick='getTop()'>Actualizar</button>" 

        $.ajax({
            type: "GET",
            url: "https://api.twitch.tv/helix/games/top",
            beforeSend: function(xhr){
                xhr.setRequestHeader('Client-ID', 'prkx46hxxar4n30qg4lkzmgoh91iig');
            },
            dataType: "json",  
            success:function(data){
                console.log(data);
                for(var i = 1; i<11; i++){
                    
                    //Create title
                    var newTitulo = document.createElement("h2");
                    newTitulo.innerHTML = data.data[i-1].name;
                    $(newTitulo).appendTo("body");
                    
                    //Create boxart
                    var boxart = data.data[i-1].box_art_url;
                    boxart = boxart.replace("{width}", "300");
                    boxart = boxart.replace("{height}", "450");
                    var newBoxArt = document.createElement("img");
                    
                    $('<img/>').attr({
                        src: boxart,
                        alt: "Caratula del juego"
                    }).appendTo("body");

                    $('<br/>').appendTo("body");
                
                    //Create link
                    $('<a/>').attr({
                        href: "https://www.twitch.tv/directory/game/" + data.data[i-1].name
                    }).html("Abrir en Twitch.tv").appendTo("body");

                }
            },
            error:function(){
                alert("Fallaste tontin")
            }
            
    });
});
}