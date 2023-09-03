//Rotate an array k times/ shift an array k times
let RotNums = [1,2,3,4,5,6,7], rotK = 3;
const rotateKTimes = (strAr,k)=>{
//let strAr = str.split("");
	for(let i=0;i<k;i++){
  	let element = strAr.pop();
    strAr.unshift(element);
  }
  return strAr;
}
console.log(rotateKTimes(RotNums,rotK));
