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
