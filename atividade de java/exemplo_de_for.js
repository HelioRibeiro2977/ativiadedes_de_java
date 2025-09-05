// while
let i =1;

while (i <= 5){
    console.log("numero:", i);
    i++;
}

//do..while

let senha;
let tentativas= 0;
const tentativacorreta= "1234";

do{
    senha = prompt("digite a senha:");
    tentativas++;

    if(senha === tentativacorreta){
        console.log("acesso liberado")
        break;
    }
     
    if(tentativas >= 3) {
        console.log("numero maximo de tentativas")
        break;

    }
}while (true);
// for contagem

//estrutura for (inicio; condição; incremento)

for (let i = 1; i <=10;i++){
    console.log(`7 x ${i} = ${7 * i}`) 
    
    
}

// for..of
const frutas =["maçã","banana","laranja"]

for (const fruta of fruta){
    console.log("fruta",fruta )
}

//for... in
const pessoa = {nome: "lucas",idade: 25,cidade: "santo andre"}
for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}