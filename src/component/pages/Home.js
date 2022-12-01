import React from "react";
import image from "../pages/image1.jpg"
const Home = () => {
  return (

    <div className="container">
      <div className="py-4">
        <br></br>
        <br></br>
        <h1>Find Your Dream Job</h1>
        <div className="home Image">
          <figure>
            <img src={image} alt="swimmer" height="350" width="450" style={{float: 'right'}} />
          </figure>
          <br></br>
          <p class="fw-bold">Hey Coders, Let's Learn Code And Find Dream Job</p>
          <div className="float-left">"One important key to success is self-confidence.</div>
          <div className="float-left">An important key to self-confidence is preparation."</div>
          <p>-Arthur Ashe</p>
          <a className="btn btn-success" href="http://localhost:3000/Job" role="button" style={{float: 'left',margin:"70"}}>Jobs</a>
        </div>
      </div>
    </div>
  )
}
export default Home
