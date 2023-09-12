import React from "react";
interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    // {cache:'no-store'} // using this flag to not store in inbuild cache
    // {next: {revalidate:10}} // get fresh data every 10 from backend
    );
  const users: User[] = await res.json();
  return (
    <>
      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
