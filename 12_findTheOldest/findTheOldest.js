const findTheOldest = function(people) {
  
  if (people[0].yearOfDeath === undefined){
    let currYear = new Date().getFullYear();
    people[0].yearOfDeath = currYear;
    const oldPerson = people.sort((a, b) =>
     (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
     return oldPerson[0]
     
  } else {
    const oldPerson = people.sort((a, b) =>
     (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
    return oldPerson[0]
  };
};
//    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

// Do not edit below this line
module.exports = findTheOldest;
