const texto = "Texto aleatório para teste <3";

let index = 0

function escrevaTexto(){
    document.body.innerHTML = texto.slice(0, index);

    index++;

    if (index > texto.length + 1){
        index = 0;
    }
}

setInterval(escrevaTexto, 100)

