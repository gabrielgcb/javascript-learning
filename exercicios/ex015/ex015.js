function analisar() {
    var meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez');
    var semana = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');
    var data = new Date();
    var resultado = window.document.getElementById('analise');

    resultado.innerHTML = `<p>Dia: <mark>${data.getDay()}</mark></p>`;
    resultado.innerHTML += `<p>Mês: <mark>${meses[data.getMonth()]}</mark></p>`;
    resultado.innerHTML += `<p>Ano: <mark>${data.getFullYear()}</mark></p>`;
    resultado.innerHTML += `<p>Dia da semana: <mark>${semana[data.getDay()]}</mark></p>`;
    resultado.innerHTML += `<p>Hora: <mark>${data.getHours()}</mark></p>`;
    resultado.innerHTML += `<p>Minutos: <mark>${data.getMinutes()}</mark></p>`;
    resultado.innerHTML += `<p>Segundos: <mark>${data.getSeconds()}</mark></p>`;
}