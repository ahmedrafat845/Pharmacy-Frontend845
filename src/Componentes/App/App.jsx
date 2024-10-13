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
import MedicalTests from '../LayOutComp/MedicalTests/MedicalTests';
import FetchCartProvider from '../../Context/Cart';
import CartPage from './../LayOutComp/CartPage/CartPage';
import MedicalTourism from '../LayOutComp/medicaltourism/medicaltourism';
import ProtectRouter from '../RegisterationComp/ProtectRouter/ProtectRouter';
import WishList from '../LayOutComp/WishList/WishList';



export default function App() {
 
  let   routes=createBrowserRouter([
    {path:'/',element:<MasterLayOut/>, errorElement:<NotFound/>,children:([
      {index:true,element:<ProtectRouter> <Home/> </ProtectRouter>   },
      {path:'Products',element:<ProtectRouter><Products/></ProtectRouter>  },
      {path:'MedicalTests',element:<ProtectRouter> <MedicalTests/></ProtectRouter> },
      { path: 'Cart', element:<ProtectRouter><CartPage /></ProtectRouter>  },
      { path: 'WishList', element:<ProtectRouter><WishList /></ProtectRouter>  },
      { path: 'MedicalTourism', element:<ProtectRouter><MedicalTourism /></ProtectRouter>  },





      {path:'Login',element: <Login/> },
      {path:'SignUp',element: <SignUp/>},
      {path:'ForgetPassword',element: <ForgetPassword/>},
      {path:'ResetPassword',element: <ResetPassword/>}
      

    ])}
  ])
  
  return (
    <>
      <ToastContainer  theme='colored'/>
      <FetchCartProvider>
         <RouterProvider router={routes}/>
      </FetchCartProvider>
       
    </>
  )
}
