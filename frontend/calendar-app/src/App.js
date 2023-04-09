import './App.scss';
import SideBar from './components/SideBar';
// import NavBar from './components/NavBar';
import RightPane from './components/RightPane';
import Calendar from './components/Calendar';

function App() {
  return (
    <>
      <div className="home-container">
        <SideBar/>
        <Calendar/>
        <RightPane/>
      </div>
    </>
    
  );
}

export default App;
