import Colors from '../resources/colors';

export function sortByName(a: string, b: string): number {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
}

export function sortByFavorite(a: boolean, b: boolean): number {
  return a === b ? 0 : a ? -1 : 1;
}

export function sortByFavoriteAndByName(
  nameA: string,
  nameB: string,
  favoriteA: boolean,
  favoriteB: boolean,
): number {
  const sortName = sortByName(nameA, nameB);
  const sortFav = sortByFavorite(favoriteA, favoriteB);

  return sortFav === 0 ? sortName : sortFav;
}

export function getTagFund(status: IgetFunds['status']): Itag {
  if (status === 1) {
    return {name: 'Novo'};
  } else if (status === 2) {
    return {name: 'Fechado', color: Colors.gray04};
  }
  return {};
}
