function calcular() {
    var numero = Number(window.prompt("Digite um número: "));

    var resultado = window.document.querySelector('section#res');

    resultado.innerHTML = `<p>O número a ser analisado aqui será o ${numero}</p><hr>`;
    resultado.innerHTML += `<p>O seu valor absoluto é ${numero}</p>`;
    resultado.innerHTML += `<p>A sua parte inteira é ${Math.trunc(numero)}</p>`;
    resultado.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(numero)}</p>`;
    resultado.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(numero)}</p>`;
    resultado.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(numero)}</p>`;
    resultado.innerHTML += `<p>O valor de 15.42<sup>2</sup> é ${Math.pow(numero, 2)}</p>`;
    resultado.innerHTML += `<p>O valor de 15.43<sup>3</sup> é ${Math.pow(numero, 3)}</p>`;
}
