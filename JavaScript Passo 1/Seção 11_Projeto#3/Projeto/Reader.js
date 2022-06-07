const  fs = require("fs");
const util = require("util")

class Reader{

    //Async/Await para retornar dados e salva na var

    constructor(){
        this.reader=util.promisify(fs.readeFile)
    }

    async Reader(filepath){
        return await this.reader(filepath,"utf-8")
    }

    //CallBack
    /*Read(filepath){
       fs.readerFile(filepath,"utf-8",(erro,data)=>{
           if(erro){
               console.log(erro)
           }else{
                console.log(data)
           }
       })
    }*/

}

module.exports=Reader