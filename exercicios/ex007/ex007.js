function calcularMedia() {
    var nome = window.prompt("Qual é o nome do aluno? ");
    var nota1 = Number(window.prompt("Qual foi a primeira nota de Gabriel? "));
    var nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de Gabriel? `));
    var media = (nota1 + nota2) / 2;
    var resultado = window.document.querySelector('section#situacao');
    resultado.innerHTML = `Calculando a média final de <mark>${nome}</mark>.`;
    resultado.innerHTML += `<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>.</p>`;
    resultado.innerHTML += `A média final será <mark>${media}</mark>.`;
}