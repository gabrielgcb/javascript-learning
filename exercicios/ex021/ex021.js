function contar() {
    var resultado = window.document.getElementById('saida');
    resultado.innerHTML = `<h2>Contando de 1 até 10</h2>`;

    for(var cont = 1; cont <= 10; cont++) {
        resultado.innerHTML += (`${cont} &#x1f449`);
    }
    resultado.innerHTML += (`&#x1F3C1`);
}