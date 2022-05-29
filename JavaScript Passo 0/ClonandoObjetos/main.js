let pessoa = {
    nome:"caio",
    idade:19,
    rg:13149411
}

const novoObjeto= Object.assign({}, pessoa)

console.log(novoObjeto)

//Spread
const objeto2={...pessoa}
console.log(objeto2)
