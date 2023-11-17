const abrir = document.getElementById('abrir');
const fechar = document.getElementById('fechar');
const container = document.getElementById('container');

abrir.addEventListener('click', () => {
    container.classList.add('active');
});

fechar.addEventListener('click', () => {
    container.classList.remove('active');
});