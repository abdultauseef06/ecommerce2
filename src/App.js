import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About  from './components/About';
import Singleproduct from './components/Singleproduct';
import Shop from './components/Shop';
import Cart from "./components/Cart";
import Register from './components/Register';
import Logout from './components/Logout';
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import AddressPage from './components/Adress';
import Checkout from "./components/CheckOut";
import Admin from "./components/Admin";

const App = () => {
  return (
    <Router>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Home" element={<Home/>} />
  <Route path="/login" element={<Login />} />
  <Route path="/About" element={<About/>}/>
  <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
  <Route path="/Shop" element={<Shop/>}/>
  <Route path="/Cart" element={<Cart/>}/>
  <Route path="/Admin" element ={<Admin/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path='/Logout' element={<Logout/>}/>
  <Route path='/Profile' element={<Profile/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path="/Address" element={<AddressPage/>}/>
  <Route path="/CheckOut" element={<Checkout/>}/>
</Routes>
    </Router>
  );
};
   
export default App;
