
import {React,Routes,Route,NavLink} from 'react-router-dom'
import { AuthenticationProvider } from './components/Authentication';
import PageNotFound from './components/PageNotFound';
import RequiredAuth from './components/RequiredAuth';
import Products from './components/Products';
import { Navbar } from './components/Navbar';
import User from './components/User';
import UserDet from './components/UserDet';
import UserAdmin from './components/userAdmin'; 
import About from './components/About';
import Order from './components/Order';
import Car from './components/Car';
import Bike from './components/Bike';
import Profile from './components/Profile';
import Home from './components/Home';
                                                              
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="order" element={<Order/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
          <Route path="products" element={<RequiredAuth><Products/></RequiredAuth>}>
          <Route index element={<Car/>}></Route>
          <Route path="cars" element={<Car/>}></Route>
          <Route path="bike" element={<Bike/>}></Route>
          </Route>
          <Route path="users" element={<User/>}></Route>
          <Route path="users/:userid" element={<UserDet/>}></Route>
          <Route path="users/admin" element={<UserAdmin/>}></Route>
          <Route path="profile" element={<RequiredAuth><Profile/></RequiredAuth>}/>
          <Route path="login" element={<Login/>}/>
        
        

          
          
        </Routes>
      </AuthenticationProvider>
      
    </div>
  );
}

export default App;
