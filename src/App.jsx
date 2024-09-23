
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import Clothcard from './components/Clothcard';
import AddClothForm from './components/AddClothForm';

const App = () => {


  
  
  return (
    
    <div className='h-screen m-w-screen '>
  
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/singup' element={<RegistrationForm/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/form' element={<AddClothForm/>} />

    </Routes>




    </div>
   
  )
}

export default App