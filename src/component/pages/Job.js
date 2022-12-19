import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";


const Job = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:4000/getAllJob");
    setUser(result.data.result.reverse())
    console.log(result)
  }
  return (

    <div>
      <br></br>
      <br></br>
      <div className="py-4">
        <h1>Get Hired</h1>
        <>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">CompanyName</th>
                <th scope="col">Looking For</th>
                <th scope="col">Batch</th>
                <th scope="col">Salary</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.CompanyName}</td>
                  <td>{user.Role}</td>
                  <td>{user.Batch}</td>
                  <td>{user.Salary}</td>
                  <td>{user.Location}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <a class="btn btn-success" href={user.JobUrl} role="button">Apply</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      </div>
    </div>
  )
}
export default Job