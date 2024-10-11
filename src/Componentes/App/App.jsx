import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MasterLayOut from './../LayOutComp/MaterLayOut/MasterLayOut';
import NotFound from './../RegisterationComp/NotFound/NotFound';
import Home from './../LayOutComp/HomePage/Home';
import Login from './../RegisterationComp/Login/Login';
import SignUp from '../RegisterationComp/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import ForgetPassword from '../RegisterationComp/ForgetPassword/ForgetPassword';
import ResetPassword from '../RegisterationComp/ResetPassword/ResetPassword';
import Products from '../LayOutComp/Products/Products';



export default function App() {
 
  let   routes=createBrowserRouter([
    {path:'/',element:<MasterLayOut/>, errorElement:<NotFound/>,children:([
      {index:true,element:  <Home/>  },
      {path:'Products',element: <Products/> },





      {path:'Login',element: <Login/> },
      {path:'SignUp',element: <SignUp/>},
      {path:'ForgetPassword',element: <ForgetPassword/>},
      {path:'ResetPassword',element: <ResetPassword/>}
      

    ])}
  ])
  
  return (
    <>
      <ToastContainer  theme='colored'/>
       <RouterProvider router={routes}/>
    </>
  )
}
