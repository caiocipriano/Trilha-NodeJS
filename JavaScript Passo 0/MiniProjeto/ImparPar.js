function fizzBuzz(num){
        for(let i = 0; i <= num; i++){
            if(i % 2 === 1){
                console.log(i,"Impar")
            }else if(i % 2 == 0){
                console.log(i,"Par")
            }
        }
    }
fizzBuzz(20)