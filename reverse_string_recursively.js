//reverse a string recursively
const revRecurse = (str)=>{
	if(str == ''){
  return ''
  }
  console.log(str.substring(1),str.charAt(0))
  return revRecurse(str.substring(1))+ str.charAt(0);
}

console.log(revRecurse(exp));
