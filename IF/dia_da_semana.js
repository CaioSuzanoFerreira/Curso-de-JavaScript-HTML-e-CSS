const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
});

rl.question('Qual é o dia da semana? ', (diaSemana)=> 
    {
        if (diaSemana == 1)
            {
                console.log("Hoje é domingo");
            }
        else if (diaSemana == 2)
            {
                console.log("Hoje é segunda");
            }
        else if (diaSemana == 3)
            {
                console.log("Hoje é terça");
            }
        else if (diaSemana == 4)
            {
                console.log("Hoje é quarta");
            }
             else if (diaSemana == 5)
            {
                console.log("Hoje é quinta");
            }
             else if (diaSemana == 6)
            {
                console.log("Hoje é sexta");
            }
             else
            {
                console.log("Hoje é sábado");
            }
           
        rl.close();
    })

