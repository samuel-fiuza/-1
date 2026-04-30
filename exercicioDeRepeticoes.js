//Basicos
//1 contando de 1 até 10
console.log(`contando de 1 a 10\n`)
for (let i = 1; i <=10; i++) {
    console.log(`Número: ${i}`)
}

//2 tabuada em números

const n1 = Number(prompt(`Tabuada de qual número?`))
if (Number,isNaN(n1)) {
    console.log(`Caracterer invalido, Digite um número`)
} else {
    console.log(`\nTabuada do ${n1}\n`)

    for (let ix = 1; ix <=10; ix++) {
        const resultado = n1 * ix
        console.log(`${n1} x ${ix} = ${resultado}`)
    }
}

//Soma dos Primeiros N números naturais
const numN = Number(prompt(`Dígite um Número N`))
let soma = 0
for(let iN = 1; iN <= numN; iN++) {
    soma += iN
}
console.log(`Soma de N números naturais: ${soma}`)

//Exibir os números pares de 1 a 50
for (let iP = 1; iP <= 50; iP++) {
    if (iP % 2 === 0) {
        console.log(iP)
    }
}

//contagem regressiva
let CR = Number(prompt)
while (CR > 0) {
    console.log(`${CR}...`)
    CR--
}
//advinhe um número de 1 a 100
/*
const numeroSecreto = Math.floor(Math.random() * 100) + 1
let palpite
let tentativas
console.log(`Adivinhe o número entre 1 e 100`)
do {
    palpite = Number(prompt(`Seu palpite:`))
    tentativas++
    if (Number.isNaN(palpite)) {
        console.log(`Digite um número válido`)
    } else if (palpite < numeroSecreto) {
        console.log(`Menor que o número gerado, tetne novamente.`)
    } else if (palpite > numeroSecreto) {
        console.log(`Maior que o número gerado`)
    } else {
        console.log(`Acertou`)
        console.log(`Precisou de ${tentativas} tentativas`)
    }
} while (palpite !== numeroSecreto);
*/
//Nível Avançado
//1 Soma do dígitos de um número

let SNN = Number(prompt(`Dígite um número interio positivo`))

let somaN = 0
while (SNN > 0) {
    let digito = SNN % 10;
    somaN += digito;

    SNN = Math.floor(SNN/10);
}
console.log(`Somas do dígitos: ${somaN}`)

//Fatorial de um número
let numero = Number(prompt(`digite um número calabreso`))
let fatorial = 1
for (let  iF = 1; iF <= numero; iF++) {
    fatorial *= iF
}
console.log(`${numero}! = ${fatorial}`)

//Inverter um número