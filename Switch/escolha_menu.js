const { escape } = require('querystring');
const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
})
console.log('Escolha uma das opções abaixo \n1 - Pizza \n2 - Hambúrguer \n3 - Salada')


rl.question('Qual das opções abaixo você deseja? ', (opcao) =>
    {
        let escolha;

        switch(opcao)
        {
            case '1':
                escolha = 'Pizza';
                break;

            case '2':
                escolha = 'Hambúrguer';
                break;

            case '3':
                escolha = 'Salada';
                break;

            default:
                escolha = '"Indefinida", por favor escolha apenas os números do menu! '
        }

        console.log(`Você escolheu a opção ${escolha}`)
        
        rl.close();
    })
