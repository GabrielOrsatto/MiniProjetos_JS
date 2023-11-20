const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.style.background = corAleatoria();

    console.log(corAleatoria());
});

function corAleatoria(){
    return `hsl(${Math.floor(Math.random() 
        * 360)}, 100%, 50%)`;
}