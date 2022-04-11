export const cutString = (str, charCount) => {
  let sub = String(str).substring(0, charCount);
  let content = sub.substr(0, sub.lastIndexOf(" "));
  return content;
};
export const checkNulls = (obj) => {
  for (let property in obj) {
    if (obj[property] != null) {
      return true;
    }
  }
  return false;
};

export const convertSearchData = (obj) => {
  for (let property in obj) {
    if (obj[property] == null) delete obj[property];
  }
  return obj;
};
