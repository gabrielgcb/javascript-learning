function pesquisarEstacao() {
    var mes = window.prompt("Digite o mês em extenso (ex: Setembro)");
    var saida = window.document.querySelector('section#saida');
    var estacao = '';

    switch(mes.toUpperCase()) {
        case 'DEZEMBRO': case 'JANEIRO': case 'FEVEREIRO':
            estacao = 'INVERNO';
            break;
        case 'MARÇO': case 'ABRIL': case 'MAIO':
            estacao = 'PRIMAVERA';
            break;
        case 'JUNHO': case 'JULHO': case 'AGOSTO':
            estacao = 'VERÃO';
            break;
        case 'SETEMBRO': case 'OUTUBRO': case 'NOVEMBRO':
            estacao = 'OUTONO';
            break;
         default:
            estacao = 'INDEFINIDA'                 
    }

    saida.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <strong><mark>${estacao}</mark></strong>.</p>`

}