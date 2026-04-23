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