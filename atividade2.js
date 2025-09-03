 const ano = Number(prompt(`quantos anos você tem?`));

 //processamento

 const dias = 365*ano;
 const meses = 12*ano;
 const horas = dias*24;
 const  minutos = horas * 60;

 // saida

 console.log(`sua idade é ${ano} anos, ${meses}meses, ${dias} dias, ${horas} horas e ${minutos} minutos`)

 //entrada

const nota1 = Number(prompt(`fale sua nota do seu primeiro trimestre`));
const nota2 = Number(prompt(`fale sua nota do seu segundo trimestre`));
const nota3 = Number(prompt(`fale sua nota do seu terceiro trimestre`));

//processamento

const media = (nota1+nota2+nota3)/3;

//saida
console.log(`sua nota final é ${media.toFixed(1)}`)

const valoReal = prompt(`valor do real (use virgula:)`);
const valordolar= Number(prompt("valor do Dolar:"));

const brl= Number(valoReal.replace(",","."));
const contadolar= brl /valordolar;

console.log(`R$: ${brl} dl$: ${contadolar} `)

const t= prompt("digite o tempo (hh:mm:ss)");

const [hh,mm,ss] = t.split (":").map(Number);
const total = hh*36000+mm*60+ss

console.log(`${t}=${total}`)

const idade = Number(prompt("sua idade"));

if (Number.isNaN(idade) || idade < 0){
    console.log("idade invalida")

}

else{
    if (idade >= 18){
        console.log ("maior de idade")
    
    }
    else{
    console.log ("menor de idade")   
    }
}

const temp = Number(prompt("temperatura atual (c)"));

if (Number.isNaN (temp)){
    console.log("valor invalido")
}
else if (temp < 0){
    console.log("muito frio")
}
else if (temp < 20){
    console.log("frio")
}
else if (temp < 30){
    console.log("agradavel")
}
else {
    console.log("quente")
}


const dinheiro =Number(prompt("dinheiro na carteira:"));
const temcartao= prompt("tem cartão (s/n)") ==="s"

if ((dinheiro>= 10 || temcartao  ) && dinheiro >=0){
    console.log("voce consegue compra um lanche.")
}
 else {
    console.log("nao vai rolar agora!")
 }
 
 const logado = true 
 if (!logado) {
    console.log ("faça login")
 }
    
 //operadores ternarios cond ? x : y

 //condição ? valorseverdadeiro :  valorsefalso

const idade = number(prompt("digite sua idade"));
const tipo = idade >= 18 ? "maior de idade" : "menor de idade"

let tipo2;
if (idade >= 18){
    tipo2 = "maior de idade"
}
else {
    tipo2 = "menor de idade"
}
const n = Number(prompt("digite um numero"));
const tipo = n > 0 ? "positivo" : (n< 0 ? "negativo" : "zero")


//nota
const nota = Number(prompt("digite sua nota"));
const resultado = nota >= 6 ? "aprovado" : "reprovado";
console.log(`resultado ${resultado}`);

const a=10,b=20;
console.log(a>b? "a é maior" : "b é maior")

const  dia = prompt("dia da semana (seg,ter,qua,...):")

switch (dia){
    case "seg":
    case "ter":
    case "qua":
    case "qui":
    case "dom":
        console.log("dia util"):
        break;
        case "sab":
        case "dom":
            console.log("fim de semana")
            break;
    default
     console.log("valor invalido")
}

const farol = prompt("fale a cor do semaforo (veerde,amarelo,vermelho)");
console.log(farol ===  "verde" ? "siga" : ("amarelo" ? "espere" : ( "vermelho" ? "pare" : "valor invalido" )));

const nota = Number(prompt("escreva sua nota"));

if (Number.isNaN (nota) || nota < 0){
    console.log("valor invalido")
}
else if(nota <60){
    console.log("reprovado")

}
else if(nota >= 60){
    console.log("recuperação")

}
else if(nota > 80 || nota === 100){
    console.log("aprovado")

}

else {
   console.log("valor invalido") 
}
