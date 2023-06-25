function contar() {
    var txtnum = window.document.getElementById('txtn');
    var num = Number(txtnum.value);
    var resultado = window.document.getElementById('saida');
    resultado.innerHTML = `<h2>Contando de ${0} até ${num}</h2>`;

    for(var cont = 0; cont <= num; cont++) {    
        resultado.innerHTML += `${cont} `;
        resultado.innerHTML += `&#128073;`
    }
    resultado.innerHTML += `&#x1F3C1`;
}