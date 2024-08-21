//como eu fiz
/*/
const readline = require("readline");

const r1 = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
})


function prompt(pergunta)
{
    return new Promise ((resolve) => 
        {
            r1.question(pergunta, (resposta) =>
                {
                    resolve(resposta);
                })
        })
}
async function recebeResposta()
{
    const nome = await prompt("Qual o seu nome? ");
    const idade = await prompt("Qual a sua idade? ");
    const cidade = await prompt("Qual a sua cidade? ");
    console.log(`Aqui estão seus dados: \nNome: ${nome}\nIdade: ${idade}\nCidade: ${cidade}`);

    r1.close()
}

recebeResposta();
/*/

//como o professor fez


const readline = require("readline").createInterface
({
    input: process.stdin,

    output: process.stdout
})

//primeiro argumento é uma pergunta feita ao usuário e o segundo é um função callback quer armazena as respostas dados
readline.question("Por favor insira seu nome: ", (nome)=>
    {
        readline.question("Por favor insira sua idade: ", (idade) => 
            {
                readline.question("Por favor insira a cidade onde você mora: ", (cidade)=> 
                    {
                        console.log(`Olá ${nome}! Você tem ${idade} anos e mora em ${cidade}.`)

                        readline.close()
                    })
            })
    })

