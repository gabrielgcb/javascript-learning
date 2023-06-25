function contar() {
    var resultado = window.document.getElementById('saida');
    resultado.innerHTML = `<h2>Contando de 1 até 10 (marcando os pares)</h2>`;

    for(var cont = 1; cont <= 10; cont++) {
        if(cont % 2 != 0) {
            resultado.innerHTML += (`${cont} &#x1f449`);
        } else {    
            resultado.innerHTML += (`<mark><strong> ${cont} </strong></mark> &#x1f449`);
        }
    }
    resultado.innerHTML += (`&#x1F3C1`);
}