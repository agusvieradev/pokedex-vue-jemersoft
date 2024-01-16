export const capitalizeInitial = (word) => {
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
};
