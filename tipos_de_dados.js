//let é usada para declarar variáveis apenas dentro de um arquivo ou seja tem um escopo local e pode ter seus valores alterados posteriormente

let idade = 30;

//float ou ponto flutuante é usado para números decimais, para algoritimos que requerem mais precisão

let preco = 99.99;

//console.log é usado para imprimir uma mensagem no console

console.log("Número (inteiro):", idade);

console.log("Número (ponto flutante):", preco);


//string representa caracteres e textos, são definidas por aspas simples ou duplas

let nome = "João";

let saudacao = "Olá mundo";

console.log("String:", nome);

console.log("String:", saudacao);


//booleanos são valoros que retornam verdadeiro ou falso

let estaLogado = true;

let maiorDeIdade = false;

console.log("Boolean (verdadeiro):", estaLogado);

console.log("Boolean (falso):", maiorDeIdade);


//undefined é uma variável declarada sem um valor definido

let endereco;
console.log("undefined:", endereco);


//null é usado para indicar uma variável vazia intencionalmente vazia no momento

let salario = null;

console.log("Null:", salario);


//Symbol é utilizado para criar propriedades únicas de objetos mesmo tendo a mesma descrição

let id = Symbol("id");

console.log("Symbol:", id.toString());


//BigInt é utilizado para números inteiros muito grandes que não podem ser representados pelo number, são escritos com um 'n' no final
//para diferenciá-los dos números tipo Number

let numeroGrande = 215651145145154541556489n;

console.log("BigInt", numeroGrande);