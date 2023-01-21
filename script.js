let msg  = document.getElementById("msg");
let img = document.getElementById("imagem");
let data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes();


function carregar(){
    msg.innerHTML = `Agora são ${hora}:${minutos}<br> `;   
    if ( hora >= 8 && hora < 12){
        msg.innerHTML += "Bom dia!";
        img.src = "./img/manha.jpg";
        document.body.style.background = "#EBD5AA"
    } else if ( hora >= 9 && hora < 19){
        msg.innerHTML += "Boa tarde!";
        img.src = "./img/tarde.jpg";
        document.body.style.background = "#855463"
    } else {
        msg.innerHTML += "Boa noite!";
        img.src = "./img/noite.jpg";
        document.body.style.background = "#523F62"
    }
    


}

