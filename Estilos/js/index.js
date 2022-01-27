var alfabeto1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alfabeto2 = "abcdefghijklmnopqrstuvwxyz";
var texto = document.querySelector(".intexto");
var resposta = document.querySelector(".resposta")
var passinho = document.querySelector(".passinho");
var btnResetar = document.querySelector("#botao--resetar")
var botaoPrincipal = document.querySelector("#botao--interact");
var opcao = document.querySelector(".selecao");
let letra = "";

btnResetar.addEventListener("click", function () {
    texto.value = '';
    letra = '';
    resposta.textContent = '';
})
function mudar(){   
    if(botaoPrincipal.value == "Decodificar"){
        botaoPrincipal.value = "Codificar";
    }else{
        botaoPrincipal.value = "Decodificar"
    }   
}
function abrir(){
    if(opcao.value == "cifra"){
        passinho.classList.remove("invisivel");
    } else{
        passinho.classList.add("invisivel");
    }
}

function acao (){
    if(opcao.value == "cifra" && botaoPrincipal.value == "Codificar"){
        cesarCod();        
    }else if(opcao.value == "cifra" && botaoPrincipal.value == "Decodificar"){
        cesarDecod();
    }else if(opcao.value =="base64" && botaoPrincipal.value == "Codificar"){
        baseCod();
    } else if(opcao.value =="base64" && botaoPrincipal.value=="Decodificar"){
        baseDecod()
    }
}

function cesarCod(){
    let x = parseInt(passinho.value);
    let a = texto.value;
    if (x >= 0 && x <= 25 && x != NaN) {
        tabela = '';
        for (let i = 0; i < a.length; i++) {
            if (a[i].match(/[^[a-zA-Z]+|\d+/gmi)) {
                letra += a[i];
            }
            if (a[i].match(/[a-z]+[^A-Z]?/gm)) {
                let tabela = alfabeto2;
                let n = tabela.indexOf(a[i]);
                let r = x + n;
                if (r > 25) {
                    letra += tabela[r - 26];
                } else if (r <= 25) {
                    letra += tabela[r]
                }

            }
            if (a[i].match(/^[A-Z]+[^a-z]?/gm)) {
                let tabela = alfabeto1;
                let n = tabela.indexOf(a[i]);
                let r = x + n;
                if (r > 25) {
                    letra += tabela[r - 26];
                } else if (r <= 25) {
                    letra += tabela[r]
                }
            }
        }
        resposta.textContent = letra;
    }
}

function cesarDecod(){

    let x = parseInt(passinho.value);
    let a = texto.value;

    if (x >= 0 && x <= 25 && x != NaN) {
        tabela = '';
        for (let i = 0; i < a.length; i++) {
            if (a[i].match(/[^[a-zA-Z]+|\d+/gmi)) {
                letra += a[i];
            }
            if (a[i].match(/[a-z]+[^A-Z]?/gm)) {
                let tabela = alfabeto2;
                let n = tabela.indexOf(a[i]);
                let r = n - x;
                if (r < 0) {
                    letra += tabela[r + 26];
                } else if (r <= 25) {
                    letra += tabela[r]
                }
            }
            if (a[i].match(/^[A-Z]+[^a-z]?/gm)) {
                let tabela = alfabeto1;
                let n = tabela.indexOf(a[i]);
                let r = n - x;
                if (r < 0) {
                    letra += tabela[r + 26];
                } else if (r <= 25) {
                    letra += tabela[r]
                }
            }
        }
        resposta.textContent = letra;
    }
}

function baseCod(){
var codificado =  btoa(texto.value);
    resposta.textContent = codificado;
}
function baseDecod(){
    var normal = atob(texto.value);
    resposta.textContent = normal;
}