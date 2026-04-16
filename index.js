let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "Hello world";
console.log(minhaVariavel);

minhaVariavel = true;
console.log(minhaVariavel)

let numero = 10;
let texto = 30;

let resultado = numero + texto;
console.log(resultado);

//isso e um comentario de linha
/**
 * isso e um conetario
 * de mutiplas linhas
 */

//java e uma linguagem sensivel, nao podendo ter variaveis iguais ou em outro termo case sensitive
let nome = "Lucas";
let Nome = "Maria";
let NOME = "João";
console.log(nome);
console.log(Nome);
console.log(NOME);


//Palavras Reservadas
//let, const, var, if, else, for, wile, function, return, class, new, switch, case

//Regrasd de nomenclatura
//Pode começar com letra, _ ou $
//Pode conter letras, números, _ ou $
//não pode: começar com número
//não pode ter espcaços
//não pode: usar acentos

let nome2;
let nomeCompleto;
let _contador;
let idade2;

//nome de funções começam com verbo
function calcularMedida() {

};
function BuscarUsuario () {

};

//Tipos Primitivos
//Number - Numero
const preco = 19.9;
console.log(typeof preco);

//STRING - texto
const nome3 = "Lucas";
console.log(typeof nome3);

//BOOLEAN - verdadeiro ou falso
const ativo = true;
console.log(typeof ativo);

//Null - ausencia intencional de valor
const vazio = null;
console.log(typeof vazio);

//UNDEFINED - variável sem valor
let indefinido;
console.log(typeof indefinido);

//BIGINT - números muito grandes
const grande = 94800000000000000n;
console.log(typeof grande);

//Valores Especiais: NaN e Infinity
////INFINITY - divisão por zero
console.log(5 / 0);
console.log(-5 / 0);

//NaN (Not a Number) - operação inválida
console.log("abc" * 3);
console.log(Math.sqrt(-1));
console.log(-5 / 0)

//Checar se é NaN
console.log(Number.isNaN("abc" * 3));

function calcularTotal(preco, quantidade) {
    const total = preco * quantidade;
    if (Number.isNaN(total)) {
        console.log("Erro: preço ou quantidade inválidos");
        return 0;
    }
    return total
}

console.log(calcularTotal("abc", 2));
console.log(calcularTotal(10, 5));


//Strings e Templates Literals
// //Aspas simples, duplas ou crase
const nome4 = 'Lucas';
const Nome2 = "Maria";
const NOME2 = `João`;
////Propriedades e métodos
const nomeCompleto2 = "Lucas Ribeiro de Lacerda";
console.log(nomeCompleto2.length);
console.log(nomeCompleto2.toUpperCase());
console.log(nomeCompleto2.toLowerCase());

//TEMPLATE STRING (crase) - permite ínserir variáveis
const Nome3 = "Lucas";
const idade = 20;

console.log(`olá, meu nome é ${Nome3} e tenho ${idade} anos.`);


//Conversões de Tipo
console.log(Number("123"));
console.log(parseInt("10.9"));
console.log(parseFloat("10.9"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""))
console.log(Boolean("oi"))

const texto2 = prompt("Digite um número:");
console.log(texto2 + 5);

const numero2 = Number(prompt("Digite um número:"));
console.log(numero2 + 5);

//Operadores Aritiméticos

