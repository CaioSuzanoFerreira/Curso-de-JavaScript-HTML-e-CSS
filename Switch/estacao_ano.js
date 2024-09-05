const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
});

rl.question('Digite o mês desejado de 1 a 12 sendo (janeiro 1 e dezembro 12): ', (mes) =>
    {
        let estacao;
        switch(mes)
        {
            case '12':
            case '1':
            case '2':
                estacao = 'Verão';
                break;

            case '3':
            case '4':
            case '5':
                estacao = 'Outono';
                break;

            case '6':
            case '7':
            case '8':
                estacao = 'Inverno';
                break;
        
            case '9':
            case '10':
            case '11':
                estacao = 'Primavera';
                break;

            default:
                estacao = 'Indefinida, por favor coloque um número de 1 a 12'
        }

        console.log(`A estação é ${estacao}`);

        rl.close();
    })