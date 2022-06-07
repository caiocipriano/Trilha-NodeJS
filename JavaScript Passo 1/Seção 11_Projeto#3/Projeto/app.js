const Reader = require('./Reader')

var leitor = new Reader()


async function main(){
    const user = await leitor.Read("./users")
    console.log(user)
}

main()