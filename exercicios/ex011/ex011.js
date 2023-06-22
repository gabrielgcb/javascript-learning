function calcularMedia() {
    var nome = window.prompt("Qual é o nome do aluno? ");
    var nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
    var nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`));
    var resultado = window.document.getElementById('res');

    resultado.innerHTML = `<p>Calculando a nota final de <mark>${nome}</mark>.</p>`;
    resultado.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`;
    resultado.innerHTML += `<p>A média final será <mark>${(nota1+nota2)/2}</mark>.</p>`;
    resultado.innerHTML += 'A mensagem que temos é: ';

    if( ((nota1+nota2)/2) >= 6 ) {
        resultado.innerHTML += `<strong style="color:red;">Meus parabéns!</strong>`;
    } else {
        resultado.innerHTML += `<strong style="color:red;">Estude um pouco mais!</strong>`;
    }
}