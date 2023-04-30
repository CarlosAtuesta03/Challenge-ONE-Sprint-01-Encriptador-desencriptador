
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function validar(texto){
    if(texto != ''){
        document.getElementById("no-existe-text").style.display = "none";
        document.getElementById("text-input-salida").style.display = "block";
        document.getElementById("copiarTexto").style.display = "block";
        document.getElementById("contenido-de-texto-convertido").innerHTML = texto;
    }else{
        document.querySelector(".text-input-salida").value = texto;
        document.querySelector("#input-texto").value
    }
    }


function encriptar (){

        var texto = document.querySelector("#input-texto").value;

        var textoCifrado = texto.replace(/e/gi, "enter");
        var textoCifrado = textoCifrado.replace(/i/gi, "imes");
        var textoCifrado = textoCifrado.replace(/a/gi, "ai");
        var textoCifrado = textoCifrado.replace(/o/gi, "ober");
        var textoCifrado = textoCifrado.replace(/u/gi, "ufat");


        validar(textoCifrado);

    }
    
var botonEncriptar = document.querySelector("#btn-encriptar"); 
botonEncriptar.onclick = encriptar;

function desencriptar (){ 

    var texto = document.querySelector("#input-texto").value;

    var textoCifrado = texto.replace(/ai/gi, "a");
    var textoCifrado = textoCifrado.replace(/enter/gi, "e");
    var textoCifrado = textoCifrado.replace(/imes/gi, "i");
    var textoCifrado = textoCifrado.replace(/ober/gi, "o");
    var textoCifrado = textoCifrado.replace(/ufat/gi, "u");

    validar(textoCifrado);
}

var botonDesencriptar = document.querySelector("#btn-desencriptar"); 
botonDesencriptar.onclick = desencriptar;


function copyText(){
    let pasteText = document.getElementById("contenido-de-texto-convertido").innerText;
    navigator.clipboard.writeText(pasteText)
    .then(function() {
        console.log("Texto copiado al portapapeles");
    })
    .catch(function(error) {
        console.error("Error al copiar el texto al portapapeles: ", error);
    });
    
}
var botoncopyText = document.querySelector("#btn-copyText"); 
botoncopyText.onclick = copyText;