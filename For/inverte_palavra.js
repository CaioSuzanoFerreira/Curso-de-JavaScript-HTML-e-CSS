const { type } = require("os");
const readline = require("readline");

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
})

rl.question("Digite sua frase para ser invertida: ", (string) =>
    {
        let inverterTexto = "";

        //length -1 vai pegar o último caractere da string
        for (let i = string.length - 1; i >= 0; i--)
            {
                inverterTexto += string[i]
            }

        console.log(`Seu texto invertido: ${inverterTexto}`)

        rl.close();
    })