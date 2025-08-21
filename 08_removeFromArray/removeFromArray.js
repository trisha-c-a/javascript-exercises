const removeFromArray = function(array, ...values) {
    const result = [];
    const set = new Set(values);

    for(i=0;i<array.length;i++){
        if (!set.has(array[i])) {
            result.push(array[i]);
        }
    }
    
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
