function exibir() {
    var data = new Date();
    data.getTime();
    var resultado = window.document.getElementById('res');
    resultado.innerHTML = `O que eu recebi do sistema foi <mark>${data}</mark>`;
}