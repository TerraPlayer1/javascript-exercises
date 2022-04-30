const palindromes = function (str) {
  let clnStr = str.match(/([A-z])+/g).join("").toLowerCase();
  let revStr = str.match(/([A-z])+/g).join("").split("").reverse().join("").toLowerCase();
  return revStr === clnStr;
};

// Do not edit below this line
module.exports = palindromes;
