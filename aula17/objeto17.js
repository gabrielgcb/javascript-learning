let pessoa = {
    nome: 'Gabriel', 
    peso: 65, 
    idade: 22, 
    sexo: 'M',
    engordar(p) {
        console.log('Engordou');
        this.peso += p;
    }
}

pessoa.engordar(3.6);
console.log(pessoa);