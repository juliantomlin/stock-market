var priceDirection=[]
var cashOut = 0

var trendMap = function (stockPrices){
  for (var i = 0; i < stockPrices.length - 1; i++)
    if (stockPrices[i] < stockPrices [i+1]) {
      priceDirection.push(1)
    }
    else if (stockPrices[i] > stockPrices [i+1]) {
      priceDirection.push(-1)
    }
    else{
      priceDirection.push(0)
    }
  }

var maxProfit = function(stockPrices){
  trendMap(stockPrices)
  for (var i = 0; i < stockPrices.length - 1; i++){
    if ((priceDirection[i] === 1) && (i === (priceDirection.length-1))){
      cashOut = cashOut + stockPrices[i+1]
    }
    if ((priceDirection[0] === 1) && (i === 0)){
      cashOut = cashOut - stockPrices[i]
    }
    if ((priceDirection[i] === -1) && (priceDirection[i+1] === 1)){
      cashOut = cashOut - stockPrices[i+1]
    }
    else if ((priceDirection[i] === 1) && (priceDirection[i+1] === -1)){
      cashOut = cashOut + stockPrices[i+1]
    }
  }
  if (cashOut == 0){
    cashOut = -1
  }
  return cashOut
}

module.exports = maxProfit