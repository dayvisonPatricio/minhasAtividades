function calcular() {
    let popA = parseInt(document.getElementById('popA').value);
    let taxaA = parseFloat(document.getElementById('taxaA').value);
    let popB = parseInt(document.getElementById('popB').value);
    let taxaB = parseFloat(document.getElementById('taxaB').value);

    let anos = 0;
    while (popA < popB) {
        popA = Math.round(popA * (1 + taxaA/100));
        popB = Math.round(popB * (1 + taxaB/100));
        anos++;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Serão necessários ${anos} anos para que a população de A ultrapasse ou iguale a população de B.`;
}