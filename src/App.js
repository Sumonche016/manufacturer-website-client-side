import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Review from './Pages/Dashboard/Review';
import Home from './Pages/Home/Home/Home';
import SigngleTool from './Pages/Home/Home/Tools/SingleTool/SigngleTool';
import Login from './Pages/Login/Login/Login/Login';
import Register from './Pages/Login/Registration/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Pages/Payment/Payment';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProdut from './Pages/Dashboard/ManageProdut';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Login/Login/RequireAdmin';
import Blog from './Pages/Blog/Blog';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/tool/:id' element={
          <RequireAuth>
            <SigngleTool></SigngleTool>
          </RequireAuth>
        }></Route>


        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>

          <Route path='myorder' element={<MyOrders></MyOrders>}></Route>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='manageorder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageproduct' element={<ManageProdut></ManageProdut>}></Route>
          <Route path='makeadmin' element={<RequireAdmin>
            <MakeAdmin></MakeAdmin>
          </RequireAdmin>}></Route>
        </Route>


        <Route path='/payment' element={<Payment></Payment>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
};

export default App;