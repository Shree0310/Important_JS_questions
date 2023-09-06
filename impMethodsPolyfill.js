const fetchData = async ()=>{
    	const data = await fetch("");
      const jsonData = await data.json();
    }
    
    //polyfill for map method
    Array.prototype.myMap = function(fun){
    //the output should be a new array
    let out = [];
    	//it should take a function as an argument
      for(let i=0;i<this.length;i++){
      	out.push(fun(this[i],i,this));
      }
      return out;
    }
    
    //polyfill for filter method
    Array.prototype.myFilter = function(fun){
    let out = [];
    	for(let i=0;i<this.length;i++){
      	if(fun(this[i],i,this)){
        	out.push(this[i]);
        }
      }
      return out;
    }
    
    //polyfill for reduce
    Array.prototype.myReduce = (fun, initialVal)=>{
    	let accumulator = initialVal;
    	for(let i=0;i<this.length;i++){
      	if(accumulator){
        	accumulator= fun.call(accumulator, this[i],i,this);
        }
        else{
        	 accumulator = this[i];
        }
      }
      return accumulator;
    }
    
    
