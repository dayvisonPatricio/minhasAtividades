function encontrarMaiorNumero() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var num3 = parseFloat(document.getElementById("num3").value);
	var num4 = parseFloat(document.getElementById("num4").value);
	var num5 = parseFloat(document.getElementById("num5").value);

	var maior = num1;
	if (num2 > maior) maior = num2;
	if (num3 > maior) maior = num3;
	if (num4 > maior) maior = num4;
	if (num5 > maior) maior = num5;

	document.getElementById("resultado").value = "O maior número é: " + maior;
	document.getElementById("resultado").style.display = "block";
}
