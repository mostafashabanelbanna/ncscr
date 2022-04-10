export const cutString = (str, charCount) => {
  let sub = String(str).substring(0, charCount);
  let content = sub.substr(0, sub.lastIndexOf(" "));
  return content;
};
