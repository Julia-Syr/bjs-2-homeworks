function compareArrays(arr1, arr2) {
    return (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]));
}

function getUsersNamesInAgeRange(users, gender) {
    let people = [];
    let genderFilter = users.filter(people => people.gender === gender);
    let arrOfAge = genderFilter.map(people => people.age);
    let result = arrOfAge.reduce((acc, item, index) => {
      acc += item;
    if (index === arrOfAge.length - 1) {
        return acc / arrOfAge.length;
      } return acc; 
  }, 0);
    return result;    
  }