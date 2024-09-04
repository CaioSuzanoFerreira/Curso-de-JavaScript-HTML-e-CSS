
const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
});

rl.question('Qual a sua idade? ', (idade)=> 
    {
        let idadeNum = parseInt(idade);

        if (idade < 18)
            {
                console.log('Você é menor de idade');
            }
        
            else
            {
                console.log('Você é maior de idade');
            }

            rl.close();
    })