const { type } = require("os");
const readline = require("readline");

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
})

rl.question("Digite uma sequência de números separando-os por vírgulas: ", (sequencia) => 
    {
        soma = 0
        //.split é uma função que permite separar em uma array de string cada elemento por exemplo ("10, 10, 10") => ("10", "10", "10")
        let numeros = sequencia.split(",");

        for (let i = 0; i < numeros.length; i++)
            {
                //Number é uma função que transforma uma string em número por exemplo ("10") => 10
                soma += Number(numeros[i]);
                
            }

        console.log(`O resultado é ${soma}`)
        rl.close();
    })