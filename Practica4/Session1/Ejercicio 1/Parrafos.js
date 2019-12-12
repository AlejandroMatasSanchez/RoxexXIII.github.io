for (key in infoCabecera) {
    if (infoCabecera.hasOwnProperty(key)) {
        element = infoCabecera[key];
        if(typeof element  !== "function")
            document.write("<p>"+element+"</p>")
    }
}