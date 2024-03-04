//let apresentacao__textarea = document.querySelector("textarea");
//apresentacao__textarea.innerHTML = "Digite o texto aqui";

//let apresentacao__titulo = document.querySelector("h1");
//apresentacao__titulo.innerHTML = "Criptografar e Descriptografar";

//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function apresentacaoBotaoCriptografar() {
    const textoCriptografado = Criptografar(textArea.value);
    textAreaRetangulo.value = textoCriptografado;
    textArea.value = ""; 
}

const textArea = document.querySelector(".apresentacao__textarea");
const textAreaRetangulo = document.querySelector(".apresentacao__textarea-retangulo");

function Criptografar(stringCriptografada) {
    
    let matrizCodigo = [["e", "enter"] , ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografada;
}

function apresentacaoBotaoDescriptografar() {
    const textoDescriptografado = Descriptografar(textAreaRetangulo.value);
    textArea.value = textoDescriptografado;
    textAreaRetangulo.value = "";
}

function Descriptografar(stringDescriptografada) {
    
    let matrizCodigo = [["e", "enter"] , ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescriptografada;
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela("textarea", "Digite o texto aqui");
exibirTextoNaTela("h1", "Criptografar e Descriptografar");