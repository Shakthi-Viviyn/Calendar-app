import './App.scss';
import HomeMain from './components/homeComponents/HomeMain';
import Landing from './components/loginComponents/Landing';
import Login from './components/loginComponents/Login';
import SignUp from './components/loginComponents/SignUp';
import AddGroup from './components/homeComponents/groupAddComponents/AddGroup';
import CreateForm from './components/homeComponents/groupAddComponents/CreateForm';
import JoinForm from './components/homeComponents/groupAddComponents/JoinForm';
import FormSelector from './components/homeComponents/groupAddComponents/FormSelector';
import Settings from './components/homeComponents/Settings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element= {<Landing/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/signup" element= {<SignUp/>} />
        <Route path="/home" element= {<HomeMain/>}/>
        <Route path="/add" element={<AddGroup />}>
          <Route index element={<FormSelector />} />
          <Route path="create" element={<CreateForm />} />
          <Route path="join" element={<JoinForm />} />
        </Route>
        <Route path="/settings" element={<Settings/>}></Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}

export default App;
