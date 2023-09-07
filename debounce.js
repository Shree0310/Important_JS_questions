//html
input type="text" onkeyup="debounce2()"/>


//Javascript
  let counter = 0;
getData = () =>{
	console.log("fetching data " + counter++);
}

var debounce = (fn, d)=>{
	let timer;
  return function(){
  	let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(()=>{
    	fn.apply(context, arguments);
    }, d);
  }
}

let debounce2 = debounce(getData, 1000)

  
