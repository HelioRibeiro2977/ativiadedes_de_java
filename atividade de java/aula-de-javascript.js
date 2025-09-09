//filter,map,find ereduce 
//filter 

//exemplo: obter os numeros pares de um array

/*const nums =[ 1,2,3,4,5,6];

const pares = nums.filter( n => n % 2 === 0);

console.log(pares)

//callback 

function digaola(nome){
      console.log("ola,"+ nome)
}
function executar(callback) {
    callback ("lucas")
}
executar(digaola);

const idades = [15,20,25,12];
const maiores = idades.filter(function (idade){
    return idade >= 18;

})
const idades = [15,20,25,12];
const maiores = idades.filter(idade => idade >= 18)
console.log(maiores)

const idades = [15,20,25,12];
const maiores = idades.filter((idade)=> {return idade >= 18})
console.log(maiores)

const produtos =[
    {id:1,nome:"camiseta",preco:30,promoção:false },
    {id:2,nome:"caneca",preco:15,promoção:true},
    {id:2,nome:"boné",preco:25,promoção:true}
    
];

//filtrar apenas os  produto em promoção
const emPromoao = produtos.filter(p => p.promocao === true);
console.log(emPromoao) 


//map

const nums = [1,2,3,4];

//map cria um novo array com o resultado da função aplicada a cada item

const dobrados = nums.map (n => n * 2);

console.log(dobrados)

const Alunos = [
    {nome: "Ana", nota: 8},
    {nome: "Bruno", nota: 6},
];
const nomes = alunos.map(a => `${a.nome} nota: ${a.nota}`)
const comAprovacao = Alunos.map(a => ({...a,aprovado: a.nota >= 7}));


//find busca o primero elemento que satfisfaz a condiçao e retorna esse elemento

const ns = [3,7,4,9];
const primeiroPar = ns.find(n => n % 2 ===0);
console.log(primeiroPar);

const produtos = [
    {id: 1,nome: "Camiseta"},
    {id: 2,nome: "Caneca"},
];
const p = produtos.find(p => p.id === 2);
console.log(p)


//reduce reduz o array a unico valor (numero, objeto, array...)

const nums = [10,20,5];
const soma = nums.reduce((acc,cur) => acc + cur, 0);
console.log(soma)

const itens =[
    {nome:"caneta",categoria:"papelaria",preco:3},
    {nome:"caderno",categoria:"papelaria",preco:15},
    {nome:"maçã",categoria:"feira",preco:2},
]
const totalPorCategoria = itens.reduce ((acc,it) => {
  const cat = it.categoria;
    if (!acc[cat]) acc[cat] =0;
     acc[cat] += it.preco;
     return acc;
})

const compras =[
    {nome:"leite",preco:5},
    {nome:"pao",preco:8},
    {nome:"mateiga",preco:12},
]
const valorTotal= compras.reduce((acumulador, itemAtual) =>{
 return acumulador + itemAtual.preco
}, 0)
*/
