const validator = {
   isValid: (creditCarNumber) =>{
   //1ro se revierte los numeros de la tarjeta
   const reverNum = creditCarNumber.split("").reverse();
   //se crea la variable para que se acumule el resultado y la funcion para recorrer el array
   let sumaTotal = 0;
   for ( let i in reverNum){
      let newNumber = parseInt(reverNum[i]);
   // se multiplica separa los numeros pares 
     if((parseInt(i) + 1) % 2 ==0){
   //los numeros pares se le resta 9 para obtener la suma de los numeros 
        if((newNumber * 2) > 9){
             newNumber = (newNumber * 2) - 9;
    //ek resto de los numeros pares se multiplica por 2       
          } else{
            newNumber = newNumber * 2;  
            } 
    // se van sumando y colocando en la variable            
       } 
        sumaTotal= (sumaTotal) + (newNumber);  
        
    }  
    return (sumaTotal % 10) ===0;  
   },   
   //mascara 
      
   maskify:(creditCarNumber)=>{
    let nmaskify = "";
    for (let i = 0; i < creditCarNumber.length; i++){
       if (i<= creditCarNumber.length -5){
          nmaskify = nmaskify + "#";
       } else{
          nmaskify = nmaskify + creditCarNumber[i];
       }
       
    }
     return nmaskify;
 }
}
  

        
export default validator;
