//Balanced Brackets
let expr = "([{}])";

const areBracketsBalanced =(str)=>{
	let stack = [];
  
  for(let i=0;i<str.length; i++){
  	
    if(str[i]=='(' || str[i]=='{' || str[i]=='['){
    	stack.push(str[i])
    }
    let check;
    switch(str[i]){
    	case ')':
      check = stack.pop();
      if(check=='}' || check==']'){
      	return false;
      }
       break;
      case'}':
      check = stack.pop();
      if(check==')' || check==']'){
      	return false;
     }
       break;
      case ']':
      check = stack.pop();
       if(check==')' ||check=='}'){
      	return false;
       }
       break;
    }
  }
  return (stack.length == 0);
}

console.log(areBracketsBalanced(expr));

