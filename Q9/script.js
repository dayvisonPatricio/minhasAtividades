const numerosImparesDiv = document.getElementById("numeros-impares");

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 1) {
    numerosImparesDiv.innerHTML += i + "<br>";
  }
}
