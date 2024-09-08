const readline = require("readline");

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
})

rl.question("Qual número você quer saber se é divisível? ", (num) => 
    {
        num = parseFloat(num);

        for (let i = 1; i <= num; i++)
            {
                if (num % i === 0)
                    {
                        console.log(i);
                    }
            }
        rl.close();
    })