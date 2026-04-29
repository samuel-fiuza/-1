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
/*
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
*/
/*
//For
console.log(`Contando de 1 a 10\n`)
for (let i = 1; i <= 10; i++) {
    console.log(`Número: ${i}`)
}
*/

//Tabuada
/*
const n1 = Number(prompt(`Tabuada de qual número?`))
if (Number.isNaN(n1)) {
    console.log(`número invalido`)
} else {
    console.log(`\n Tabuada do ${n1}\n`)

    for (let i = 1; i <= 10; i++) {
        const resultado = n1 * i
    }
    console.log(`${n1} x ${i} = ${resultado}`)
}
*/

//Números pares de (0 a 20)
/*
for (let i = 0; i <= 20; i += 2) {
    console.log(i)
}
//outra forma
for (let i2 = 0; i2 <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i2)
    }
}
*/

//contagem regressiva em For
/*
console.log(`Contagem regressiva`)
for (let i = 10; i >= 0; i--) {
    console.log(`${i}...`)
}
*/

//Piramide (ou For dentro de For)
/*
const altura = 5
for (let linha = 1; linha <= altura; linha++) {
    let asteriscos = ``

    for (let i = 1; i <= linha; i++) {
        asteriscos += `*`
    }
    console.log(asteriscos)
}
*/

//Array (lista)
/*
const frutas = [`Maçà`, `Banana`, `Laranja`, `Uva`]

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])

console.log(frutas.length)

//for of
for (const a of frutas) {
    console.log(`-${frutas}`)
}
*/

//soma de tods os números do array
/*
const numeros = [10, 25, 8, 42, 15, 7];
let soma = 0;
for (const num of numeros) {
    soma += num;
}
console.log(`${soma}`)
*/

//Objetos
/*
const pessoa = {
    nome: `Lucas`,
    idade: 35,
    cidade: `Santo André`,
    profissao: `Professor`,
}

console.log(pessoa.nome)
//maneira que só puxa uma string
console.log(pessoa[`idade`])

//For in

                    aqui em baixo é qualquer objeto no geral
for (const chave in pessoa) {

}

const aluno = {
    nome: `Maria Silva`,
    matricula: `20223401`,
    curso: `Desenvolvedor web`,
    nota: 9.5
}

console.log(`Dados do Aluno:\n`)
for (const chave in aluno) {
    const valor = aluno[chave]
    console.log(`${chave}: ${valor}`)
}
*/
//Estoque de Produtos
/*
const estoque = {
    "notebook": 15,
    "mouse": 50,
    "teclado": 30,
    "Monitor": 8,
    "Webcam": 22,
}
console.log(`Estoque:\n`);
for (const produto in estoque) {
    const quantidade = estoque[produto]
    if (quantidade < 10) {
        console.log(`${produto}: ${quantidade} unidades (estoque baixo)`)
    } else {
        console.log(`${produto}: ${quantidade}: unidades`)
    }
}
*/
//Carrinho de compras
/*
//Array por falta de banco de dados
const carrinho = [
    {produto: "Camiseta", preco: 49.90, quantidade: 2},
    {produto: "Calça Jeans", preco: 129.90, quantidade: 1},
    {produto: "Tenis", preco: 499.90, quantidade: 1},
]

let total = 0

console.log(`Carrinho de COmpras: \n`)
for (const item of carrinho) {
    const subtotal = item.preco * item.quantidade

    total += subtotal

    console.log(`${item.produto} (${item.quantidade}x) - R$ ${subtotal.toFixed(2)}`)
}

console.log(`\n` + `=`.repeat(40))
console.log(`TOTAL: R$ ${total.toFixed(2)}`)
*/

//break
/*
const numeros = [5, 6, 7, 12, 9, 23, 19, 8, 25, 91, 36]

const procurado = 19

console.log(`Procurando o número`, procurado)

for (const num of numeros) {
    console.log(`Verificando:`, num)

    if (num === procurado) {
        console.log(`encontrado!!!`)
        break
    }
}
console.log(`loop terminou`)
*/

//Senha com limite de 3 tentativas
/*
const senhaCorreta = `abc123`

const maxTentativas = 3

for (let tentativa = 1; tentativa <= maxTentativas; tentativa++)
    {
    const senha = prompt(`Tentativa ${tentativa}/${maxTentativas} - Digite sua senha`)
    if (senha === senhaCorreta) {
        console.log(`Acesso liberado`)
        break
    } else {
        console.log(`Senha incorreta`)

        if (tentativa === maxTentativas) {
            console.log(`Conta bloqueada`)
        }
    }
}
*/

//continue
/*
for (let i =1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log(i)
}
*/

//Sistema de separação de notas
/*
const alunos = [
    {nome: "Ana", nota: 8.5},
    {nome: "Bruno", nota: 5.0},
    {nome: "Carlos", nota: 9.0},
    {nome: "Diana", nota: 4.5},
    {nome: "Eduardo", nota: 7.5},
]
console.log(`Alunos Aprovados\n`)
for (const aluno of alunos) {
    if (aluno.nota < 7) {
        continue
    }
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`)
}
*/

//Separação de Vogais
/*
const frase = prompt(`Digite uma frase:`)

const vogais = `aeiouAEIOU`

let contador = 0

let vogaisEncontradas = []

for (const letra of frase) {
    if (vogais.includes(letra)) {
        contador++
        vogaisEncontradas.push(letra)
    }
}
console.log(`\n Frase: "${frase}"`)
console.log(`vogais encontrdas: ${contador}`)
console.log(`Vogais encontradas: ${vogaisEncontradas}`)
*/

//atividades de laços de repetiçào