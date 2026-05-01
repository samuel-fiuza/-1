//Filter
/*
//forEach

const frutas = [`Maçã`, `Banana`, `Uva`]
frutas.forEach((element, index) => {
    console.log(index, element)
})

for(let i = 0; i < frutas.lenght; i++) {
    console.log(i, frutas[i])
}



const alunos = [`Lucas`, `Maria`, `João`]

alunos.forEach((nome, index) => {
    console.log(`${index + 1} aluno: ${nome}`)
})


//callback

Array.metodo((element, index, array) => {

})

const people = [
    {name: `Lucas`,age: 35},
    {name: `Maria`,age: 17},
    {name: `João`,age: 18},
    {name: `Ana`,age: 22},
]

const novoArray = array.filter((element)=> {
    return condition
})


const maiores = people.filter((person) => {
    return person.age >= 18
})
console.log(maiores)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
const pares = numeros.filter((numero) => {
    return numero % 2 === 0
})
console.log(`numeros pares: ${numeros}`)


//Crie um array com vários números
//Use filter para mostrar apenas os números maiores que 50

const nums = [10, 55, 80, 20 ,100]
const maiores = nums.filter((maior) => {
    return maior > 50
})
console.log(`numeros maiores que 50: ${maiores}`)


//Map

const novoArray = Array.map((element) => {
    return novoValor
})


const nomes = people.map((person) => {
    return person.name.toUpperCase
})
console.log(nomes)


const numeros = [ 1, 2, 3, 4, 5]

const dobro = numeros.map((numero) => {
    return numero * 2
})
console.log(dobro)


const produtos = [`Mouse`, `Teclado`, `Monitor`]
const frases = produtos.map((produto) => {
    return `Produtos: ${produto}`
})
console.log(frases)

const pessoas = [
    {nome: `Lucas`, idade: 35},
    {nome: `Maria`, idade: 17},
]
const resultados = pessoas.map((pessoa) => {
    return {
        nome: pessoa.nome,
        maiorIdade: pessoa.idade >= 18
    }
})
console.log(resultados)

//Use map para tranformar um array de preços em preços de com desconto de 10%
const precos = [100, 200, 300]
const descontos = precos.map((desconto) => {
    return desconto * 0.9
})
console.log (`preço original: ${precos}. preços descontados ${descontos}`)

//Use map para tranforma [1, 2, 3, 4] em [`Número 1`, `Número 2`...]
const nume = [1, 2, 3, 4]
const Nume = nume.map((num) => {
    return num = `Número ${num}`
})
console.log(`${Nume}`)



//Find
const item = array.Find((element) => {
    return condição
})


const people = [
    {name: `Lucas`,age: 35},
    {name: `Maria`,age: 17},
    {name: `João`,age: 18},
    {name: `Ana`,age: 22},
]

const maria = people.find((person) => {
    return person.name === `Maria`
})
console.log(maria)


//Encontrar números
const numeros = [5, 10, 15, 20, 25]
const maiorDezoito = numeros.find((dezoito) => {
    return dezoito > 18
})
console.log(maiorDezoito)


const usarios = [
    {id:1, nome:`Lucas`},
    {id:2, nome:`Maria`},
    {id:3, nome:`João`},
]
const usuario = usarios.find((u) => {
    return u.id === 2
})
console.log(usuario)


//encontre o primeiro número negativo do array
const numeros = [5, 8, -2, 10, -7]
const negativos = numeros.find((neg) => {
    return neg < 0
})
console.log(negativos)


//reduce
array.reduce((acc, element) => {
    return novoACC
}, valorInicial)


const numeros = [10, 20, 30]
const soma = numeros.reduce((acc, num) => {
    console.log(`ACC:`, acc)
    console.log(`Número atual:`, num)
    return acc + num
}, 0)
console.log(soma)


const people = [
    {name: `Lucas`,age: 35},
    {name: `Maria`,age: 17},
    {name: `João`,age: 18},
    {name: `Ana`,age: 22},
]

const totalIdade = people.reduce((acc, persona) => {
    return acc + persona.age
}, 0)
console.log(totalIdade)

const nomes = people.reduce((acc, person) => {
    return acc + " " + person.name
}, "")
console.log(nomes)


//Multiplicar números

const numeros = [2, 3, 4]
const mult = numeros.reduce((acc, mul) => {
    return acc * mul
}, 1)
console.log(mult)

//Somar preços de produtos

const carrinho = [
    {produto:`Mouse`, preco:50},
    {produto:`Teclado`, preco:100},
    {produto:`Monitor`, preco:900},
]
const soma = carrinho.reduce((acc, som) => {
    return acc + som.preco
}, 0)
console.log(soma)
*/

//use reduce para comparar o numero de letras
const palavras = [`oi`, `JavaScript`, `html`]

const palavra = palavras.reduce((acc, m) => {
    return acc + m.length
}, 0)
console.log(palavra)