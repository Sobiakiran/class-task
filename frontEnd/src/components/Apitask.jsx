
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []); 

  return (
    

      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
  )
        }
export default UserList
