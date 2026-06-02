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

//New solutions
var merge = function(nums1, m, nums2, n) {
    let p1 = m-1;
    let p2 = n-1;
    for(let i=m+n-1; i>=0;i--){
        if (p2<0) break;
        if(p1>=0 && nums1[p1]> nums2[p2]){
            nums1[i] = nums1[p1];
            p1--;
        }
        else{
            nums1[i]= nums2[p2];
            p2--;
        }
    }
};
