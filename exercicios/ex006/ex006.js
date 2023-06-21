function exibir() {
    var numero1 = Number(window.prompt("Digite um número: "));
    var numero2 = Number(window.prompt("Digite outro número: "));
    var soma = numero1 + numero2;
    var resultado = window.document.getElementById('res');
    resultado.innerHTML = `A soma entre <mark>${numero1}</mark> e <mark>${numero2}</mark> é igual a <strong>${soma}</strong>`;
}