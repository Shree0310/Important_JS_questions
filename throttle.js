//html
<button onClick="throttle2()">Try it</button>

//javascript
let loggerFunc = ()=>{
	console.log("throttle function");
}

var throttle = (fn, limit)=>{
	let flag = true;
	return function(){
  let context= this,
  args = arguments;
  if(flag){
  	fn.apply(context, args);
  flag = false;
  setTimeout(()=>{
  	flag= true;
  }, limit);
 		}  
  }
}

var throttle2 = throttle(loggerFunc, 3000);
