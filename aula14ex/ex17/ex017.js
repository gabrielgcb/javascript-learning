function gerarTabuada() {
    var txtnumero = window.document.getElementById('txtnumero');
    var numero = Number(txtnumero.value);
    var contador = 1;
    var resultado = window.document.getElementById('tabuada');
    
    if(txtnumero.value.trim() != 0) {
        resultado.innerHTML = null;
        while(contador <= 10) {
            resultado.innerHTML += `<option>${numero} x ${contador} = ${numero*contador}</option>`;
            contador++;
        }
    } else {
        window.alert("Por favor, digite um número!");  
    }
}