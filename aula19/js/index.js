function eventoClick() {
    alert("Acionou um evento de click");
    document.body.style.backgroundColor = "yellow";
}


function eventoDblClick() {
    alert("Acionou um evento de duplo-click");
}

function virarVermelho() {
    let div = document.getElementById("bloco");
    div.style.backgroundColor = "red";
}

function virarAzul() {
    let div = document.getElementById("bloco");
    div.style.backgroundColor = "blue";
}

function adicionarTexto() {
    let p = document.getElementById("texto");
    p.append("O mouse moveu...");
}

function limparTexto() {
    document.getElementById("campoTexto").value="";
}

function mudar() {
    console.log("Valor mudou");
}

function teclaPressionada() {
    let tecla = document.getElementById("campoTexto").value;
    console.log(tecla);
}