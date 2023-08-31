//A string is a pangram if all the alphabets occur atleast once
const inputString = "The quick brown fox jumps over the lazy dog";
var isPangram = (str) =>{
	//turn them to lowercase to handle the char insesitivity
  str = str.toLowerCase();
  let unique = new Set();
  
  for(let i=0;i<str.length;i++){
    //getting character at the position i
  	let char = str.charAt(i);
    //gettingthe char Code of the char
    let charCode = char.charCodeAt(0);
    //console.log(charCode);
    //checking if the charcode is of an alphabet
    if(charCode>=97 && charCode<=122){
      //if yes then pushed inside the set but only uniques as it takes only the unique ones
    	unique.add(char);
    }
    else{
    
    }
  }
  //returns true only if the length is 26 i.e all the alphabets where there
  return (unique.size === 26);
}

console.log(isPangram(inputString));

var isPangram2 = (str)=>{
	str = str.toLowerCase();
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split('');
  for(let i=0;i<str.length;i++){
    //getting the index of alphabet from str in alphabets string
  	let index = alphabets.indexOf(str[i]);
    if(index!=-1){
      //if present remove from the alphbets array
    	alphabets.splice(index,1);
    }
    else{
    
    }
  }
  //returns true only if the alphabet array is empty
  return (!alphabets.length);
}

console.log(isPangram2(inputString));
