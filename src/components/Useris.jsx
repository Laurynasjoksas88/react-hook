import React, { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const [userList, setUsersList] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        setUsersList(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      {showAll
        ? userList.map((user) => (
            <div key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <p>{user.first_name}</p>
            </div>
          ))
        : userList
            .filter(
              (user) =>
                user.first_name === "George" || user.first_name === "Lindsay"
            )
            .map((user) => (
              <div key={user.id}>
                <img src={user.avatar} alt={user.first_name} />
                <p>{user.first_name}</p>
              </div>
            ))}
      <div>
        <button onClick={handleShowAll}>Show All</button>
      </div>
    </div>
  );
}

export default User;
