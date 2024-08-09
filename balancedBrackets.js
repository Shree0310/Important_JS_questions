//Balanced Brackets
//Approach 1
let areBracketsBalanced = (str) =>{
	let stack = [];
  let check;
  for(let i=0;i<str.length;i++){
  	if(str[i]== "(" || str[i] == "[" || str[i]=='{'){
    	stack.push(str[i]);
      console.log("stack:"+ stack);
    } else {
      if(stack.length == 0) return false;
      console.log("check"+ check);
	    check = stack.pop();
      if(check == '[' && str[i] != ']') return false;
      if(check == '(' && str[i] != ')') return false;
      if(check == '{' && str[i] != '}') return false;
		}
  }
  	
    return (stack.length == 0);
    
}

console.log(areBracketsBalanced(expr));


//Balanced Brackets- Approach 2
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
      if(check=='{' || check=='['){
      	return false;
      }
       break;
      case'}':
      check = stack.pop();
      if(check=='(' || check=='['){
      	return false;
     }
       break;
      case ']':
      check = stack.pop();
       if(check=='(' ||check=='{'){
      	return false;
       }
       break;
    }
  }
  return (stack.length == 0);
}

console.log(areBracketsBalanced(expr));

