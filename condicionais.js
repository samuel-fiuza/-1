//JavaScript: Condicionais(if, else, operadores lógicos)
/*const idade = 20
if (idade >= 18) {
    console.log("Maior de Idade");
    alert(`parabens voce nao é uma crianca`);
}

if (idade >= 18) {
    console.log("Maior de idade");
    alert(`tá maduro já meu nobre`);
} else {
    console.log("menor de idade");
    alert(`volta pro bercario`);
}

//Operaores de comparacão
const a = 10;
const b = 5;

//maior que
console.log("10 > 5:", a > b);
console.log("5 > 10:", b > a);
//menor que
console.log("5 < 10:", a < b);
console.log("10 < 5:", b < a);
//maior igual que
console.log("10 >= 5:", a > b);
console.log("5 >= 10:", b > a);
//menor igual que
console.log("5 <= 10:", a < b);
console.log("10 <= 5:", b < a);

//Operador && (E / AND)
const idade2 = 20;
const temDocumento = true;
const estaNaLista =true;

if (idade >= 18 && temDocumento && estaNaLista) {
    console.log(p`Pode Entrar`)
} else {
    console.log(`Entrada Negada`)
}
*/
//Operador || (ou / OR)

const temDinheiro = false;
const temCartão = true;
const temPix = false;

if (temDinheiro || temCartão || temPix) {
    console.log(`Pode pagar!!`)
} else {
    console.log(`Não pode pagar!!`)
}

//Funcionamento do dois jutos

const Usuario = `admin`;
const senha = `1234`;

const senhaCorreta = (senha === `1234`);
const ehAdmin = (Usuario === `admin`);
const ehGerente = (Usuario === `gerente`);

if ((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta)) {
    console.log(`Acesso liberado`)
} else {
    console.log(`acesso negado`)
}
//Outra maneira de se fazer
if ((ehAdmin || ehGerente) && senhaCorreta) {
    console.log(`Acesso liberado`)
} else {
    console.log(`Acesso Negado`)
}

const cons = prompt`digite nome de usuario`
const sen = prompt`digite a senha`

const acessoAdmin = (cons === `admin` && sen === `1234`);
const acessoUser = (cons === `user` && sen === `senha123`)

if (acessoAdmin || acessoUser) {
    console.log(`acesso concebido`)
} else {
    console.log(`acesso negado`)
}

//ifelse com mais de uma condição

const nota = 85

if (nota >= 80) {
    console.log(`Aprovado`)
} else if (nota >=60) {
    console.log(`Recuperacão`)
} else {
    console.log(`Reprovado`)
}

const temp = Number(prompt(`Temperatura atual C:`))

/*if (Number.isNaN(temp)) {
    console.log(`temperatura inválida`)
} else if (temp < 0) {
    console.log(`Abaixo de 0C`)
} else if (temp <= 15) {
    console.log(`tá frio`)
} else if (temp <= 25) {
    console.log(`tá agradavel`)
} else if (temp <= 35) {
    console.log(`tá quente`)
} else (
    console.log(`Clima de Praia`)
) */

//maneira mais organizada
if (Number.isNaN(temp)) {
    console.log(`temperatura inválida`)
} else if (temp <= 0) {
    console.log(`Abaixo de 0C`)
} else if (temp >=0 && temp <= 15) {
    console.log(`tá frio`)
} else if (temp > 15 && temp <= 25) {
    console.log(`tá agradavel`)
} else if (temp > 25 && temp <=35) {
    console.log(`tá quente`)
} else {
    console.log(`Clima de Praia`)
}

//Semáforo
const verde = `verde`
const amarelo = `amarelo`
const vermelho = `vermelho`
const semaforo = prompt(`digite a cor do semáforo`)

if (semaforo === verde) {
    console.log(`Siga`)
    alert(`Siga!`)
} else if (semaforo === amarelo) {
    console.log(`Atenção`)
    alert(`Atenção!`)
} else if (semaforo === vermelho) {
    console.log(`Pare`)
    alert(`Pare!`)
} else {
    console.log(`Reescreva a cor`)
}

//Calculadora de IMC Validada

const peso = Number(prompt(`Digite seu Peso(Kg)`))
const Altura = Number(prompt(`Altura (m)`))

if (Number.isNaN(peso) || Number.isNaN(Altura)) {
    console.log(`Digite apenas números`)
} else if (peso <= 0 || Altura <= 0) {
    console.log(`Peso e altura devem ser positivo`)
} else if (Altura > 3) {
    console.log(`Altura parece estar errada. Digite em metros (1.75)`)
} else {
    const imc = peso / (Altura ** 2)
    console.log(`Seu IMC ${imc.toFixed(2)}`)
    if (imc < 18.5) {
        console.log(`Abaixo do peso`)
    } else if (imc < 25) {
        console.log(`Peso normal`)
    } else if (imc > 30) {
        console.log(`Sobrepeso`)
    } else {
        console.log(`Obesidade`)
    }
}