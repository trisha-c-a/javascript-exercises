const leapYears = function(year) {
//Year is divisible by 100
//Check if year is divisible by 400 -> If yes, leap else no leeap
//Not divisible by 100
//Check if divisble by 4 ->If yes, leap, else no leap
if (year%100==0){
    if (year%400==0){
        return true;
    }
    else{
        return false;
    }
}
else{
    if (year%4==0){
        return true;
    }
    else{
        return false;
    }
}
};

// Do not edit below this line
module.exports = leapYears;
