//check prime or not
var isPrime = function(num){
	if(num<1){
  	return false;
  }
 for(let i=2;i<Math.sqrt(num);i++){
 	if(num%i==0){
  	return false
  }
  
 }
 return true;
}

let num4 = 11;
console.log(isPrime(num4));
