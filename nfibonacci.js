//Fibonacci series upto n
var fibSeries= function(n){
	let n1=0, n2=1;
  for(let i=0;i<n;i++){
  	let nextNum = n1+n2;
    n1=n2;
    n2=nextNum;
    console.log(n1);
  }
  
}

fibSeries(7);
