let valores = [10, 5, 9, 15, 22, 30, 33, 40];

/*for(let posicao = 0; posicao < valores.length; posicao++) {
    console.log(valores[posicao]);
}*/

for(let posicao in valores) {
    console.log(valores[posicao]);
}

let posicao = valores.indexOf(22);
if(posicao == -1) {
    console.log("o valor não está no array...")
} else {
    console.log(`o valor está na posição ${posicao}`);
}
