import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './component/nav/Nav.jsx';
import Home from './component/home/Home.jsx';
import Contact from './component/contact/Contact.jsx';
import Users from './component/users/Users.jsx';
import Detals from './component/detals/Detals.jsx';




const router = createBrowserRouter([
  {
    path:"/",
    element:<Nav></Nav>,
    children:[
     {
      path:"home",
      element:<Home></Home>
     },
     {
      path:"contact",
      element:<Contact></Contact>
     },
     {
      path:"users",
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
     },
     {
      path:"user/:userid",
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
      element:<Detals></Detals>
     }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
