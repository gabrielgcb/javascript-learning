function calcularIdade() {
    var anoNasc = Number(window.prompt("Em que ano você nasceu"));
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - anoNasc;
    var resultado = window.document.getElementById('res');
    if(idade >= 0) {
        resultado.innerHTML = `Quem nasceu em ${anoNasc} vai completar <strong>${idade}</strong> anos em ${anoAtual}`;
    } else {
        window.alert("[ERRO] Verifique a idade e tente novamente.");
    }
    
}