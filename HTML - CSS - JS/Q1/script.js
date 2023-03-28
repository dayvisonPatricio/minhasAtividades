let nota;

do{
    nota = prompt("Digite sua Nota(com valor entre 0 e 10):");

    if (nota < 0 || nota > 10) {
        alert("Nota com valor inválido. Digite novamente.")
    }
} 
while (nota < 0 || nota > 10);

alert ("Nota válida: " + nota);