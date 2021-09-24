var baralho = [
    ["YUGI", "https://ms.yugipedia.com//c/c4/YamiYugi-DULI.png", 6, 6, 9],
    ["JOEY", "https://static.wikia.nocookie.net/yugioh/images/0/0e/JoeyWheelerDT.png", 8, 3, 5],
    ["TEA", "https://ms.yugipedia.com//e/e3/T%C3%A9aGardner-DULI.png", 3, 8, 5],
    ["MOKUBA", "https://static.wikia.nocookie.net/yugioh/images/9/99/MokubaKaiba-DULI.png", 5, 5, 5],
    ["MAGA NEGRA", "superTrunfo.png", 10, 10, 10],
    ["KAIBA", "https://static.wikia.nocookie.net/yugioh/images/2/23/SetoKaiba-DL.png", 9, 4, 8],
    ["MAI", "https://static.wikia.nocookie.net/yugioh/images/3/3d/Npc-kujaku-mai.jpg", 6, 6, 3],
    ["MERRICK", "https://static.wikia.nocookie.net/yugioh/images/f/f7/YamiMarik-DULI.png", 2, 8, 8],
    ["WEEVIL", "https://ms.yugipedia.com//thumb/8/8c/Weevil-MDDG.png/257px-Weevil-MDDG.png", 6, 7, 3],
    ["TRISTAN", "https://static.wikia.nocookie.net/yugioh/images/0/07/TristanTaylorMD.png", 3, 2, 2]
]

var cartasJogador = []
var cartasMaquina = []
var cartaJogador
var cartaMaquina

function preencheBaralho() {
    baralho.forEach(function (e) {
        var carta = {
            nome: '',
            imagem: '',
            atributos: {
                ataque: 0,
                defesa: 0,
                magia: 0
            }
        }
        carta.nome = e[0]
        carta.imagem = e[1]
        carta.atributos['ataque'] = e[2]
        carta.atributos['defesa'] = e[3]
        carta.atributos['magia'] = e[4]
        if (Math.random() > 0.5 && cartasJogador.length < (baralho.length / 2))
            cartasJogador.push(carta)
        else
            cartasMaquina.push(carta)
    })
}

preencheBaralho()

function sortearCarta() {
    var ij = parseInt(Math.random() * cartasJogador.length)
    var im = parseInt(Math.random() * cartasMaquina.length)
    cartaJogador = cartasJogador[ij]
    cartaMaquina = cartasMaquina[im]
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exibirCarta(cartaJogador, "j")
    exibirCarta(cartaMaquina, "m")
    document.getElementById("resultado").innerHTML = ""
}

function exibirOpcoes() {
    var texto = ""
    for (var atributo in cartaJogador.atributos) {
        texto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    return texto
}

function jogar() {
    var atributo = document.getElementsByName("atributo")
    var atributoSelecionado = ''
    atributo.forEach(function (e) {
        if (e.checked) {
            atributoSelecionado = e.value
        }
    })
    var resultado = document.getElementById("resultado")
    if (atributoSelecionado != '') {
        if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
            cartasJogador.push(cartaMaquina)
            cartasMaquina.splice(cartasMaquina.indexOf(cartaMaquina), 1)
            if (cartasMaquina.length <= 1)
                gameOver('v')
            resultado.innerHTML = "<h2>Você venceu!!</h2>"
        } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
            cartasMaquina.push(cartaJogador)
            cartasJogador.splice(cartasJogador.indexOf(cartaJogador), 1)
            if (cartasJogador.length <= 1)
                gameOver('p')
            resultado.innerHTML = "<h2>Você perdeu!<br>Lhe restam " + cartasJogador.length + " cartas</h2>"
        } else
            resultado.innerHTML = "<h2>Empatou</h2>"
        document.getElementById("btnSortear").disabled = false
        document.getElementById("btnJogar").disabled = true
    } else
        resultado.innerHTML = "<h2>Selecione um atributo</h2>"
}

function exibirCarta(carta, quem) {
    var div
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">`;
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var nome = `<p class="carta-subtitle">${carta.nome}`
    if (quem == 'j') {
        div = document.getElementById('carta-jogador')
        div.innerHTML = moldura + nome + tagHTML + exibirOpcoes() + "</div>"
    } else {
        div = document.getElementById('carta-maquina')
        div.innerHTML = moldura + nome + tagHTML + "</div>"
    }
    div.style.backgroundImage = `url(${carta.imagem})`
}

function gameOver(evento) {
    var elementos = ["btnSortear", "form"]
    elementos.forEach(function (e) {
        document.getElementById(e).style.display = 'none'
    })
    var texto = document.getElementById("form")
    if (evento == 'v')
        texto.innerHTML = "<h1 class='page-title'><br><br>PARABÉNS!!!<br>VOCÊ GANOHU!</h1>"
    else
        texto.innerHTML = "<h1 class='page-title'><br><br>GAME OVER!!!<br>VOCÊ FOI RAPADO!</h1>"
    texto.style.display = ''
}