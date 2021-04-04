const compareStocks = (a, b) => {
    // Use toUpperCase() to ignore character casing
    if(!!a.name && !!b.name){
        const stockAname = a.name.toUpperCase();
        const stockBname = b.name.toUpperCase();

        let comparison = 0;
        if (stockAname > stockBname) {
        comparison = 1;
        } else if (stockAname < stockBname) {
        comparison = -1;
        }

        return comparison;
    } else {
        return 1;
    }
}

const favoritesFirst = (array) => {
  let arraySorted = array.sort(compareStocks);
  let favoriteFirst = []
  arraySorted.map(e => {
    if(e.isFavorite)
      favoriteFirst.push(e)
  })
  arraySorted.map(e => {
    if(!e.isFavorite)
      favoriteFirst.push(e)
  });
  return favoriteFirst;
}

const TransformToMoney = (number) => {
  let round2decimals = number.toFixed(2);
  round2decimals = '' +round2decimals.replace('.',',');
  return round2decimals;
}
  
  export {
    compareStocks,
    TransformToMoney,
    favoritesFirst
  };