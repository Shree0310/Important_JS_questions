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


//Optimisation
//using Onject.Keys the second loop rather than looping through the entire word again
var maxFreqSum = function(s) {
    let charMap = {};
    //Fill the map with the chars count
    for(let i =0; i<s.length; i++){
        if(charMap[s[i]]){
            charMap[s[i]]++;
        }
        else{
            charMap[s[i]] = 1;
        }
    }

    //getting the max count of vowels and consonants
    let maxVowels = 0;
    let maxConsonants = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let mapKeys = Object.keys(charMap);
    for(let i=0; i<mapKeys.length; i++){
        if(vowels.includes(mapKeys[i])){
            if(charMap[mapKeys[i]]> maxVowels){
                maxVowels = charMap[mapKeys[i]];
            }
        }
        else{
            if(charMap[mapKeys[i]] > maxConsonants){
                maxConsonants = charMap[mapKeys[i]];
            }
        }
    }
    return maxVowels + maxConsonants;
};

//Another way of writing this code
var maxFreqSum = function(s) {
    let charMap = {};
    //Fill the map with the chars count
    for(let i =0; i<s.length; i++){
        charMap[s[i]] = !charMap[s[i]] ? 1 : ++charMap[s[i]];
    }

    //getting the max count of vowels and consonants
    let maxVowels = 0;
    let maxConsonants = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let mapKeys = Object.keys(charMap);
    for(let i=0; i<mapKeys.length; i++){
        if(vowels.includes(mapKeys[i])){
            maxVowels = Math.max(maxVowels, charMap[mapKeys[i]]);
        }
        else{
            maxConsonants = Math.max(maxConsonants, charMap[mapKeys[i]]);
        }
    }
    return maxVowels + maxConsonants;
};
