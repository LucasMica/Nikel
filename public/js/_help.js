const nome = "Lucas"; //não muda
let nome2 = "Lucas" //pode mudar
let pessoa = {
    nome: "Lucas",
    idade: 20,
    trabalho: "Estuda"
}

let nomes = ["Lucas", "Marcos", "Isadora"]
let pessoas = [

    {
        nome: "Lucas",
        idade: 20,
        trabalho: "Estuda"
    },

    {
        nome: "Lucas Oliveira",
        idade: 20,
        trabalho: "Estuda"
    },

    {
    nome: "Lucas michaelsen",
    idade: 20,
    trabalho: "Estuda"
},

];

pessoas.push({
    nome: "godofredo",
    idade: 30,
    trabalho: "Lixeiro"
})

console.log(pessoas)

console.log(pessoa)
console.log(pessoa.nome)

pessoa.idade = 12

console.log(pessoa.idade)

alterarNome();
recebeEAlteraNome("Arthur");
imprimirPessoa(pessoa);

imprimirPessoa({
    nome: "Rodolfo",
    idade: 20,
    trabalho: "mendigo"
});

imprimirPessoas();

alert(); //emite um alerta

function alterarNome() {
    nome2 = "Maria Camargo"
    console.log("Nome depois de mudar de novo a let " + nome2)
}

function recebeEAlteraNome(novoNome) {
    nome2 = novoNome
    console.log("Novo nome da let " + nome2)
}

function imprimirPessoa(pessoa) {
    console.log("nome " + pessoa.nome);
    console.log("idade " + pessoa.idade);
    console.log("trabalho " + pessoa.trabalho);
}

function imprimirPessoas() {
    pessoas.forEach ((p) => {
        console.log(p.nome)
        console.log(p.idade+1000)
    })
}
