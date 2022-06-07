var counterp = 1;
var counterx = 1;
var countery = 1;



// añadir victoria para jugador de las 'X'
function addx(){
  var partidasx = document.getElementById("partidasx");
  partidasx.innerHTML = `
  PARTIDAS JUGADOR 'X': ${counterx++}`;
}

// añadir victoria para jugador de las 'O'
function addo(){
  var partidaso = document.getElementById("partidaso");
  partidaso.innerHTML = `
  PARTIDAS JUGADOR 'O': ${countery++}`;
}

// añade partida al contador
function addPartida(){
  var partidasTotales = document.getElementById("partidas");
  partidasTotales.innerHTML = `
  PARTIDAS TOTALES: ${counterp++}`;
}

function reducirEn7(){
  counterp = counterp - 7;
}


const cuadro_btn = document.querySelectorAll(".cuadro");
const info = document.getElementById("juego_info");
const juego_btn = document.getElementById("juego_boton")
var i = 1;
const boton1 =  "pointer-events:initial;opacity:initial;",
      boton2 =  "pointer-events:none;opacity:40%;";

var pWin = [ [0,1,2],[3,4,5],[6,7,8],
             [0,3,6],[1,4,7],[2,5,8],
             [0,4,8],[2,4,6]
           ];


// comprueba que la secuencia es correcta
function comprobar(){
  juego_btn.style.cssText = boton2;
  for (var j = 0; j < pWin.length;j++){
    if(cuadro_btn[pWin[j][0]].innerHTML === "X" && cuadro_btn[pWin[j][1]].innerHTML === "X" && cuadro_btn[pWin[j][2]].innerHTML === "X" ){
      addx();
      addPartida();
      info.innerHTML = '"X" Gana';
      deshabilitarCasillas();
      
    }else if(cuadro_btn[pWin[j][0]].innerHTML === "O" && cuadro_btn[pWin[j][1]].innerHTML === "O" && cuadro_btn[pWin[j][2]].innerHTML === "O"){
      addo();
      addPartida();
      info.innerHTML = '"O" Gana';
      deshabilitarCasillas();
    }else if(cuadro_btn[0].innerHTML != "" && cuadro_btn[1].innerHTML != "" && cuadro_btn[2].innerHTML != "" && cuadro_btn[3].innerHTML !== "" && cuadro_btn[4].innerHTML != "" && cuadro_btn[5].innerHTML != "" && cuadro_btn[6].innerHTML != "" && cuadro_btn[7].innerHTML != "" && cuadro_btn[8].innerHTML != ""){
      addPartida();
      counterp = counterp % 7;
      info.innerHTML = "Empate";
      deshabilitarCasillas(false); 
    }
  }
}


// cuando la vaya seleccionando, se deshabilita para no poder seleccionarse mas
function  deshabilitarCasillas(y){
  (y == false)?i = Math.floor(Math.random() * (3 - 1)) + 1:0;
    for(var n_boton = 0; n_boton < cuadro_btn.length; n_boton++){    
      cuadro_btn[n_boton].style.setProperty("pointer-events","none"); 
    } 
  juego_btn.style.cssText = boton1;
}

cuadro_btn.forEach(boton => {
  boton.onclick = function(){
    info.innerHTML = "";
    (i % 2 == 0)?boton.innerHTML = "X": boton.innerHTML = "O";
    comprobar();
    boton.style.setProperty("pointer-events","none"); 
    i++; 
    (i == 3)?i = 1: 0 ;
  }
});

juego_btn.onclick = function(){
  for(var n_boton = 0; n_boton < cuadro_btn.length; n_boton++){    
    cuadro_btn[n_boton].style.cssText = "pointer-events:initial;";
    cuadro_btn[n_boton].innerHTML = "";
  } 
  nEmpieza();
  
}
nEmpieza();