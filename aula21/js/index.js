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

const carro1 = new Carro("Chevrolet", "Ônix", 2020);
console.log(carro1);
document.getElementById("texto").innerHTML = carro1.modelo + " " + carro1.marca + " " + carro1.ano;
carro1.buzinar();