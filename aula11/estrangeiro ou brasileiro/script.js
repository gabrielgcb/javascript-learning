function verificar() {
    var país = window.document.getElementById('txt1').value;
    var resultado = window.document.getElementById('res');
    if(país === 'Brasil') {
        resultado.innerText = 'Você é brasileiro!';
    } else {
        resultado.innerText = 'Você é estrangeiro!';
    }
}