class FileReader{
    constructor(){

    }

    readFile(){
        document.getElementById("informacion").innerHTML="";
        var file = document.getElementById("archivos").files[0];   
        console.log(file);  
        var size = document.createElement("p");
        var type = document.createElement("p");
        size.innerHTML = "Tamaño del archivo: " + (file.size/1000) + " KB";
        type.innerHTML = "Tipo del archivo: "+ file.type;
        $(size).appendTo("#informacion");
        $(type).appendTo("#informacion");

    }
}

var fileReader = new FileReader();