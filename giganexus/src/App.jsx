import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Customize from './Component/Customize';
import Categories from './Component/Categories';
import NewLaunch from './Component/NewLaunch';
import About from './Component/About';
import Landing from './Component/Landing';

const App = () => {
  const router = createBrowserRouter([
   
    {
      path:"/",
      element: <Home/>,
      children:[
        {
          path:"/landing",
          element:<Landing/>
        },
        {
          path: "/about",
          element: <About/>
        },
    
        {
          path:"/customize",
          element:<Customize/>
        },
        {
          path:"/categories",
          element: <Categories/>
        },
        {
          path:"/new_launch",
          element:<NewLaunch/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element: <Signup/>
        }
      ]
    },

    

  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
