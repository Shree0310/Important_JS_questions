
let a=2;
let b = 11;

let listPrime =(a,b)=>{
	let flag;
  
  for(let i=a; i<=b; i++){
    if(i==1 || i==0){
    	continue;
    }
    flag =1;
    for(let j=2;j<=i/2; j++){
    	if(i%j== 0){
      	flag= 0;
        break;
      }
    }
    if(flag== 1)
  		console.log(i);
  
  }
 
}

listPrime(a,b);
