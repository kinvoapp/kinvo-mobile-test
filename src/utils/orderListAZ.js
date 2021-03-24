export const orderListAZ = (list) => {
  const orderedList = list;
  orderedList.sort((a, b) => a.name.localeCompare(b.name));
  return orderedList;
};
