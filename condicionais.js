//JavaScript: Condicionais(if, else, operadores lógicos)
const idade = 20
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