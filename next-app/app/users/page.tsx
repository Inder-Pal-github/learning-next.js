import React from "react";
interface User {
  id: number;
  name: string;
  email:string
}

const UsersPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" }
    // {cache:'no-store'} // using this flag to not store in inbuild cache
    // {next: {revalidate:10}} // get fresh data every 10 from backend
  );
  const users: User[] = await res.json();
  return (
    <>
      <h2>Users:</h2>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <table className="table table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>

        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
