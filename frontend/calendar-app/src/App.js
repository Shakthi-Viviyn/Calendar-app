import './App.scss';
import SideBar from './components/SideBar';
// import NavBar from './components/NavBar';
import RightPane from './components/RightPane';
import Calendar from './components/Calendar';
import Landing from './components/loginComponents/Landing';
import Login from './components/loginComponents/Login';
import SignUp from './components/loginComponents/SignUp';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <Landing/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
    // <>
    //   <div className="home-container">
    //     <SideBar/>
    //     <Calendar/>
    //     <RightPane/>
    //   </div>
    // </>
    
  );
}

export default App;
