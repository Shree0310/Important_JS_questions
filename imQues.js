var InputArr = [{ p: 4 }, { p: 2 }, { p: 9 }, { p: 6 }];
 

var outputArr = [{p:2},
                  {},
                  {p:4},
                  {},
                  {p:6},
                  {},
                  {},
                  {p:9}] ;
                  
let sortedArr = InputArr.sort((a,b)=> a.p-b.p);
console.log(sortedArr);

const customFunc = (arr)=>{
let out =[];
	for(let i=0;i<arr.length;i++){
  	if(i==0){
    	out.push(arr[i]);
    }
    else{
    let t=arr[i-1].p;
    while(arr[i].p-t>1){
    	out.push({});
      t++;
    }
    out.push(arr[i]);
    
    }
  }
  return out;
}
console.log(customFunc(sortedArr));

