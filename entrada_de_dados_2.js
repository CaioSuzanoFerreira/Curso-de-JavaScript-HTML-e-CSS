
const readline = require("readline");

const r1 = readline.createInterface
({
    input: process.stdin,

    output: process.stdout
});
//mesma coisa que o exercício anterior até aqui

//cria uma função para perguntar ao usuário
function fazerPergunta(pergunta)
{
    //usa o promise pois não se sabe quando o usuário irá responder. Promisse é um objeto usado para operações assincronas
    return new Promise((resolve) => 
    {
        //primeiro argumento faz a pergunta ao usuário e o segundo argumento é o callback com a resposta
        r1.question(pergunta, (resposta) => 
            {
                resolve(resposta);
            });        

    });

}

async function coletarRespostas()
{
    const nome = await fazerPergunta("Qual é o seu nome?");
    const corFav = await fazerPergunta("Qual é usa cor favorita?");
    const animalFav = await fazerPergunta("Qual é seu animal favorito?");
    const hobby = await fazerPergunta("Qual é o seu hobby?");
    const pratoFav = await fazerPergunta("Qual é o seu prato favorito?");

    console.log(`\nAqui estão suas respostas:
    Nome: ${nome}
    Cor favorita: ${corFav}
    Animal favorito: ${animalFav}
    Hobby: ${hobby}
    Prato: ${pratoFav}`);

    r1.close();
}
    


coletarRespostas();