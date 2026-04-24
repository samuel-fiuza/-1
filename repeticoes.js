//while

/*while (condition) {
    //código se repete enquanto a condição for true
}

//contagem de 1 a 5

let contador = 1
while (contador <= 5) {
    console.log(`contagem:`, contador);

    contador++
}

//contagem regtressiva

let tempo = 10;
console.log(`iniciando contagem regressiva...`)
while (tempo > 0) {
    console.log(`${tempo}...`)

    tempo--
}
console.log(`contagem terminada`)*/


//Validação de Senha
/*const senhaCorreta = `123456`
let tentativa = ``
while (tentativa !== senhaCorreta) {
    tentativa = prompt(`Digite sua senha: `)
    if (tentatvia === senhaCorreta) {
        console.log(`senha correta`)
    } else {
        console.log(`senha incorreta`)
    }
}*/

//Somar números até ultrapassar 100

/*let soma = 0;
let numero = 1;

console.log(`Somando número até passar de 100..`)

while (soma < 100) {
    soma = soma + numero
    // ou (soma += numero)
    console.log(`${numero} Soma parcial: ${soma}`)

    numero++
}

console.log(`\n precisou de ${numero - 1} números para ultrapassar 100 :`)
console.log(`Soma final: ` + soma);*/

/*const numero = Number(prompt(`Qual número: `))
if (Number.isNaN(numero)) {
    console.log(`Digite um número valido`)
} else {
    let multiplicador = 1;
    console.log(`Tabuada do ${numero}\n`)

    while (multiplicador <= 10) {
        const resultado = numero * multiplicador
        console.log(`${numero} x ${multiplicador} = ${resultado0}`)
        multiplicador++
    }
}*/


/*let x = 10
while (x < 5) {
    console.log(`Isso não vai aparecer`)
}

let y = 10
do {
    console.log(`isso vai aparecer uma vez`)
} while (y < 5);
*/

//Menu interativo
let opcao;

do {
    console.log(`\n======Menu========`)
    console.log(`1 - ver saldo`)
    console.log(`2 - fazer depósito`)
    console.log(`3 - fazer saque`)
    console.log(`0 - sair`)
    console.log(`==================\n`)

    opcao = prompt(`Escolha uma opção:`)
    if (opcao === 1) {
        console.log(`seu saldo é de 1000,00`)
    } else if (opcao === 2) {
        console.log (`deposito feito no valor [valor indefinido]`)
    } else if (opcao === 3) {
        console.log(`Saque feito no valor de [valor indefinido]`)
    } else if (opcao === 0) {
        console.log(`Até logo`)
    } else {
        console.log(`opção invalida`)
    }
    //receba é o cara da luva de pedreiro o melhor do mundo graças a deus
} while (opcao !== `0`);

//jogo: adivinhe o número
const numeroSecreto = Math.floor(Math.random() * 10) + 1
//math.random pega números de 0.0 a 0.999...
// para não ficar incabivel, se usa *10 para ficar entre 0.0 e 9.999
//math.floor serve para arredondar o número, fazendo com que ele fique entre 0 - 9
// + 1 serve para obrigar o número ficarem entre 1 e 10
let palpite
let tentativas = 0
console.log(`Adivinhe o número entre 1 e 10`)
do {
    palpite = Number(prompt(`Seu palpite:`))
    tentativas++
    if (Number.isNaN(palpite)) {
        console.log(`Digite um número válido`)
    } else if (palpite < numeroSecreto) {
        console.log(`Muito baixo, tente novamente`)
    } else if (palpite > numeroSecreto) {
        console.log(`Muito alto`)
    } else {
        console.log(`Acertou`)
        console.log(`precisou de ${tentativas} tentativas`)
    }
} while (palpite !== numeroSecreto);