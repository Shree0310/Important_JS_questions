var reverseStr = function(s, k) {
    s = s.split("");
    for(x=0; x<s.length; x = x + 2*k){
        let mid = Math.floor(k/2);
        //reversing the string
        for(let i=0; i<mid; i++){
            let temp = s[x+i];
            s[x+i] = s[x+k-i-1];
            s[x+k-i-1] = temp;
        }
    }
    return s.join("");
};
