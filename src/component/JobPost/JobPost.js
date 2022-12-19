import React, {useState} from "react"
import "./JobPost.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const JobPost = ({ setJobPostUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const JobPost = () => {
        axios.post("http://localhost:4000/JobPost", user)
        .then(res => {
            alert(res.data.message)
            setJobPostUser(res.data.user)
            history.push("/JobPost")
        })
    }

    return (
        <div class="JobPost">
          <br></br>
          <br></br>
            <h1>JobPost</h1>
            <input  type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div class="button" onClick={JobPost}>JobPost</div>
            {/* <div>or</div> */}
            {/* <div className="button" onClick={() => history.push("/register")}>Register</div> */}
        </div>
    )
}

export default JobPost