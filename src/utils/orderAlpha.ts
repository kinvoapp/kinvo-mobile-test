const ordeAlpha = (list: any): any => {
    list = list.sort((a: any, b: any) => {
        if (a.isFavorite || (a.name < b.name)) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
    });
    return list
}

export default ordeAlpha;