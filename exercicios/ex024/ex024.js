function contar() {
    var resultado = window.document.getElementById('saida');
    resultado.innerHTML = `<h2>Contagem Regressiva de 10 a 1</h2>`;
    for(var cont = 10; cont >=1; cont--) {
        resultado.innerHTML += (`${cont} &#x1f449`);
    }    
    resultado.innerHTML += (`&#x1F3C1`);
}