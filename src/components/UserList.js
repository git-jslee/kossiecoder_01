import React from "react";

function UserList({ users }) {
  const renderUserList = users.map((user) => {
    return (
      <div className="card mb-2" key={user.id}>
        <div className="card-body p-3">{user.name}</div>
      </div>
    );
  });

  return (
    <div>
      {/* <h2>User List</h2> */}
      {renderUserList}
    </div>
  );
}

export default UserList;
