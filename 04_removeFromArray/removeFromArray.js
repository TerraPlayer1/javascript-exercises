const removeFromArray = function(array, ...args) {
    let filterdArray = array.filter(value => !args.includes(value));
    return filterdArray
};

// Do not edit below this line
module.exports = removeFromArray;
