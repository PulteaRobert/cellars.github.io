/* eslint-disable */
export const includes = (ar1, ar2) => {
  for (let el of ar2) {
    if (ar1.indexOf(el) < 0) {
      return false;
    }
  }
  return true;
};

export default {};
