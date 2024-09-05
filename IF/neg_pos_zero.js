const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
});

rl.question('Digite o número para saber se ele é positivo ou negativo: ', (n1) =>
    {
        let num1 = parseFloat(n1)

        if (num1 === 0)
            {
                console.log('O número é zero')
            }
        else if(num1 < 0)
            {
                console.log('O número é negativo')
            }
        else if(num1 > 0)
            {
                console.log('O número é positvo')
            }
        else
            {
                console.log('Não é número')
            }
        
        rl.close()
    })