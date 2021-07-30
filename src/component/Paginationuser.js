import React, { useState, useEffect } from "react";
import Paginationdata from "./Paginationdata";

const Paginationuser = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div>
        <h1>Testing Api</h1>
        <h4>Shubham Aswal</h4>

        {users.map((curElem, index) => {
          return (
            <div key={index}>
              <div>
                <span>{curElem.name}</span>
                <br />
              </div>
              <div>
                <span>{curElem.username}</span>
                <br />
                <span>{curElem.email}</span>
                <br />
                <br></br>
              </div>
            </div>
          );
        })}
      </div>
      );
    </div>
  );
};

export default Paginationuser;
