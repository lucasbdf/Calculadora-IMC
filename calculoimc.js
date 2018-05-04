function calculadoraIMC() {
    var altura = document.getElementById("altura").value / 100;
    var peso = document.getElementById("peso").value;

    var resultado = (peso / (altura * altura));

    if (resultado < 18.5) {
        alert("Você está Abaixo Do Peso - IMC: " + resultado);
    } else if (resultado >= 18.5 && resultado < 24.9) {
        alert("Você está no Peso Ideal - IMC: " + resultado)
    } else if (resultado >= 25 && resultado < 29.9) {
        alert("Você está com Sobrepeso - IMC: " + resultado)
    } else if (resultado >= 30 && resultado < 34.9) {
        alert("Você está com Obesidade Moderada - IMC: " + resultado)
    } else if (resultado >= 35 && resultado < 39.9) {
        alert("Você está com Obesidade Severa - IMC: " + resultado)
    } else if (resultado > 40) {
        alert("Você está com Obesidade Mórbida - IMC: " + resultado)
    }
}