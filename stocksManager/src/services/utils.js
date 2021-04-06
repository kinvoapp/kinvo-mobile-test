const CompareItemsByName = (itemA, itemB) => {
  if(!!itemA.name && !!itemB.name){
      const stockAname = itemA.name.toUpperCase();
      const stockBname = itemB.name.toUpperCase();

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

const SortByFavorites = (array) => {
let arraySorted = array.sort(CompareItemsByName);
let listOrderedByFavorite = []
arraySorted.map(item => {
  if(item.isFavorite)
    listOrderedByFavorite.push(item)
})
arraySorted.map(item => {
  if(!item.isFavorite)
    listOrderedByFavorite.push(item)
});
return listOrderedByFavorite;
}

const FormatToMoneyType = (number) => {
  let round2decimals = number.toFixed(2);
  valueToMoneyString = '' + round2decimals.replace('.',',');
return valueToMoneyString;
}

export {
  CompareItemsByName,
  FormatToMoneyType,
  SortByFavorites
};