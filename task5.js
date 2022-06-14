const getUsers = () => {
  const users = fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
  return users;
};

const getTodos = () => {
  const todos = fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json()
  );
  return todos;
};

const aggregateUsersAndTodos = async () => {
  const users = await getUsers();
  const todos = await getTodos();
  const newUsers = users.map((user) => {
    const usertodos = todos.filter((todo) => todo.userId === user.id);
    return { ...user, todos: usertodos };
  });
  return newUsers;
};
