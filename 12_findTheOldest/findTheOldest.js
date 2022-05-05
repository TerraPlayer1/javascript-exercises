const findTheOldest = function(people) {

  return people.reduce((a, b) => {
    const old = calcYears(a.yearOfBirth, a.yearOfDeath);
    const newPerson = calcYears(b.yearOfBirth, b.yearOfDeath);
    return old < newPerson ? b : a;
  });
};

const calcYears = function(birth, death){
  if(!death){
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
