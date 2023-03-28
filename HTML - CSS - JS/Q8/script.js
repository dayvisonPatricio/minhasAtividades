function calcular() {
    // Obtemos os valores dos campos de entrada
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let num4 = Number(document.getElementById("num4").value);
    let num5 = Number(document.getElementById("num5").value);
  
    // Calculamos a soma e a média dos números
    let soma = num1 + num2 + num3 + num4 + num5;
    let media = soma / 5;
  
    // Exibimos o resultado na página
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Soma: ${soma}<br>Média: ${media}`;
  }
  