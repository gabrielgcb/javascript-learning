function calcular() {
    var n1 = Number(window.prompt("Primeiro valor: "));
    var n2 = Number(window.prompt("Segundo valor: "));
    var operacao = Number(window.prompt(`Valores informados: ${n1} e ${n2}.\nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`));

    var resultado = window.document.querySelector('section#res');

    resultado.innerHTML = `<h2>Calculando...</h2>`;

    if(operacao === 1) {
        resultado.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`;
    } else if(operacao === 2) {
        resultado.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`;
    } else if(operacao === 3) {
        resultado.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`;
    } else if(operacao === 4) {
        resultado.innerHTML += `<p>${n1} / ${n2} = <strong>${n1/n2}</strong></p>`;
    } else {
        resultado.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.</p>`;
    }
}