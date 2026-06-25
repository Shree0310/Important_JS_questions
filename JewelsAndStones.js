var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let jSet = new Set();
    for(let i=0; i<jewels.length; i++){
        jSet.add(jewels[i]);
    }
    for(let i=0;i<stones.length;i++){
        //includes has the time complexity of O(n) whereas has O(1)
        if(jSet.has(stones[i])){
            count++;
        }
    }
    return count;
};

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
