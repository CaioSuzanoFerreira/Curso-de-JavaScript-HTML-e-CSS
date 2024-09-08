 for (let i = 1; i <= 5; i++)
    {
        console.log("Número " + i + ": " + i)
    }
    
////////////////////////////////
for (let i = 5; i >= 1; i--)
    {
        console.log("Número contagem regressiva " + i + ": " + i)
    }

////////////////////////////////////
let soma = 0;

for(i = 1; i<=5; i++)
    {
        soma += i
    }

console.log(`A soma dos números de 1 a 5 é: ${soma}`)
/////////////////////////////////
const tamanhoTabela = 10;

for (let i = 1; i <= tamanhoTabela; i++)
    {
        for(let j = 1; j <= tamanhoTabela; j++)
            {
                console.log(i + "x" + j + " = " + (i*j));
            }
        
        console.log()
    }
