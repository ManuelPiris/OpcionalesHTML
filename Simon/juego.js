// secuencia generada random por el programa
var sequenceMade=[];
// secuencia que el usuario introduce
var sequenceUser=[]; 
var levelCounter= 0; 
var level=0;


// hace que comience el juego
function start(){
    nextSequence();
}


// genera un número aleatorio y lo manda a la secuencia de numeros
function nextSequence() {
 var randomNumber = Math.floor(Math.random()*4);
 sequenceMade.push(randomNumber); 
 showSequence(sequenceMade[sequenceMade.length - 1]);
 changeLevel();
 sequenceUser=[];
 
};


// hace que se vayan mostrando las secuencias
function showSequence(element) {
    
    switch (element){
        case 0:
              $("#green").addClass("dissapear");
              setTimeout(function(){
                  $("#green").removeClass("dissapear");
              },250)
              break;
        case 1:
            $("#red").addClass("dissapear");
              setTimeout(function () {
                  $("#red").removeClass("dissapear");
              }, 250)
            break;
        case 2:
              $("#yellow").addClass("dissapear");
              setTimeout(function () {
                $("#yellow").removeClass("dissapear");
              }, 250)
            break;
        case 3:
            $("#blue").addClass("dissapear");
              setTimeout(function () {
                  $("#blue").removeClass("dissapear");
              }, 250)
            break;
    }
 };

 // hace que vaya aumentando el nivel si el usuario lo introduce bien
function changeLevel() {
    levelCounter++;    
};

// convierte los clicks en numeros y los envia a un array
$(".btn").click(function(e){
        var userClicked= $(this).attr("id");
        switch(userClicked){
            case "green":
                sequenceUser.push(0);
                showSequence(0);
                break;

            case "red":
                sequenceUser.push(1);
                showSequence(1);
                break;
            
            case "yellow":
                sequenceUser.push(2);
                showSequence(2);
                break;
            
            case "blue":
                sequenceUser.push(3);
                showSequence(3);
                break;
            }              
    });     


// comprueba que la secuencia introducida sea correcta y si no, lanza un aviso de que has perdido
function checkSequence(indexOfArray) { 

    if(sequenceUser[indexOfArray] === sequenceMade[indexOfArray]){
       
      if(sequenceMade.length === sequenceUser.length) {
           setTimeout(function () {
            alert("SECUENCIA CORRECTA")
           }, 1000);
        }
    } else {
      alert("HAS PERDIDO")
      location.reload();
    }
}


