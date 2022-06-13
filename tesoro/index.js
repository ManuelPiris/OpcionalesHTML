//https://developer.mozilla.org/es/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

var canvas = document.getElementById('opponent_board');
const right = document.getElementById("right")
const left = document.getElementById("left")
const up = document.getElementById("up")
const down = document.getElementById("down")
let context = canvas.getContext("2d");
let width = canvas.scrollWidth;
let height = canvas.scrollHeight
let dim = width / 10;
context.beginPath();


const moveDown = (player, image,event) =>{
    console.log("da")
    if(player.name){
        tiburones.forEach(el2 =>{
    if(player.y +  dim == el2.y && player.x == el2.x){
        alert("lost")
        location.reload()
            }
        })
        if(player.y +  dim == tesoro.y && player.x == tesoro.x){
            alert("win")
            location.reload()
        }
    }
    context.clearRect(player.x, player.y, dim, dim);
    if(player.y == height - dim){
        player.y = 0
    }else if(player.y < height){
        player.y = player.y + dim
    }
    context.drawImage(image, player.x, player.y, player.w, player.h);
}
const moveUp = (player, image,event) =>{
    if(player.name){
        tiburones.forEach(el2 =>{
    if(player.y - dim == el2.y && player.x == el2.x){
        alert("lost")
        location.reload()
            }
        })
        if(player.y - dim == tesoro.y && player.x == tesoro.x){
            alert("win")
            location.reload()
        }
    }
    context.clearRect(player.x, player.y, dim, dim);
    if(player.y == 0){
        player.y = height - dim
    }else if(player.y < height){
        player.y = player.y - dim
    }
    context.drawImage(image, player.x, player.y, player.w, player.h);
}
const moveLeft = (player, image,event) =>{
    if(player.name){
        tiburones.forEach(el2 =>{
    if(player.x - dim == el2.x && player.y == el2.y){
            alert("lost")
            location.reload()
            }
        })
        if(player.x - dim == tesoro.x && player.y == tesoro.y){
            alert("win")
            location.reload()
        }
    }
    context.clearRect(player.x, player.y, dim, dim);
    if(player.x == 0){
        player.x = width - dim
    }else if(player.x < width){
        player.x = player.x - dim
    }
    context.drawImage(image, player.x, player.y, player.w, player.h);
}
const moveRight = async (player, image,event) =>{
    console.log(player.w)
        if(player.name){
        tiburones.forEach(el2 =>{
        if(player.x + dim == el2.x && player.y == el2.y){
            alert("lost")
            location.reload()
            }
        })
        if(player.x + dim == tesoro.x && player.y == tesoro.y){
            alert("win")
            location.reload()
        }
    }
    context.clearRect(player.x, player.y, dim, dim);
    if(player.x == width - dim){
        player.x = 0
    }else if(player.x < width){
        player.x = player.x + dim
    }
    context.drawImage(image, player.x, player.y, player.w, player.h);
}
const getRandomNumbers = () =>{
    let randomX = Math.floor(Math.random() * 8 + 1) * dim;
    let randomY = Math.floor(Math.random() * 8 + 1) * dim;
    return [randomX, randomY]
}
// posiciones
let [randomXPlayer,randomYPlayer] = getRandomNumbers()
// jugador
let base_image = new Image();
base_image.src = 'https://media.discordapp.net/attachments/983317205859045446/984071304586072084/usuario.png';
let player = {x: randomXPlayer, y: randomYPlayer, w: dim, h: dim, name:'player'};
base_image.onload = function(){
    context.drawImage(base_image, player.x, player.y, player.w, player.h);
}
right.addEventListener("click", moveRight.bind(null, player, base_image), false)
left.addEventListener("click", moveLeft.bind(null, player, base_image), false)
up.addEventListener("click", moveUp.bind(null, player, base_image), false)
down.addEventListener("click", moveDown.bind(null, player, base_image), false)

// tesoro
let [randomXTesoro,randomYTesoro] = getRandomNumbers()

let tesoro_image = new Image()
tesoro_image.src = 'img/tesoro.jpg'
while(randomXPlayer == randomXTesoro && randomYPlayer == randomYTesoro){
    [randomXTesoro,randomYTesoro] = getRandomNumbers()
}
let tesoro = {x:randomXTesoro, y: randomYTesoro, w:dim, h:dim}
tesoro_image.onload = () =>{
    context.drawImage(tesoro_image, tesoro.x, tesoro.y, tesoro.w, tesoro.h);
}

// tiburones
let tiburones = [
    {x:0, y: 0, w:dim, h:dim},
    {x:dim*5, y: width-dim, w:dim, h:dim},
    {x:width-dim, y: width-dim*7, w:dim, h:dim},
]
tiburones.forEach(el =>{
    let tiburon_image = new Image()
    tiburon_image.src = 'https://media.discordapp.net/attachments/983317205859045446/984071304359587940/tiburon.jpg'
    tiburon_image.onload = () =>{
        context.drawImage(tiburon_image, el.x, el.y, el.w, el.h);
    }
     setInterval(() => {
        let breakt = false
        let random = Math.floor(Math.random() * 4);
          switch(random) {
            case 0:
            tiburones.forEach(el2 =>{
             if((el.x + dim == el2.x && el.y == el2.y)){
                breakt = true
                }
                })
            if(breakt) break
            if((el.x + dim == tesoro.x && el.y == tesoro.y)) break
            if((el.x + dim == player.x && el.y == player.y)){
                alert("lost")
                location.reload()
                break
                }
                moveRight(el, tiburon_image)
               break;
             case 1:
                tiburones.forEach(el2 =>{
                if((el.x - dim == el2.x && el.y == el2.y)){
                breakt = true
                    }
                })
            if(breakt) break
            if((el.x - dim == tesoro.x && el.y == tesoro.y)) break
            if((el.x - dim == player.x && el.y == player.y)){
                alert("lost")
                location.reload()
                break
                }
                moveLeft(el, tiburon_image)
               break;
             case 2:
                tiburones.forEach(el2 =>{
                if((el.y - dim == el2.y && el.x == el2.x)){
                breakt = true
                    }
                })
            if(breakt) break
            if((el.y - dim == tesoro.y && el.x == tesoro.x)) break
            if((el.y - dim == player.y && el.x == player.x)){
                alert("lost")
                location.reload()
                break
                }
                moveUp(el, tiburon_image)
               break;
             case 3:
                tiburones.forEach(el2 =>{
                if((el.y +  dim == el2.y && el.x == el2.x)){
                breakt = true
                    }
                })
            if(breakt) break
            if((el.y + dim == tesoro.y && el.x == tesoro.x)) break
            if((el.y + dim == player.y && el.x == player.x)){
                alert("lost")
                location.reload()
                break
                }
                moveDown(el, tiburon_image)
               break;
          }
    }, 1000)
})
