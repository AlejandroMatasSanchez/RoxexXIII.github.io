const elementos = {
    P: 1,
    H1: 2,
    H2: 3,
    H3: 4,
    TABLA: 5
}


class MostrarOcultar{

    ocultar(elemento){
        $(document).ready(function(){
            $(elemento).hide();       
        });
    }

    mostrar(elemento){
        $(document).ready(function(){
            $(elemento).show();       
        });
    }

    cambiar(elemento){
        $(document).ready(function(){
            $(elemento).text("He sido cambiado");
        });
    }

    crear(position, elemento){
        var newEl = document.createElement("p");
        newEl.innerHTML = "Me has añadido!";
        if(position == "ANTES"){
            $(document).ready(function(){
                $(elemento).before(newEl);
            });
        }else{
            $(document).ready(function(){
                $(elemento).after(newEl);
            });
        }
    }

    borrar(elemento){
        $(document).ready(function(){
            $(elemento).remove();
        });
    }

    mostrarInformacion(){
        var elements = document.body.getElementsByTagName("*");
        alert(elements.length);
        for(var i = 0; i < elements.length; i++){
            var newEl = document.createElement("p");
            newEl.innerHTML = elements[i].nodeValue;
            $(document).ready(function(){
                $("p").after(newEl);
            });
        }
    }
}


util = new MostrarOcultar();