
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import Clothcard from './components/Clothcard';
import ForgetPassword from './components/ForgetPassword';
import UserProfile from './components/UserProfile';
import AdminLoginForm from './AdminComponent/AdminLoginForm';
import AddClothForm from './AdminComponent/AddClothForm';

const App = () => {


  
  
  return (
    
    <div className='h-screen m-w-screen '>
  
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/signup' element={<RegistrationForm/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/form' element={<AddClothForm/>} />
    <Route path='/ForgetPassword' element={<ForgetPassword/>} />
    <Route path='/profile' element={<UserProfile/>} />
    <Route path='/adminlogin' element={<AdminLoginForm/>} />

    </Routes>




    </div>
   
  )
}

export default App