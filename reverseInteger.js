//reverse an Integer
function reverseInt(num){
	let revNum = 0;
  let digit;
  while (num>0){
  	 digit = num%10;
     revNum = revNum*10 + digit;
     num = Math.floor(num/10);
    
  }
  return revNum;
}

let num3 = 87980933788;
console.log(reverseInt(num3));
