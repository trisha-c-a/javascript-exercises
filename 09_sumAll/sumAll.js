const sumAll = function(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a<0 || b<0){
        return "ERROR"
    }
    else{
        let result = 0;
        if(b>a){
        for(i=a;i<b+1;i++){
            result+=i;
        }
    }
    else{
        for(i=b;i<a+1;i++){
            result+=i;
        }
    }
        return result
    }
    
};

// Do not edit below this line
module.exports = sumAll;
