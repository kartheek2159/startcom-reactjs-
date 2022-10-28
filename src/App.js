import './App.css';
import Auth from './pages/Auth/Auth';
import {Home} from './pages/home/Home';
import {Routes,Route} from 'react-router-dom'
import ProfilePage from './pages/Profile/ProfilePage';
function App() {
  return (
    <div className="App">
      <div className='blur' style={{top:'-18%',right:'0'}}></div>
      <div className='blur' style={{top:'36%' ,left:'-8rem'}}></div>
      <div className='blur' style={{top:'66%' ,right:'-8rem'}}></div>
      <div className='blur' style={{top:'80%' ,right:'38rem'}}></div>
      <Routes>
        <Route path='/' element={<Auth/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
      </Routes>
    </div>
    
  );
}



export default App;
