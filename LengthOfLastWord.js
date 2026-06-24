var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    while(n>=0){
        if(s[n] != " "){
            break;
        }
        n--;
    }
    let count = 0;
    while(n>=0){
        if(s[n] == " "){
            break;
        }
        n--;
        count ++;
    }
    return count;
};

let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));

//approach 2
var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    let count = 0;
    while(n>=0){
        if(s[n] != " "){
            count++;
        }
        else if(s[n] === " " && count >0){
            break;
        }
        n--;
    }
    return count;
};
