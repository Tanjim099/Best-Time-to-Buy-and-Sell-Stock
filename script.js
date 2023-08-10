/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

// first approach

// function maxProfit(prices) {
//     let profit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             profit = Math.max(profit, prices[j] - prices[i])
//         }
//     }
//     return profit
// }
// const prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));

// Second approch

function maxProfit(prices) {
    let min = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return profit
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));