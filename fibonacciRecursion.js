
//Display n fibonacci series using recursion
var fibRec = function(num){
  if(num<2){
    return num;
  }
  else{
    return fibRec(num-2) + fibRec(num-1);
  }
}
var term = prompt("enter the term")
if(term<=0){
  console.log("Enter a positive int")
}
else{
  for(let i=0;i<term;i++){
    console.log(fibRec(i));
  }
}
