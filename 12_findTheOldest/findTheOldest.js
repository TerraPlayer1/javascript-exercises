const findTheOldest = function(people) {

  if (people[0].yearOfDeath === undefined){
    let currYear = new Date().getFullYear();
    people[0].yearOfDeath = currYear;
    return people.reduce((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? a : b);
  }else {
    return people.reduce((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? a : b);
  };
};
// Do not edit below this line
module.exports = findTheOldest;
