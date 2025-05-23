 //Finds the oldest person from an array of user objects

const users = [
  { name: 'Alice', age: 32, location: 'New York' },
  { name: 'Bob', age: 45, location: 'Chicago' },
  { name: 'Charlie', age: 29, location: 'Los Angeles' },
  { name: 'Diana', age: 51, location: 'Boston' },
  { name: 'Evan', age: 37, location: 'Seattle' }
];

function findOldest(users) {
	if(!users || users.length === 0){
  	return null;
  }
  
  //using reduce method that takes an accumulator and currentElement
 return users.reduce((oldest , currUser) => {
   return oldest.age > currUser.age ? oldest : currUser;
  });
}

console.log(findOldest(users));

function findOldest2 (users) {
	if(!users || users.length === 0){
  	return null;
  }
  
  //use map to get each age
  let maxUser = Math.max(...users.map(user => user.age));
  return users.find(user => user.age === maxUser);
}

console.log(findOldest2(users));


