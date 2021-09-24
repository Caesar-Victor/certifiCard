var numSecreto = parseInt(Math.random()*10)
var numChances = 3

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado")
    var botao = document.getElementById("botao")
    var acertou = false;
    if(!acertou) {
        if (chute == numSecreto) {
            resultado.innerHTML = "Você acertou!!!"
            acertou = true;
            botao.innerHTML = "<a href='site.html' target='_self'>Tentar novamente"
        } else if (chute < 0 || chute > 10) {
            resultado.innerHTML = "Digite um valor válido"
        } else {
            if (chute < numSecreto) {
                resultado.innerHTML = "O numero secreto é maior <br/>"
            } else {
                resultado.innerHTML = "O numero secreto é menor <br/>"
            }

            resultado.innerHTML += "Você ainda tem " + --numChances + " tentativas"
        }
    }
    if (numChances == 0) {
        resultado.innerHTML = "Game Over!<br/>O número secreto era: "+numSecreto
        botao.innerHTML = "<a href='site.html' target='_self'>Tentar novamente"
    }
}

/* 01. Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.
    check

 02. Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto.
    check

 03. Pesquisar e aprender a diferença entre == e ===

 == é uma comparação de valor, enquanto === é uma comparação de valor e tipo*/