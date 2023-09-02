// create a function that takes a string and continues removing any instances 
// where a letter of opposite cases but same (aA) are next to each other the function should 
// be recursive until there are no other instances example 'aABCcbdFfG this should return 'dG'
// because the iterations are as follows first run through removes aA, Cc, Ff second run through would start 
// with BbdG and will need to remove Bb this will leave dG to be the only letters left

let str7 = 'aABCcbdFfG';
let output = 'dG';

const dupRemove = (str)=>{
	let arr = str.split("");
  let changed = false;
  
  for(let i=0;i<arr.length-1;i++){
  	if(arr[i]!=arr[i+1] && arr[i].toLowerCase() == arr[i+1].toLowerCase()){
    changed = true;
    	arr.splice(i,2);
    }
  }
  if(changed){
  	return dupRemove(arr.join(""));
  }
  return arr.join("");
}
console.log(dupRemove(str7));
