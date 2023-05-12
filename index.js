var setaDireita = window.document.getElementById("seta-dir")
var leo = window.document.getElementById("leo")
var sama = window.document.getElementById("sama")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esq")

function RolarParaDireita() {
    leo.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}
function RolarParaEsquerda() {
    bruna.style = "display:none"
    leo.style = "display:flex"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex"
}