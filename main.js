function FirstFactorial(num) { 
 for (let i = 0; i < num; i++) {
    num*= i;
 }
  return num; 

}
   
// keep this function call here 
console.log(FirstFactorial(readline()));