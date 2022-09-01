const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento){
    evento.preventDefault();
    console.log('Não enviado')
    setResultado('teste')
})

function setResultado(msg){
    const resultado = document.querySelector('#resultado');

    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = 'qualquer coisa'
    resultado.appendChild(p)
}