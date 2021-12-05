import './App.css';
import Login from './login';
import {  Route } from 'react-router';
import { BrowserRouter, Routes ,Navigate  } from 'react-router-dom';
import Signup from './signup';
import Home from './home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={!localStorage.getItem('userInformation')  ? <Login /> : <Navigate to='/home' />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={localStorage.getItem('userInformation')  ? <Home /> : <Navigate to='/' />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
