var maxFreqSum = function(s) {
    let charMap = {};
    let cMap = {};

    for(let i=0; i<s.length; i++){
        if( charMap[s[i]]){
            charMap[s[i]] ++;
        }
        else{
            charMap[s[i]] = 1;
        }
    }

    let maxVowel = 0;
    let maxConsonant = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    //find the max vowel and consonant
    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i]) ){
            if(charMap[s[i]] > maxVowel){
                maxVowel = charMap[s[i]];
            }
        }
        else{
            if(charMap[s[i]] > maxConsonant){
                maxConsonant = charMap[s[i]];
            }
        }
    }
    return maxConsonant + maxVowel;
};

// Input: s = "successes"

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.
