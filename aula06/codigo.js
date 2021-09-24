var jogadores = []

function calculaPontos(jogador) {
    jogador.pontos = jogador.vitorias * 3 + jogador.empates
}

function recarrega(jogadores) {
    var elementos = ""
    var jogador
    for (var i = 0; i < jogadores.length; i++) {
        jogador = jogadores[i]
        calculaPontos(jogador)
        elementos += "<tr><td>" + jogador.nome + "</td>"
        elementos += "<td>" + jogador.vitorias + "</td>"
        elementos += "<td>" + jogador.empates + "</td>"
        elementos += "<td>" + jogador.derrotas + "</td>"
        elementos += "<td>" + jogador.pontos + "</td>"
        elementos += "<td><button onClick='adicionarEvento(1, " + i + ")'>Vitória</button></td>"
        elementos += "<td><button onClick='adicionarEvento(2, " + i + ")'>Empate</button></td>"
    }
    var tabela = document.getElementById("tabelaJogadores")
    tabela.innerHTML = elementos
}

function addJogador(fase) {
    var adicionar = document.getElementById("manuseio")
    var aviso = document.getElementById("aviso")
    aviso.innerHTML = ""
    if (fase == "1") {
        adicionar.innerHTML = "<br><input type='text' id='nomeJogador' placeholder='Insira o nome de Jogador(a)'>"
        adicionar.innerHTML += " <button id='add' onClick='addJogador(2)'>Adicionar</button>"
    } else {
        var nome = document.getElementById("nomeJogador").value
        var achou = false
        jogadores.forEach(function (e) {
            if (e.nome == nome) {
                aviso.innerHTML = "<br>Nome de jogador(a) ja existente"
                achou = true
            }
        })

        if (!achou) {
            var jogador = {
                nome: nome,
                vitorias: 0,
                derrotas: 0,
                empates: 0,
                pontos: 0
            }
            jogadores.push(jogador)
        }
        recarrega(jogadores)
        adicionar.innerHTML = "<br><button id='add' onClick='addJogador(1)'>Adicionar</button>"
        adicionar.innerHTML += "<button id='rmv' onClick='rmvJogador(1)'>Remover</button>"
    }
}

function rmvJogador(fase) {
    var remover = document.getElementById("manuseio")
    var aviso = document.getElementById("aviso")
    aviso.innerHTML = ""
    if (fase == "1") {
        remover.innerHTML = "<br><input type='text' id='nomeJogador' placeholder='Insira o nome de Jogador(a)'>"
        remover.innerHTML += " <button id='rmv' onClick='rmvJogador(2)'>Remover</button><br>"
    } else {
        var nome = document.getElementById("nomeJogador").value
        var achou = false
        for (var i = 0; i < jogadores.length; i++) {
            if (jogadores[i].nome == nome) {
                aviso.innerHTML = "<br>Jogador(a) " + nome + " Removido"
                achou = true
                jogadores.splice(i, 1)
                recarrega(jogadores)
            }
        }
        if (!achou) {
            aviso.innerHTML = nome + "<br>não é um(a) jogador(a) valido"
        }
        remover.innerHTML = "<br><button id='add' onClick='addJogador(1)'>Adicionar</button>"
        remover.innerHTML += "<button id='rmv' onClick='rmvJogador(1)'>Remover</button>"
    }
}

function zera() {
    jogadores.forEach(function (jogador) {
        jogador.vitorias = 0
        jogador.empates = 0
        jogador.derrotas = 0
        jogador.pontos = 0
    })
    recarrega(jogadores)
}

function adicionarEvento(evento, i) {
    if (evento == "1") { //caso de adicionar vitoria
        resultado(i, "1", "1")
    } else if (evento == "2") { //caso de adicionar empate  
        resultado(i, "1", "2")
    }
}

function resultado(i, fase, evento) { //evento = 1 -> vitória, evento = 2 -> empate
    var resultado
    if (evento == 1)
        resultado = "vitória"
    else
        resultado = "empate"
    if (fase == "1") {
            
        var confirma = document.getElementById("confirma")

        confirma.innerHTML = "<br>O jogador " + jogadores[i].nome + " obteve um(a) " + resultado + " com o jogador:"

        jogadores.forEach(function (e, j) {
            if (i != j) {
                confirma.innerHTML += "<br/><input type='radio' id='" + j + "' name='temp'>" + e.nome
            }
        })
        confirma.innerHTML += "<br><button onClick='resultado(" + i + ", 2," + evento + ")'>Confirma</button><br/><br>"
    } else {
        var escolha
        for (var j = 0; j < jogadores.length; j++) {
            escolha = document.getElementById(j)
            var achou = false
            if (i != j) {
                achou = escolha.checked
            }
            if (achou) {
                if (resultado == "vitória") {
                    jogadores[i].vitorias++
                    jogadores[j].derrotas++
                    break
                } else {
                    jogadores[i].empates++
                    jogadores[j].empates++
                    break
                }

            }
        }
        recarrega(jogadores)
        document.getElementById("confirma").innerHTML = ""
    }
}

function teste() {
    var nome = ['A', 'B', 'C', 'D', 'E', 'F']
    var jogador

    for ( var i in nome) {
        jogador = {
            nome: nome[i],
            vitorias: 0,
            derrotas: 0,
            empates: 0,
            pontos: 0
        }
        jogadores.push(jogador)
    }recarrega(jogadores)
}