const readline = require("readline");

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
})

rl.question("Qual número você gostaria de saber a tabuáda? ", (num) => 
    {
        let numero = parseFloat(num)
        //!isNaN é uma função para verificar se é número
        if (!isNaN(num))
            {

                for (i = 0; i <= 10; i++)
                    {
                        let resultado = numero * i
                        
                        console.log(`${num} x ${i} = ${resultado}`)
                    }

            }

        else
        {
            console.log("Digite um número válido")
        }

        rl.close();
    })