//==================Task1===============

const numbers = [1, 2, 3];
const numbers2 = [5, 4, 9];
const changeArrayNumbers = (array) => {
  return array.map((currentValue) => {
    return currentValue % 2 === 0 ? currentValue + 1 : currentValue - 1;
  });
};
console.log(changeArrayNumbers(numbers2));
console.log(changeArrayNumbers(numbers));
console.log(numbers[1]);

//==================Task2===============

const changeWords = (value) => {
  return value.map((string) => {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
  });
};

console.log(changeWords(["asdRadSd", "dDFDSdsf"]));

//==================Task3===============

const users = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Tomara",
  },
  {
    id: 3,
    name: "Max",
  },
];

const deleteUsersId = (userList, idList) => {
  return userList.filter((user) => {
    return !idList.includes(user.id);
  });
};
console.log(deleteUsersId(users, [2]));

//==================Task4===============

const isPalindrome = (string) => {
  return string.split("").reverse().join("") === string;
};
console.log(isPalindrome("odo"));

//==================Task5===============

const users2 = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
];

const filterUsersByGender = (users) => {
  const men = [];
  const women = [];
  users.forEach((user) => {
    if (user.gender === "Male") {
      men.push({
        id: user.id,
        fullName: `${user.first_name} ${user.last_name}`,
        email: user.email,
        gender: user.gender,
        ip_address: user.ip_address,
      });
    }
    if (user.gender === "Female") {
      women.push({
        id: user.id,
        fullName: `${user.first_name} ${user.last_name}`,
        email: user.email,
        gender: user.gender,
        ip_address: user.ip_address,
      });
    }
  });
  return { men, women };
};

console.log(filterUsersByGender(users2));

//==================Task6===============

const users3 = [
  {
    title: "Jeanette Penddreth",
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ip_address: "26.58.193.2",
  },
  {
    title: "Petr Jackson",
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
];

const deleteFields = (users) => {
  return users.map((user) => {
    return { title: user.title, id: user.id };
  });
};
console.log(deleteFields(users3));

//==================Task7===============

const users4 = [
  {
    title: "Jeanette Penddreth",
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ip_address: "26.58.193.2",
    reting: 5.0,
  },
  {
    title: "Petr Jackson",
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
    reting: 4.0,
  },
  {
    title: "Tomas Anderson",
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
    reting: 5.0,
  },
];

const someFunction = (users) => {
  return users.filter((user) => {
    return user.reting === 5.0;
  });
};
console.log(someFunction(users4));
