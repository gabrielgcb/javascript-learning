function verificar() {
    var numero = Number(window.prompt("Digite um número: "));
    var resultado = window.document.querySelector('section#res');
    if((numero % 2) == 0) {
        resultado.innerHTML = `O número ${numero} que foi digitado é <strong>PAR!</strong>`;
    } else if((numero % 2) !=0) {
        resultado.innerHTML = `O número ${numero} que foi digitado é <strong>ÍMPAR!</strong>`;
    }
}