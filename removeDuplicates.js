//remove duplicates from an array of numbers
//using filter
let newArray = [1,1,1,2,2,3];
let removeDuplicates = (arr) => arr.filter((item,index)=> arr.indexOf(item)===index);

console.log(removeDuplicates(newArray));

//using Set
console.log([...new Set(newArray)]);

//using forEach
function removeDuplicates2(arr){
  let unique = [];
  arr.forEach(item => {
    if(!unique.includes(item)){
      unique.push(item);
    }
  });
  return unique;
}
console.log(removeDuplicates2(newArray));
