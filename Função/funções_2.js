const quadrado = function (numero)
    {
        return numero * numero;
    };

let resultado = quadrado(7);

console.log(resultado);

////////////////////////

const concatena = function(str1, str2)
    {
        return str1 + " " + str2;
    }

let mensagemCompleta = concatena("Olá", "Mundo");

console.log(mensagemCompleta);

/////////////////////////////////

const verficarSinal = function(numero)
    {
        if (numero > 0)
            {
                return "Positivo";
            }
        else if(numero < 0)
            {
                return "Negativo";
            }
        else
            {
                return "Zero";
            }
    }

let resultado1 = verficarSinal(0);

console.log(resultado1);
////////////////////////////////////////

function mediaTresNumeros(a, b, c)
    {
        return (a + b + c) / 3;
    }

let resultado2 = mediaTresNumeros(10, 20, 30);

console.log(resultado2);

//////////////////////////////////////

const multiplicar = (num1, num2) => num1 * num2;

let resultado3 = multiplicar(5, 3);

console.log(resultado3);

/////////////////////////////////////////

const numeros = [1, 2, 3 ,4 ,5 ,6, 7, 8, 9, 10]
//.filter retorna os elementos de uma array especificados em uma callback function. Neste caso vai retornar os impares
const impares = numeros.filter(numero => numero % 2 !== 0);

console.log(impares)

///////////////////////////////////////////
const frutas = ["Maçã", "Banana", "Cereja", "Damasco"];

const frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());

console.log(frutasMaiusculas);

//////////////////////////////////////////

const pessoas = 
[
    {nome: "Alice", idade: 10 },
    {nome: "Bob", idade: 30 },
    {nome: "Carlos", idade: 20}
]

const calcularMediaIdades = (pessoas) => 
    {
        //O método reduce itera sobre o elemento da array (pessoa)
        const somaIdades = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0)
        //divide pelo número de pessoas no arry usando o .lenght
        return somaIdades / pessoas.length;
    }

const mediaIdades = calcularMediaIdades(pessoas)

console.log(`A média das idades é ${mediaIdades.toFixed(2)}.`)