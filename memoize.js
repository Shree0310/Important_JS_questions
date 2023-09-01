/memoize a fibonacci fn
var fib = (n)=>{
	let n1=0, n2=1, nextTerm;
  for(let i=0; i<n;i++){
  	nextTerm = n1+n2;
    n1=n2;
    n2= nextTerm;
    console.log(n1);
  }
}
/* var startTime = performance.now()
console.log(fib(5));
var endTime = performance.now();
console.log(endTime-startTime); */

var memoize = (fun) =>{
let cache = {}; 
	return function(...args){
  let n = args[0];
  	if(n in cache){
    	return cache[n];
    }
    else{
    	let result = fun(n);
      cache[n] = result;
    }
  }
console.log(cache);
}

const efficient = memoize(fib);
console.log(efficient(5));
