//For In 
const celular ={
    ram:6,
    armazenamento:128,
    processador:'snapdragon 865'
}

for (let key in celular) {
        console.log(key,celular['armazenamento']);
    }

//Em Arrays
const pessoa=['Caio', 19 ,'Back-End']

for (let key in pessoa){
    console.log(key, pessoa[key])
}

