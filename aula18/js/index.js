// Inserindo um texto no parágrafo
document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS!</b>";

alert("Oi isso é um alerta!");

console.log("Oi isso é um console.log");

const carro = {
    marca: "ford",
    modelo: "ka",
    cor: "branco",
    ano: 2020,
    placa: "ABC-4435", 

    buzinar: function () {
        alert("Biiiiiiiiii");
        console.log("Chamou função buzinar() do objeto carro")
    },

    exibirInfos: function() {
        alert("Marca: " + this.marca + "\nModelo: " + this.modelo);
        console.log("Chamou função exibirInfos() do objeto carro");
        return "Marca: " + this.marca + "\nModelo: " + this.modelo; 
    }
};

console.log(carro);
console.log(carro.exibirInfos);

