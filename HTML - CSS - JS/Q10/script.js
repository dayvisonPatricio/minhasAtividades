function mostrarIntervalo() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = "";
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            resultado += i + " ";
        }
    } else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            resultado += i + " ";
        }
    } else {
        resultado = "Os números são iguais.";
    }
    document.getElementById("intervalo").innerHTML = resultado;
}