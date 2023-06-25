function mostrarTabuada() {
    var txtnum = window.document.getElementById('txtn');
    var numero = Number(txtnum.value);

    var resultado = window.document.getElementById('saida');
    resultado.innerHTML = `<h2>Tabuada de ${numero}</h2>`;

    for(var cont = 1; cont <=10; cont++) {
        resultado.innerHTML += `${numero} x ${cont} = <strong>${cont*numero}</strong><br>`;
    }

}