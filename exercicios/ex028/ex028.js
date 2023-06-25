function calcularFatorial() {
    var txtnum = window.document.getElementById('txtn');
    var numero = Number(txtnum.value);
    var fatorial = 1;

    var resultado = window.document.getElementById('saida');
    resultado.innerHTML = `<h2>Calculando ${numero}!</h2>`;

    for(var cont = numero; cont >= 1; cont--) {
        resultado.innerHTML += `${cont}`
        if(cont != 1) {
            resultado.innerHTML += ` x `;
        } else {
            resultado.innerHTML += ` = `;
        }
        fatorial *= cont;
    }

    resultado.innerHTML += `<strong>${fatorial.toLocaleString('pt-br')}</strong>`;

}