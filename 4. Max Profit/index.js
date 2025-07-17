var maxProfit = function(prices){
    let min = prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[i] - min > maxProfit){
            maxProfit = prices[i] - min;
        }
        if(prices[i] < min){
            min = prices[i];
        }
    }
    return maxProfit;
}

const prices = [4, 6, 1, 5, 8, 9, 0]
const res = maxProfit(prices);
console.log(res)