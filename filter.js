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
*/

/*
const alunos = [`Lucas`, `Maria`, `João`]

alunos.forEach((nome, index) => {
    console.log(`${index + 1} aluno: ${nome}`)
})
*/

//callback
/*
Array.metodo((element, index, array) => {

})
*/
const people = [
    {name: `Lucas`,age: 35},
    {name: `Maria`,age: 17},
    {name: `João`,age: 18},
    {name: `Ana`,age: 22},
]
/*
const novoArray = array.filter((element)=> {
    return condition
})
*/

/*
const maiores = people.filter((person) => {
    return person.age >= 18
})
console.log(maiores)
*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
const pares = numeros.filter((numero) => {
    return numero % 2 === 0
})
console.log(`numeros pares: ${numeros}`)