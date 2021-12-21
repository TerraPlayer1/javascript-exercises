const reverseString = function(str) {
    var array = str.split("");
    var revArray = array.reverse();
    var joinedStr = revArray.join("");
    return joinedStr;
};

// Do not edit below this line
module.exports = reverseString;
