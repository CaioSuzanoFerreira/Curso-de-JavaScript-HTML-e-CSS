const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
})

rl.question('Insira uma nota de 0 a 100: ', (nota) => 
    {
        let numNota = parseFloat(nota);
        let resultado;
                        //Math.floor é para arrendondar a nota
        const notaFinal = Math.floor(numNota / 10);

        switch(notaFinal)
        {
            case 10:
            case 9:
                resultado = 'A';
                break;

            case 8:
            case 7:
            case 6:
                resultado = 'B';
                break;

            case 5:
            case 4:
            case 3:
                resultado = 'C';
                break;

            case 2:
            case 1:
                resultado = 'D';
                break;

            case 0:
                resultado = 'F';
                break;

            default:
                resultado = 'inválido, por favor insira uma nota válida'

        }

        console.log(`Seu resultado é ${resultado}`)


        rl.close();
    })







