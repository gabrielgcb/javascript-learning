class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }

    buzinar() {
        console.log(this.modelo + " " + this.marca + " buzinou: biiiii");
    }
}

const carro1 = new Carro("Gol", "Volkswagen", 2020);

// Converter objeto para texto JSON
let texto = JSON.stringify(carro1);
document.getElementById("texto").innerHTML = texto;

// Converter texto JSON para objeto
let obj = JSON.parse(texto);
console.log(obj);
