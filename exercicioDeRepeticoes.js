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
for (let iP = 0; iP <= 50; iP++) {
    if (iP % 2 === 0) {
        console.log(iP)
    }
}

//advinhe um número de 1 a 100
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
} while (paplite !== numeroSecreto)