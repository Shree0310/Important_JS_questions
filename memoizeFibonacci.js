//memoizing the fibonacci
const fib2 =(n, prevValues=[])=>{
if(prevValues[n]){
	return prevValues[n];
}
let result;
	if(n<=2){
  	result= 1;
  }
  else{
  	result =  fib(n-2,prevValues) + fib(n-1,prevValues);
  }
  prevValues[n]= result;
  return result;
}
console.log(fib2(50));
