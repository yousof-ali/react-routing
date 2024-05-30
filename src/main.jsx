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
import Post from './component/post/Post.jsx';
import PostDetails from './component/postDetails/PostDetails.jsx';
import NotFound from './component/notFound/NotFound.jsx';




const router = createBrowserRouter([
  {
    path:"/",
    element:<Nav></Nav>,
    errorElement:<NotFound></NotFound>,
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
     },
     {
      path:"post",
      loader:()=>fetch("https://jsonplaceholder.typicode.com/posts"),
      element:<Post></Post>
     },
     {
      path:"post/:postID",
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
      element:<PostDetails></PostDetails>
     }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
