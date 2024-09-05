const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
});

rl.question('Qual operação você deseja fazer (+, -, *, /) ', (operacao)=> 
    {
        
        rl.question('Qual o seu primeiro número? ', (n1) => 
            {
                rl.question('Qual o seu segundo número? ', (n2) =>
                    {
                        let num1 = parseFloat(n1)
                        let num2 = parseFloat(n2)

                        if (operacao == '+')
                            {
                                resultado = num1 + num2
                            }
                        else if(operacao == '-')
                            {
                                resultado = num1 - num2
                            }
                        else if(operacao == '*')
                            {
                                resultado = num1 * num2
                            }
                        else if(operacao == '/')
                            {
                                resultado = num1 / num2
                            }
                        else
                            {
                                console.log('Você não escolheu uma operação válida!!')
                            }

                        console.log(`A operação que você escolheu foi " ${operacao} " e o resultado foi ${resultado.toFixed(2)}`)

                        rl.close();
                    })
          
            });
    })
