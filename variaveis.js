//var cria variáveis de escopo global, podem ser atualizadas. Estilo menos utilizado e menos recomendado

var nome = "João";

console.log(nome);

var idade = 30;

console.log(idade);

var nome = "Maria";

console.log(nome);


//let cria váriaveis dentro do escopo de bloco, não podem ser redeclaradas mas podem ser atualizadas

let idadeLet = 25;

console.log(idadeLet);

idadeLet = 26;

console.log(idadeLet);


//const é usada para declarar valores que não devem mudar ao longo do programa, ajuda a prevenir erros

const URL = "https://www.exemplo.com";

console.log(URL);

const URL_BASE_API = "https://api.exemplo.com/v1";

const CHAVE_API = "ABCDFGHIJ";

console.log("Conectando à API em:", URL_BASE_API);
console.log("Usando a chave de API:", CHAVE_API);


const MAX_USUARIOS_SALA = 10;

const MODO_DEBUG = false;

console.log("Máximo de usuários por sala:", MAX_USUARIOS_SALA);

console.log("Modo de depuração ativado:", MODO_DEBUG);