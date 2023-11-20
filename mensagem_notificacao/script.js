const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    criarNotificacao();
});

function criarNotificacao(){
    const notificacao = document.createElement('div');

    notificacao.classList.add('cssNotificacao');

    notificacao.innerText = "Você clicou aqui!";

    container.appendChild(notificacao);

    setTimeout(() => {
        notificacao.remove();
    }, 3000);
}