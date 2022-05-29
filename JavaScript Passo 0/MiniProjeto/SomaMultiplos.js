function somaMultiplos(num){
   let multplo3  = 0
   let multplo5  = 0
    for(let i = 0; i < num; i++){
        if(i % 3 == 0){
         multplo3 += i;
        }
        if(i % 5 == 0){
             multplo5+= i;
         }
    }
    console.log(multplo3+multplo5)
 
 }

somaMultiplos(20)
