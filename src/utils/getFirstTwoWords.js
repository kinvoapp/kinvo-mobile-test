export const getFirstTwoWords = (string) => {
  const firstTwoWords = string.split(" ").slice(0, 2).join(" ");
  return firstTwoWords;
};
