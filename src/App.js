import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Login/Registration/Register';
import Footer from './Pages/Shared/footer/Footer';
import Header from './Pages/Shared/Header/Header';



const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Routes>
        <Route path='/signup' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;