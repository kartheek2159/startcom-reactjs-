
import './App.css';
import Auth from './pages/Auth/Auth';
import Chat from './pages/Chat/Chat';
import { Home } from './pages/home/Home';
import ProfilePage from './pages/Profile/ProfilePage';

// import {Routes,Route,Navigate} from 'react-router-dom'
function App() {
  // const user=useSelector((state)=>state.authReducer.authData)
  return (
    <div className="App">
      <div className='blur' style={{top:'-18%',right:'0'}}></div>
      <div className='blur' style={{top:'36%' ,left:'-8rem'}}></div>
      <div className='blur' style={{top:'66%' ,right:'-8rem'}}></div>
      <div className='blur' style={{top:'80%' ,right:'38rem'}}></div>
      <Home/>
      {/* <Routes>
        <Route path="/" element={user?<Navigate to ="home"/>:<Navigate to='auth'/>}/>
        <Route path="/home" element={user?<Home/>:<Navigate to='../auth'/>}/>
        <Route path="/auth" element={user?<Navigate to ="../home"/>:<Auth/>}/>
      </Routes> */}
    </div>
  );
}


export default App;
