import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './pages/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1420px] mx-auto px-2'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
