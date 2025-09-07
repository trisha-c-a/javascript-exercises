const fibonacci = function(length) {
    if(length<0){
        return "OOPS";
    }
    
    let num1 = 0;
    let num2 = 1;
    for(i=0;i<Number(length);i++)
    {
        temp = num2;
        num2 = num1+num2;
        num1 = temp;

    }
    return num1;
};

// Do not edit below this line
module.exports = fibonacci;

// fibonacci(4)