// Váriaveis, são um espaço na memória para guardar algum valor
let pesoPeca = 100

// pesoPeca - Camel Case
// peso_peca - Snake Case
// PesoPeca - Pascal Case

if(pesoPeca > 100) {
    console.log("Peso maior que 100g, logo, podemos cadastrar a peça!!!")
} else {
    console.log("Peso insuficiente, não é possível cadastrar.")
}

let numeroPecas;

numeroPecas = 10;
// Number

if(numeroPecas < 10) {
    console.log("Ainda há espaço na caixa, podemos cadastrar a peça")
} else {
    console.log("Não há espaço disponível na caixa")
}


let nomePeca = 'Di'

// ASCII Table

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length < 3) {
    console.log("Nome de peça muito curto, não é possível cadastrar")
} else {
    console.log("Nome de peça adequado, podemos cadastrar")
}

