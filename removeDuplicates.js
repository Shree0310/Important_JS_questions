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

//remove duplicates based on ids
const arr2 = [{id:1, name:"Ram"}, {id:2, name:"Sham"}, {id:1, name:"Sham"}];
const ids = arr2.map(o=>o.id);
console.log(ids);
const names = arr2.map(o=>o.name);
console.log(names);

const removeDuplicates = arr2.filter(({id},index) =>!ids.includes(id,index+1 ));

console.log(removeDuplicates);

