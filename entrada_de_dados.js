//readline e require são módulos do Node.js

//createInterface é usado para interagir com o terminal

const readline = require("readline");

const r1 = readline.createInterface
({
    //representa onde recebe os dados e armazena
    input: process.stdin,
    //representa a saída de dados e onde exibe 
    output: process.stdout
});

//Usado para fazer pergunta ao usuário. O primeiro parâmetro(antes da vírgula) é a pergunta em si e o segundo é o callback que é
//a resposta do usuário
r1.question("Qual é o seu nome? ", (resposta) => 
{
    //dentro da função callback, "resposta" é onde está armazedo o que o usuário digitou
    console.log(`Olá ${resposta}!`);

    //no final é fechado o programa para que ele não fique pendente indefinidamente.
    //também sinaliza que conclui a intereção com o usuário fazendo com que o programa encerre naturalmente
    r1.close();

})