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

//2nd way
let permutations = (selected_arr, remaining_arr)=>{
	
	if(remaining_arr.length == 0){
  	console.log(selected_arr);
  	return;
  }  
  
  for(let i=0; i<remaining_arr.length; i++){
  //selected_arr = [a,b], remaining_arr = [c,d]
  //new_selected_arr = [a,b,c], new_remaining_arr = [d]
  		let x = remaining_arr[i];
    	let new_selected_arr = selected_arr.concat(remaining_arr[i]);

    	 remaining_arr.splice(i, 1);

  	//let new_selected_arr = remaining_arr.splice(0,1);
  	permutations(new_selected_arr,remaining_arr);
    remaining_arr.splice(i,0,x);
  }
  
}

permutations([],["a","b","c","d"]);
