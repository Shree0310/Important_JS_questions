let input = [{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"},{id:1,name:"d"},{id:3,name:"e"}];

let Output= [{id:1,name:["a","d"]},{id:2,name:"b"},{id:3,name:["c","e"]}];

const groupById = (arr) =>{
	let newMap = {};
  for(let i=0;i<arr.length;i++){
  	if(newMap[arr[i].id]==undefined){
    	newMap[arr[i].id] = arr[i].name;
    }
    else{
    	if(newMap[arr[i].id]=="object"){
      	newMap[arr[i].id].push(arr[i].name)
      }else{
      	newMap[arr[i].id] = [newMap[arr[i].id], arr[i].name];
      }
    }
  }
  let out = [];
  for(let key in newMap){
  	out.push({
    "id" : key,
    "name": newMap[key]
    })
  }
  return out;
}

console.log(groupById(input));
