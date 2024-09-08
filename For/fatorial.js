const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
})

rl.question("Qual número você deseja saber o fatorial? ", (fatorial) => 
    {
        let fatorialNum = parseFloat(fatorial)
        let resultado = 1
        
        for (fatorialNum; fatorialNum != 1; fatorialNum--)
            {
                resultado *= fatorialNum 
            }
        console.log(`Seu número fatorial é ${resultado}`);

        rl.close();
    })