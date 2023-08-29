//print common numbers from given 2 arrays
//Intersection Of two arrays
//Given two integer arrays nums1 and nums2, return an array of their intersection.
//Each element in the result must be unique and you may return the result in any order.

var intersection = function(num1,num2){
	let num1Map ={};
  
  for(let i=0;i<num1.length;i++){
  	if(num1Map[num1[i]]==undefined){
    	num1Map[num1[i]]=1;
    }
  }
  
  let arr=[];
  for(let i=0;i<num2.length;i++){
  	if(num1Map[num2[i]]==1){
    	arr.push(num2[i]);
      num1Map[num2[i]]=0;
    }
  }
  
  return arr;
}
let m1 =[1,2,3];
let m2 =[3,2,5];

console.log(intersection(m1,m2));

