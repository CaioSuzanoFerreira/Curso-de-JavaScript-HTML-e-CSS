const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
});

rl.question('Qual o seu número ', (numero)=> 
    {
        let num = parseInt(numero);

        if (num % 2 != 0)
            {
                console.log('O número é ímpar');
            }
        
            else
            {
                console.log('O número é par');
            }

            rl.close();
    })

