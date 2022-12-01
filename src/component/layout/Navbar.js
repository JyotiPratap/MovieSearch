import React from "react";
import {NavLink} from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar fixed-top navbar-dark bg-dark">
            {/* <a className="navbar-brand" href="#">Fixed top</a> */}
            {/* <a className="navbar-brand" href="#">DreamJob</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">
                            Home
                        </NavLink    >
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/Job">
                            Job
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/Code">
                            Code
                        </NavLink>
                    </li>
                </ul>
            </div>
            <NavLink className="btn btn-outline-light" to="/register">Post Job</NavLink>
        </nav>
    )
}
export default Navbar