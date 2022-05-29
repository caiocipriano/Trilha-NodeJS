const numeros1 = [1,2,3]

//Remover no Inicio
numeros1.shift()

//Remove o ultimo
numeros1.pop()

//Remover no meio, comerçando pelo indice(param1) e a quantidade(param2)
numeros1.splice()

//Esvaziando um array
const numeros2 = [1,2,3]
numeros2.length=0
//Esvaziando um array.1
numeros2.splice(0, numeros2.length)

//Esvaziando um array.2 !!!Não performática!!!
while(numeros2.length>0){
    numeros2.pop();
}