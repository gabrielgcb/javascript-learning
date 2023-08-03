const lista = ["Gabriel", "Bispo", 22, "Estudante"];

lista.pop(); // remove último elemento 
lista.push("Engenheiro de software"); // adiciona um elemento
lista.shift(); // remove o primeiro item
lista.unshift("Gabriel"); // adiciona na primeira posição

document.getElementById("texto").innerHTML = lista.join(" - ");
