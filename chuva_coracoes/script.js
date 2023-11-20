function criarCoracao(){
    const coracao = document.createElement('div');
    
    coracao.classList.add('coracao');

    coracao.style.left = Math.random() * 100 + "vw";

    coracao.style.animationDuration = Math.random() * 2 + 3 + "s";

    coracao.innerText = '💜'

    document.body.appendChild(coracao)
}

setInterval(criarCoracao, 100);