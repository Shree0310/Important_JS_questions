
//Currying
const sum = function(a){
	return function(b){
  	if(b){
    	return sum(a+b);
    }
    else {
    	return a;
    }
  }
}


const sum2 = a => b => b? sum(a+b): a;

console.log(sum2(1)(2)(3)(4)());

let multiply = function(x,y){
	console.log(x*y);
}

let multiplyBy3 = multiply.bind(this,3);
multiplyBy3(2);

let multiplies = function(x){
	return function(y){
  	console.log(x*y);
  }
}

let multiplyByTwo = multiplies(2);
multiplyByTwo(4);
