import { StockProps } from "../screens/Stocks/types";

export function compareStrings( name1 : string, name2 : string ) {
    if ( name1 < name2 ){
      return -1;
    }
    if ( name1 > name2 ){
      return 1;
    }
    return 0;
}

export function sortAssets(assets : StockProps[]) {
  return assets.sort((asset1, asset2)=>compareStrings(asset1.name, asset2.name))
}

export function getWordsFromString(word : string, nWords: number){
  return  word.split(' ').slice(0,nWords).join(' ');
}