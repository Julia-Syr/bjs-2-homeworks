function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
    return true;
    } 
    return false;
}

function getUsersNamesInAgeRange(users, gender) {
    let people = [];
    let genderFilter;
    if (gender == "мужской") {
      genderFilter = users.filter(people => people.gender.includes("мужской"))
    } else if (gender == "женский") {
      genderFilter = users.filter(people => people.gender.includes("женский"))
    } else {
      return 0;
    }
    let arrOfAge = genderFilter.map(people => people.age)
    let result = arrOfAge.reduce((acc, item, index) => {
      acc += item;
    if (index === arrOfAge.length - 1) {
        return acc / arrOfAge.length;
      } return acc; 
  }, 0);
    return result;    
  }