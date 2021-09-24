var filmes = [["her", "https://upload.wikimedia.org/wikipedia/pt/9/9b/Her.jpg"],
    ["poderoso chefao", "https://a-static.mlcdn.com.br/1500x1500/quadro-decorativo-o-poderoso-chefao-filmes-cartaz-cinema-decoracoes-com-moldura-g02-vital-quadros/vitalquadrosdobrasil/080008840804/006c5306ba436d3cb06b1468472269dd.jpg"],
    ["laranja mecanica", "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/91/05/58/20127559.jpg"]]

recarrega()

function preenche() {
    var nome = document.getElementById("nome").value;
    var url = document.getElementById("url").value;
    var texto = document.getElementById("resultado");
    return [nome, url, texto]
}

function recarrega() {
    document.getElementById("posters").innerHTML = ""
    filmes.forEach(function(filme) {
        document.getElementById("posters").innerHTML += ("<img src=" + filme[1] + ">")
    })
}

function procura(nome, url) {
    for (var i = 0; i < filmes.length; i++) {
        if (nome == filmes[i][0] || url == filmes[i][1]) {
            return [true, i]
        }
    } return [false, -1]
}

function addFilme() {
    var nut = preenche() //nut = nome (nut[0]), url(nut[1]) e texto(nut[2])
    var achou = procura(nut[0],nut[1])
    if (achou[0]) {
        nut[2].innerHTML = "Filme repetido";
    } else {
        filmes.push([nut[0], nut[1]]);
        document.getElementById("posters").innerHTML += ("<img src=" + nut[1] + ">")
    }
}

function rmvFilme(){
    var nut = preenche() //nut = nome (nut[0]), url(nut[1]) e texto(nut[2])
    var achou = procura(nut[0],nut[1])
    if (achou[0]) {
        filmes.splice(achou[1], 1)
        nut[2].innerHTML = "Filme "+ nut[0] + " removido";
        recarrega()
    } else {
        nut[2].innerHTML = "Filme "+ nut[0] + " não encontrado na lista de filmes";
    }
}
