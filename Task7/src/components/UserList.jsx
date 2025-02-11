import React from "react";

function UserList() {
    const users = [
        { id: 1, name: "Vinit", age: 20 },
        { id: 2, name: "Suhani", age: 19 },
        { id: 3, name: "Bhavik", age: 22 },
      ];

  return (
    <div>
      <h2>User List</h2>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default UserList;