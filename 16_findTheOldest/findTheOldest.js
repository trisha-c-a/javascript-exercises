const findTheOldest = function(people) {
    let result = {};
    let age = 0
    for (person of people){
        if (person.yearOfDeath){
            if(person.yearOfDeath-person.yearOfBirth>age){
                age = person.yearOfDeath-person.yearOfBirth;
                result = person;
            }
        }
        else{
            const year = new Date().getFullYear();
            if(year-person.yearOfBirth>age){
                age = year-person.yearOfBirth;
                result = person;
            }
        }
    }

    return result;
};

// Do not edit below this line
module.exports = findTheOldest;