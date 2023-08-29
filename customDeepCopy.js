//custom deep copy
var deepCopy = function(obj){
	if(typeof(obj)!="object" || obj === null){
  	return obj;
  }
  
  let cloneObj = Array.isArray(obj) ? [] : {};
  
  for(let key in obj){
  	if(obj.hasOwnProperty(key)){
    	cloneObj[key] = deepCopy(obj[key]);
    }
  }
  return cloneObj;
}

let obj ={
    name:'pravin',
	addr:{
	  city:'pune',
	  state:'maharashtra'
	}
  }

//deep copy
  let result=deepCopy(obj);
  //result.name="moon";
  console.log(result); 
  //console.log(obj);

//Show copying by assigning  
let adam = {name: "Adam"};
let jason = adam;
jason.name = "Jason";
//console.log(adam.name);  // outputs "Jason" 
//console.log(jason.name);// outputs "Jason" 
