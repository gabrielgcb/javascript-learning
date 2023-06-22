function comparar() {
    var n1 = Number(window.prompt("Digite um número: "));
    var n2 = Number(window.prompt("Digite outro número: "));
    var resultado = window.document.getElementById('res');
    if(n1 != n2) {
        resultado.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${Math.max(n1, n2)}</strong>`;
    } else if(n1 == n2){
        resultado.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong>`;
    }
    
}