const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
});

rl.question('Qual o seu primeiro número? ', (n1)=> 
    {
        
        rl.question('Qual o seu segundo número? ', (n2) => 
            {
                num1 = parseFloat(n1);
                num2 = parseFloat(n2);

                if (num1 > num2)
                    {
                        console.log(`O número ${num1} é maior`);
                    }
                else if (num1 < num2)
                    {
                        console.log(`O número ${num2} é maior`);
                    }
                else
                    {
                        console.log(`Os números são iguais`);
                    }
        
                    rl.close();
            });
    })


