import './App.scss';
import HomeMain from './components/homeComponents/HomeMain';
import Landing from './components/loginComponents/Landing';
import Login from './components/loginComponents/Login';
import SignUp from './components/loginComponents/SignUp';
import AddGroup from './components/homeComponents/AddGroup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element= {<Landing/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/signup" element= {<SignUp/>} />
        <Route path="/home" element= {<HomeMain/>}/>
        <Route path="/add" element={<AddGroup />} />
      </Routes>
    </Router>
  )
}

export default App;
