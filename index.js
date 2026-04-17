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
console.log(2 + 3) //soma
console.log(5 - 2) //subtracão
console.log(4 * 2) //mutiplicacão
console.log(10 / 2) //divisão
console.log(10 % 3) //resto da divisão
console.log(2 ** 3) //potencia

//segue principios matematicos
console.log(2 + 3 * 4);
console.log((2 + 3) *4);

//operadores de comparacão
console.log(5 == "5"); //true -> valores são iguais (após conversão)
console.log(5 == 5); //true -> valores são iguais

console.log(5 === "5"); //false -> tipos diferentes (number vs string)
console.log(5 === 5); //true -> valor E tipos iguais

console.log(5 != "5"); //false -> valores NÃO são diferentes (após a conversão)
console.log(5 != 7); //verdadeiro -> valores são diferentes

console.log(5 !== "5"); //verdadeiro ->SÃO diferentes (tipos diferentes)
console.log(5 !== 5); //false -> NÃO são diferentes (identicos)

console.log(!true);
console.log(!false);

const idade3 = 15;
console.log(idade3 >= 18);
console.log(!idade3 >= "18");

const NOME3 = "";
const nomeVazio = NOME3 === ""
console.log(nomeVazio)

const nomeNaoVazio = NOME3 !== "";

console.log(!!true);

//Estrutura Sequencial (Entrada -> Processamento -> Saída)

//Entrada
const nome6 = prompt("Digite seu nome:")
//Processamento
//Saída
console.log("Olá," + nome6 + "!");

//Entrada Soma de dois números
const n1 = Number(prompt("Digite o rpimeiro número")); 
const n2 = Number(prompt("Digite o segundo número"));
//processamento
const soma = n1 + n2;
//Sáida
console.log ("Resultado: " + soma);

//Dobro de um número
const n3 = Number(prompt("digite um número"));
const dobro = n3 * 2;
alert(`O dobro de ${n3} é ${dobro}`)

//Média de duas notas
const nota1 = Number(prompt("Primeira Nota: "));
const nota2 = Number(prompt("Segunda Nota: "));

const media = (nota1 + nota2) / 2

alert(`A média da nota: ${media.toFixed(1)}`)
if (media <= 5) {
    alert(`Parabéns, voce não é inteligente, está reprovado`)
 } else {
    alert(`Parabéns, sua média é ${media} voce passou!`)
};

const anos = Number(prompt("Dígite sua idade em anos: "));
const meses = anos * 12;
const dias = anos * 365;
const horas = anos * 24;
const minutos = anos * 60;
console.log(`idade informada: ${anos} anos`);
console.log("--------------------");
console.log(`meses: ${meses}`);
console.log(`dias: ${dias}`);
console.log(`horas: ${horas}`);
console.log(`minutos: ${minutos}`);
alert(`meses: ${meses} dias: ${dias} horas: ${horas} minutos: ${minutos}`);

//Celsius -> Fahrenheit
//Converter Temperatura de Celsius para Fahrenheint

//Fórmula: F = (C x 9/5) + 32

const Celsius = Number(prompt("Temperatura em Celsius:"));
const Fahrenheint = (Celsius * 9/5) + 32;
console.log(`Temperatura em C informada ${Celsius}C`);
console.log(`temperatura em Fahrenheints: ${Fahrenheint}`);
alert(`Temperatura em F: ${Fahrenheint}F`);
if (Fahrenheint >= 77) {
    alert(`tá quente meu patrão`)
} else {
    alert(`tá suave meu nego`)
}
