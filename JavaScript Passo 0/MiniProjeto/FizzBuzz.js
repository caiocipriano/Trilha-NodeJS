function fizzBuzz(num){
    if(typeof num != 'number'){
        console.log("Não é numero")
    }else{
        for(let i = 0; i <= num; i++){
            if((i % 3 === 0) && (i % 5 === 0)){
                console.log(i,"FizzBuzz")
            }else if(i % 3 == 0){
                console.log(i,"Fizz")
            }else if(i % 5 == 0){
                console.log(i,"Buzz")
            }else if(i % 3 == 1 || i % 5 == 1){
                console.log(i, "Não divisivel")
            }
        }
    }
}

fizzBuzz(30)