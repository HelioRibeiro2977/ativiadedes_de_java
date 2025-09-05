//entrada
/*const numero = Number(prompt("insira um numero:"));
//processo

if(Number.isNaN(numero)) {
   console.log("valor invalido")
   
}

else{
    if(numero > 0 ){
        console.log("numero positivo")
    
    }
    else{
        console.log("numero negativo")
    }
   
}

console.log(Number.isNaN(numero)? "valor invalido": (numero > 0 ? "numero positivo" : "numero negativo" ));

const numero2 = Number(prompt("insira um numero:"));

console.log (Number.isNaN(numero2)? "valor invalido" :( numero2 % 2 === 0 ? "par" : "impar"))


const numero1 = Number(prompt("insira primeiro numero"));
const numero2 = Number(prompt("insira segundo numero"));

const operador = prompt("insira um operador (*,/,-,+)");

if (Number.isNaN(numero1) || Number.isNaN(numero1)){
 console.log("valores invalidos")
}
else{
switch (operador) {
    case "/":
        if(numero2 === 0){
            console.log("não é possivel fazer uma divisão por 0 ")

        }
        else{
            console.log("Resultado", numero1 / numero2)
        }
         break
    case "+":
        console.log("Resultado", numero1 + numero2)
         break   
    case "-":
        console.log("Resultado", numero1 - numero2)
         break
    case "*":
        console.log("Resultado", numero1 * numero2)
        break
         
    default:
console.log("operador invalido")
        break;
}
}
*/
const n1 = Number(prompt("digite o primero numero"));
const n2 = Number(prompt("digite o segundo numero"));
const n3 = Number(prompt("digite o terceiro numero"));
 
if (Number.isNaN(n1,n2,n3)){
    alert("valor não valido")
}
else if (n1 > n2 && n1 > n3){
 console.log("primeiro numero é o maior")
}
else if (n2 > n1 && n2 > n3){
    console.log("segundo numero é o maior")
   }
   else if (n1 === n2 && n1 === n3){
    console.log("todos são iguais")
   }
else{
    console.log (("terceiro numero é o maior" ))
}

let secreto = math.floor(math.random () * 100) +1;
console.log(secreto)

let tentativas2;
while (tentativas !== secreto){
    tentativas = Number(prompt("adivinhe o numero entre 1 e 100"))
    if (tentativas > secreto){
        alert("tente um numero menor!")
        
    }
    else if (tentativas < secreto){
            alert("tente um numero maior!")
        }
        else{
            alert("voce acertou!!!!")
        }
}




const valor = number(prompt("digite valor da compra:"));
const desconto = 0.1
if (number.isNaN(valor) || valor < 0){
alert ("valor invalido")
}
else{
    if(valor> 100){
        const valordescon = valor * desconto;
        console.log(`valor de final é ${valor-valordescon}`)

    }
     else{
        console.log(`valor de final é ${valor}`)

    }
     

}
