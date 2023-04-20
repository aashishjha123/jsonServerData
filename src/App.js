
import './App.css';
import Home from './Home';
import Register from './Register';
import Login from './Login'
import Dashboard from './Dashboard'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard />}/>
    
    
   </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;
