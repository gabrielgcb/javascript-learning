function contarNumeros() {
    var inicio = window.document.getElementById('txtinicio');
    var fim = window.document.getElementById('txtfim');
    var passo = window.document.getElementById('txtpasso');
    var resultado = window.document.getElementById('contagem');

    if(inicio.value.trim() != '' && fim.value.trim() != '') {
        var nInicio = Number(inicio.value);
        var nFim = Number(fim.value);
        var nPasso = Number(passo.value);

        if(nPasso != 0) {
            resultado.innerHTML = `<p>Contando: </p>`;
            if(nFim >= nInicio) { // contagem crescente
                while(nInicio <= nFim) {
                    resultado.innerHTML += `${nInicio} &#x1F449`;
                    nInicio += nPasso;
                }
            } else {
                while(nInicio >= nFim) { // contagem decrescente
                    resultado.innerHTML += `${nInicio} &#x1F449`;
                    nInicio -= nPasso;
                }
            }
            resultado.innerHTML += `&#x1F3F4 `;
        } else {
            window.alert("Passo inválido! Considerando PASSO 1");
            resultado.innerHTML = `<p>Contando: </p>`;

            while(nInicio <= nFim) {
                resultado.innerHTML += `${nInicio} &#x1F449`;
                nInicio += 1;
            }
            resultado.innerHTML += `&#x1F3F4 `;
        }
    } else {
        resultado.innerHTML = `Impossível contar!`;
    }
}