const reverseString = function(phrase) {
    result = ""
    for (i = phrase.length-1; i>-1;i--){
        result+=phrase[i]
    }

    return result
};

// Do not edit below this line
module.exports = reverseString;
