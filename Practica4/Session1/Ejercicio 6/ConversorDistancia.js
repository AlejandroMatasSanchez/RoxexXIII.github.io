var metros = 0;
var pies = 0;
var pulgadas = 0;
var yardas = 0;

function lengthConverter(distId, valNum) {
    switch (distId){
        case "metros":
            metros = valNum;
            pies = metros*3.2808;
            pulgadas = metros*39.370;
            yardas = metros*1.0936;
            break;
        case "pies":
            pies = valNum;
            metros = pies / 3.2808;
            pulgadas = pies*12;
            yardas = pies*0.3333;
            break;
        case "pulgadas":
            pulgadas = valNum;
            metros = pulgadas/3.2808;
            pies = pulgadas*0.083333;
            yardas = pulgadas*0.027778;
            break;
        case "yardas":
            yardas = valNum;
            pies = yardas*3;
            pulgadas = yardas*36;
            metros = yardas/1.0936;
            break;
    }
    actualizar();
  } 

  function reset(){
      metros = 0;
      pies = 0;
      actualizar();
  }

  function actualizar(){
      document.getElementById("metros").value = metros;
      document.getElementById("pies").value = pies;
      document.getElementById("pulgadas").value = pulgadas;
      document.getElementById("yardas").value = yardas;
      
  }