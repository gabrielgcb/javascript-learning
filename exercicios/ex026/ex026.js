function contar() {
    var txtinicio = window.document.getElementById('txti');
    var txtfinal = window.document.getElementById('txtf');

    var inicio = Number(txtinicio.value);
    var final = Number(txtfinal.value);

    var resultado = window.document.getElementById('saida');
    resultado.innerHTML = `<h2>Contando de ${inicio} até ${final}</h2>`;

    if(inicio <= final) {
        for(var cont = inicio; cont <= final; cont++) {    
            resultado.innerHTML += `${cont} `;
            resultado.innerHTML += `&#128073;`
        }
    } else {
        for(var cont = inicio; cont >= final; cont--) {    
            resultado.innerHTML += `${cont} `;
            resultado.innerHTML += `&#128073;`
        }
    }

    resultado.innerHTML += `&#x1F3C1`;
}