const sumAll = function(v1,v2) {
    let sum = 0
    if ((v1 < 0 || v2 < 0) || (typeof v1 != "number" || typeof v2 != "number" )){
        return "ERROR"
    }else if (v1 < v2){
        for (let i = v1; i <= v2; i++){
            sum += i;
        };
    }else if (v1 > v2){
        for (let i = v2; i <= v1; i++){
            sum += i;
        };
    }else return "YOU WIN"
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
