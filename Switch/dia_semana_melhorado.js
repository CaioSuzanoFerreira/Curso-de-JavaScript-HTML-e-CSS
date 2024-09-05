const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
});


rl.question('Qual o dia da semana (digite 1 para domingo, 2 para segunda, e assim por diante até 7 para sábado): ', (dia)=> 
    {
        switch (dia)
        {
            case '1':
                console.log('Hoje é Domingo');
                break;
            
            case '2':
                console.log('Hoje é Segunda');
                break;

            case '3':
                console.log('Hoje é Terça');
                break;
            
            case '4':
                console.log('Hoje é quarta');
                break;

            case '5':
                console.log('Hoje é Quinta');
                break;

            case '6':
                console.log('Hoje é Sexta');
                break;

            case '7':
                console.log('Hoje é Sábado');
                break;

            default:
                console.log('Número inválido');
        }

        rl.close();
    })
