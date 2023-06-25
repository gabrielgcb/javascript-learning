let txtNumero = window.document.getElementById('txtn');
let saida = window.document.getElementById('numerosAdicionados');
let arrayNumeros = [];
let soma = 0;
let respostas = window.document.getElementById('res');

function adicionarNumeros() {
    if(txtNumero.value != '') {
        let numero = Number(txtNumero.value);
    
        respostas.innerHTML = null;
    
        if(arrayNumeros.includes(numero)) {
            window.alert("Valor inválido ou já encontrado na lista");
        } else {
            let item = window.document.createElement('option');
            arrayNumeros.push(numero);
            item.text = `Valor ${numero} adicionado`;
            saida.appendChild(item);
            soma += numero;
        }
    } else {
        window.alert("Valor inválido ou já encontrado na lista");
    }
}

function realizarCalculos() {
    if(arrayNumeros.length != 0) {
        respostas.innerHTML = `<p>Ao todo, temos ${arrayNumeros.length} número(s) cadastrados.</p>`;
        respostas.innerHTML += `<p>O maior valor informado foi ${Math.max(...arrayNumeros)}.</p>`;
        respostas.innerHTML += `<p>O menor valor informado foi ${Math.min(...arrayNumeros)}.</p>`;
        respostas.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        respostas.innerHTML += `<p>A média dos valores digitados é ${soma/arrayNumeros.length}.</p>`;
    } else {
        window.alert("Adicione valores antes de finalizar!");
    }
}

function limparValores() {
    respostas.innerHTML = null;
    saida.innerHTML = null;
    arrayNumeros = [];
    soma = 0;
}

