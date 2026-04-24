//Nível Básico
// 1
const idade = Number(prompt(`Digite sua idade:`))
if (idade >= 18) {
    console.log(`Maior de idade`)
} else {
    console.log(`Menor de idade`)
}

//2
const maisoumenos = Number(prompt(`Digite um número:`))
if (maisoumenos > 0) {
    console.log(`número positivo`)
} else {
    console.log(`número negativo`)
}

//3
const nota = Number(prompt(`Dígite a nota do individuo:`))
if (nota >= 60) {
    console.log(`Aluno aprovado`)
} else {
    console.log(`Aluno Reprovado`)
}

//4
const numero = Number(prompt(`Digite um número:`))
if (numero > 0) {
    console.log(`Positivo`)
} else if (numero < 0) {
    console.log(`Negativo`)
} else {
    console.log(`Zero`)
}

//5
const idade2 = Number(prompt(`Digite sua idade(de novo):`))
if (idade2 <= 12) {
    console.log(`Criança`)
} else if (idade2 <= 17) {
    console.log(`Adolecente`)
} else {
    console.log(`Adulto`)
}

//6
const ImparouPar = Number(prompt(`Dígite um número`))
if (ImparouPar % 2) {
    console.log(`Par`)
} else {
    console.log(`Impar`)
}

//Nível intermediario
//Maior entre tres números
const n1 = Number(prompt(`Dígite o primeiro número`))
const n2 = Number(prompt(`Dígite o segundo número`))
const n3 = Number(prompt(`Dígite o terceiro número`))

if (n1 > n2 && n1 > n3) {
    console.log(`${n1} é o maior resultado`)
} else if (n2 > n1 && n2 > n3) {
    console.log(`${n2} é o maior resultado`)
} else if (n3 > n2 && n3 > n1) {
    console.log(`${n3} é o maior resultado`)
} else {
    console.log(`todos tem o mesmo valor`)
}

//calculadora
const n4 = Number(prompt(`Digite um número para operação`))
const operacao = (prompt(`Digite a maneira da operação: soma(+), subtração(-), mutiplicação(*) e divisão(/)`))
const n5 = Number(prompt(`Digite um número para operação`))
const soma = n4 + n5
const subtracao = n4 - n5
const mutiplicacao = n4 * n5
const divisao = n4 / n5
if (operacao === `+`) {
    console.log(`a soma de ${n4} + ${n5} = ${soma}`)
} else if (operacao === `-`) {
    console.log(`a subtração de ${n4} - ${n5} = ${subtracao}`)
} else if (operacao === `*`) {
    console.log(`a mutiplicação de ${n4} x ${n5} = ${mutiplicacao}`)
} else {
    console.log(`a divisão de ${n4} / ${n5} = ${divisao}`)
}

//desconto em compras
const valorCompra = Number(prompt(`Insira o valor da compra`))
const desconto = valorCompra * 0.10
const valorTotal = valorCompra - desconto
if (valorCompra >= 100) {
    console.log(`o valor total foi descontado ${desconto}, valor total da compra foi ${valorTotal}`)
} else {
    console.log(`o valor da compra permaneceu o mesmo ${valorCompra}`)
}

//Sistema de Login simples
const usuario = `João`
const senha = `1234`

const login = prompt(`Dígite o nome do usuario: `)
const senhaLog = prompt(`Dígite a senha de acesso: `)

if ((login === usuario) && (senhaLog === senha)) {
    console.log(`Acesso concebido`)
} else {
    console.log(`Acesso negado`)
}

//Nivel avançado
//Conversão de notas para conceito
const Nota = Number(prompt(`Dígite um Número de 0 a 100`))
let = Nota >= 90
let = Nota >= 80
let = Nota >= 70
let = Nota >= 60
let = Nota < 60
if (Nota >= 90 && Nota <= 100) {
    console.log(`Nota A`)
} else if (Nota >= 80 && Nota <= 89) {
    console.log(`Nota B`)
} else if (Nota >= 70 && Nota <= 79) {
    console.log(`Nota C`)
} else if (Nota >= 60 && Nota <= 69) {
    console.log(`Nota D`)
} else {
    console.log(`Nota F`)
}
//ano bissexto
const anoBi = Number(prompt(`Dígite um ano: `))
if ((anoBi % 4 === 0 && anoBi % 100 !== 0) || (anoBi % 400 === 0)) {
    console.log(`${anoBi} é um ano bissexto`)
} else {
    console.log(`${anoBi} não é um ano bissexto`)
}
//Calculo de IMC
const peso = Number(prompt(`Dígite seu peso(kg)`))
const altura = Number(prompt(`Digíte sua altura(m)`))
if (Number.isNaN(peso) || Number.isNaN(altura)) {
    console.log(`Dígite apenas números`)
} else if (peso <= 0 || altura <= 0) {
    console.log(`peso e altura devem ser positivo`)
} else if (altura > 3) {
    console.log(`dígite uma altura em metros`)
} else {
    const IMC = peso / (altura ** 2)
    console.log(`Seu IMC ${IMC.toFixed(2)}`)
    if (IMC < 18.5) {
        console.log(`Abaixo do peso`)
    } else if (IMC < 25) {
        console.log (`Peso normal`)
    } else if (IMC > 30) {
        console.log (`Sobrepeso`)
    } else {
        console.log(`Obesidade`)
    }
}