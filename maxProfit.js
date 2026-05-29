
//Best Time to buy and sell stocks
var maxProfit = function(prices) {
    let maxProfit = 0;
    min = prices[0];
    for(let i=1; i<prices.length;i++){
        if(prices[i]<min){
            min = prices[i];
        }
        if(prices[i]-min>maxProfit){
            maxProfit = prices[i]-min;
        }
    }
    return maxProfit;
};

// Input: prices = [7,1,5,3,6,4]
// Output: 5
