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

<div className="clearfix">
       <br></br>
       <br></br>
       <br></br>
       <div className="card">
        <div className="row">
          {users.map(data => (
            <div className="col-md-4 animated fadeIn" style={{maxWidth: '18rem'}}>
              <style dangerouslySetInnerHTML={{__html: "\n  .container {\n    display: flex;\n    justify-content: space-between;\nflex-direction: row;\nflex-wrap: wrap;\n  }\n   .card{\n border:1.5px solid black;\n}\n" }} />
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                  </div>
                  <h4 className="card-title">{data.CompanyName}</h4>
                  <p className="card-text">{data.Location}</p>
                  <p className="card-text">Batch: {data.Batch}</p>
                  <a href="sd smdnsk" class="btn btn-success">Apply</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>    
      </div>

    
  )
}
export default Job