for (let i = 0; i < 10; i++)
    {
        console.log(i)
    }
///////////////////////////////

const frutas = ["Maçã", "Banana", "Laranja"];

for (let i  = 0; i < frutas.length; i++)
    {
        console.log(`Fruta ${i + 1}: ${frutas[i]}`);
    }

////////////////////////////////

//array é declara a partir de colchetes
const cores = ["Vermelho", "Azul", "Verde"];
//for of itera sobre os valores de uma array
for (const cor of cores)
    {
        console.log(cor)
    }

///////////////////////////////

//variavel chamada pessoa iniciada como objeto utilizando os brackets
const pessoa = 
    {
        nome: "João",
        idade: 30,
        cidade: "São Paulo"
    };
//Loop for in é usado para iterar propriedades enumeráveis de um objeto
for (const propriedade in pessoa)
    {
        console.log(`${propriedade}: ${pessoa[propriedade]}`);
    }

/////////////////////////////

for (let i = 0; i < 10; i++)
    {
        if (i === 5)
            {
                break;
            }
        console.log(`Loop for com break ${i}`)
    }

///////////////////////////////

for (let i = 0; i < 10; i++)
    {
        if (i === 5)
            {
                continue;
            }
        console.log(i)
        console.log(`Loop com continue ${i}`)
    }