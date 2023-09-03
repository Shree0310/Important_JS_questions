//permulations of a given word
let exp = "abcd";
let expArr = exp.split("");

const permutations =(cur_ar,inp_ar,depth)=>{
	if(depth==10){ 
  	return;
  }
  
  console.log(cur_ar.join(""));
  
  if(inp_ar.length ==0){
  	return;
  }
  for(let i=0;i<inp_ar.length;i++){
  	let copy_cur_ar = [...cur_ar];
    let copy_inp_ar = [...inp_ar];
    
    let x = inp_ar[i];
    copy_cur_ar.push(x);
    copy_inp_ar.splice(i,1);
    
    permutations(copy_cur_ar,copy_inp_ar,depth+1);
  }
}

permutations([],expArr,0);
