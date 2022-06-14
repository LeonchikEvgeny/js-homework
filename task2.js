//==================Task1===============

const changeArrayNumbers = (array) => {
  return array.map((currentValue) => {
    return currentValue % 2 === 0 ? currentValue + 1 : currentValue - 1;
  });
};

//==================Task2===============

const changeWords = (value) => {
  return value.map((string) => {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
  });
};

//==================Task3===============

const deleteUsersId = (userList, idList) => {
  return userList.filter((user) => {
    return !idList.includes(user.id);
  });
};

//==================Task4===============

const isPalindrome = (string) => {
  return string.split("").reverse().join("") === string;
};

//==================Task5===============

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

//==================Task6===============

const deleteFields = (users) => {
  return users.map((user) => {
    return { title: user.title, id: user.id };
  });
};

//==================Task7===============

const someFunction = (users) => {
  return users.filter((user) => {
    return user.reting === 5.0;
  });
};
