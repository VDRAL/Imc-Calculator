function start () {
    var botao = document.querySelector("#botao")
    botao.addEventListener("click", cliqueDoBotao);

    cliqueDoBotao();
    
}

function Calculo (kg, m) {
    return kg / (m * m)
}
function cliqueDoBotao () {
    var peso = document.querySelector("#peso")
    var altura = document.querySelector("#altura")
    var resultado = document.querySelector("#imcResultado")
    var frase = document.querySelector("#faixa")
  

    var valorPeso = Number(peso.value);
    var valorAltura = Number(altura.value);

    var Imc = Calculo(valorPeso, valorAltura);
    var ImcResumo = Imc.toFixed(2).replace("." ,  ",")

    resultado.textContent = ImcResumo;

    var Imc2 = Calculo(valorPeso, valorAltura)
    if(Imc2 <=16.9) {
        frase.textContent = "Muito abaixo do peso"
    } else if(Imc2 <= 18.4) {
        frase.textContent = "Abaixo do peso"
    } else if(Imc2 <= 24.9) {
        frase.textContent = "Peso normal"
    } else if (Imc2 <=29.9) {
        frase.textContent = "Acima do Peso"
    } else if (Imc2 <=34.9) {
        frase.textContent = "Obesidade nivel I"
    } else if (Imc2 <=40) {
        frase.textContent = "Obesidade nivel II"
    } else if (Imc2 >40) {
        frase.textContent = "Obesidade nivel III"
    } else {
        frase.textContent = "Erro : Valor inválido"
    }

}
function frase () {
    
    fraseConteudo [
        f1 = "Muito abaixo do peso",
        f2 = "Abaixo do peso",
        f3 = "Normal",
        f4 = "Acima do peso",
        f5 = "Obesidade grau I",
        f6 = "Obesidade grau II",
        f7 = "Obesidade grau III",
        f8 = "Inválido"
    ]

}

start();