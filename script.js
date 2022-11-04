var x = document.getElementById('square') 
x.addEventListener('click', clicar)
x.addEventListener('mouseenter', entrar)
x.addEventListener('mouseout', sair)

function clicar(){
    x.innerText = 'Clicou!'
    x.style.background = 'orange'
}

function entrar(){
    x.innerText = 'Entrou!'
    x.style.background = 'purple'
}

function sair(){
    x.innerText = 'Saiu!'
    x.style.background = 'red'
}