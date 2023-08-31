//merge two sorted arrays into one
let arr1 =[0,1,4,6,8];
let arr2 =[0,3,5,7,9,11];

var merge = (arr1, arr2) =>{
  let len1 = arr1.length;
  let len2 = arr2.length;
  let arrLen = len1>len2 ? len1 : len2;
  let merged = [];

  for(let i=0;i<arrLen;i++){
    if(arr1[i]<arr2[i]){
      merged.push(arr1[i],arr2[i]);
    }
    else{
      arr1[i] || arr1[i] == 0 ? merged.push(arr1[i]): '';
      arr2[i] || arr2[i] ==0 ? merged.push(arr2[i]): '';
    }
  }
  return merged;
}

 console.log(merge(arr1,arr2));
