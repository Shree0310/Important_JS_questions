//find all the combinations
let str = "abcd";
const combinations = (str) =>{

	let arr = str.split("");
	for(let i=0;i<arr.length;i++){
  	console.log(arr.slice(i,i+1));
    for(let j=i+1;j<arr.length;j++){
    	console.log(arr.slice(i,j+1));
    }
  }
  
}
console.log(combinations(str));

