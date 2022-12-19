import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/Home";
import Job from "./component/pages/Job";
import Code from "./component/pages/Code";
import PageNotFound from "./component/pages/PageNotFound";
import Navbar from "./component/layout/Navbar"
import login from "./component/loginPage/login"
import JobPost from "./component/JobPost/JobPost"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
const App = () => {
  
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"component={Home}></Route>
        <Route exact path="/Job"component={Job}></Route>
        <Route exact path="/Code"component={Code}></Route>
        <Route exact path="/login"component={login}></Route>
        <Route exact path="/JobPost"component={JobPost}></Route>
        <Route exact path="*"component={PageNotFound}></Route>
      </Switch>
    </Router>
      </div>
  )
}
export default App







































// const App = () => {
//   fetch("http://localhost:4000/getAllUser")
//   .then((response)=>{
//     return response.json();
//   }).then((data)=>{
//     console.log(data)
//   })
//   }
// export default App


